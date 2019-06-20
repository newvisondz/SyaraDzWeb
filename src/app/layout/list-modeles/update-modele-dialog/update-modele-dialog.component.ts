import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-update-modele-dialog',
  templateUrl: './update-modele-dialog.component.html',
  styleUrls: ['./update-modele-dialog.component.scss']
})
export class UpdateModeleDialogComponent implements OnInit {
  firstFormGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<UpdateModeleDialogComponent>,
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
