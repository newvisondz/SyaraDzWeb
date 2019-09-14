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
  colors = [];
  optionsList = [];
  colorsList = [];
  selectedOption = {};

  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<CreateVersionDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.data);
    this.optionsList = this.data.optionsList;
    this.colorsList = this.data.colorsList;

    this.firstFormGroup = this._formBuilder.group({
      nameVersion : ['', Validators.required],
      name: [''],
      value : [''],
      nameColor : [''],
    });
  }
  setSelectedOption(option : any){
    this.selectedOption = option;
  }
  onCreateOption(){
    let name = this.firstFormGroup.controls['name'].value;
    let values = {};
    for(let i=0; i<this.optionsList.length; i++){
      if(this.optionsList[i].name == name){
        values = this.optionsList[i].values;
        console.log(values);
      }
    }
    this.options.push({
      name : name,
      values : values
    });
  }

  onCreateColor(){
    let name = this.firstFormGroup.controls['nameColor'].value;
    let value = "";
    for(let i=0; i<this.colorsList.length; i++){
      if(this.colorsList[i].name == name){
        value = this.colorsList[i].values;
      }
    }
    this.colors.push({
      name : name,
      value : value
    });
  }

  onDeleteOption(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title : "Supprimer option",
      message : "Êtes vous sûre de supprimer cette option ?"
    };
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("delete option " + this.options[id].name);
        this.options.splice(id,1);
      }
    });
  }

  onDeleteColor(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      title : "Supprimer couleur",
      message : "Êtes vous sûre de supprimer cette couleur ?"
    };
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("delete color " + this.colors[id].name);
        this.colors.splice(id,1);
      }
    });
  }

  onConfirm(){
    const data = {
      status : true,
      nameVersion : this.firstFormGroup.controls['nameVersion'].value,
      options : this.options,
      colors : this.colors
    }
    this.dialogRef.close(data);
  }
}
