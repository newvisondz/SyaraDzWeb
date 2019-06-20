import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-attribute-dialog',
  templateUrl: './create-attribute-dialog.component.html',
  styleUrls: ['./create-attribute-dialog.component.scss']
})
export class CreateAttributeDialogComponent implements OnInit {
  firstFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateAttributeDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  onConfirm(){
    const data = {
      status : true,
      name : this.firstFormGroup.controls['name'].value,
      value : this.firstFormGroup.controls['value'].value
    }
    this.dialogRef.close(data);
  }
}
