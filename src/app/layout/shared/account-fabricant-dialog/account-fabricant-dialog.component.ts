import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-fabricant-dialog',
  templateUrl: './account-fabricant-dialog.component.html',
  styleUrls: ['./account-fabricant-dialog.component.scss']
})
export class AccountFabricantDialogComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(@Optional() public dialogRef: MatDialogRef<AccountFabricantDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      country: ['', Validators.required],
      currency: ['', Validators.required],
      account_number: ['', Validators.required]
    });
  }

  onConfirm(){
    this.dialogRef.close();
  }
}
