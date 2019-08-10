import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-create-version-dialog',
  templateUrl: './create-version-dialog.component.html',
  styleUrls: ['./create-version-dialog.component.scss']
})
export class CreateVersionDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  options = [];

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateVersionDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nameVersion : ['', Validators.required],
      name: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  onCreateOption(){
    console.log("add option " + this.firstFormGroup.controls['name'].value.name);
    this.options.push({
      name : this.firstFormGroup.controls['name'].value,
      value : this.firstFormGroup.controls['value'].value
    })
  }

  onDeleteOption(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("delete option " + this.options[id].name);
        this.options.splice(id,1);
      }
    });
  }

  onConfirm(){
    const data = {
      status : true,
      nameVersion : this.firstFormGroup.controls['nameVersion'].value,
      options : this.options
    }
    this.dialogRef.close(data);
  }
}
