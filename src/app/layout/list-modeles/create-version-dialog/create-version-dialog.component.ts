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
    let value = this.firstFormGroup.controls['value'].value;
    //il faut recuperer optionsList.value et la comparer avec le choix du client
    let values = [];
    for(let i=0; i<this.optionsList.length; i++){
      if(this.optionsList[i].name == name){
        for (let index = 0; index < this.optionsList[i].values.length; index++) {
          if (this.optionsList[i].values[index].value == value) {
            values.push(this.optionsList[i].values[index].id);
          }
        }
      }
    }
    this.options.push({
      name : name,
      values : values
    });
  }

  onCreateColor(){
    let name = this.firstFormGroup.controls['nameColor'].value;
    let id = "";
    
    for(let i=0; i<this.colorsList.length; i++){
      if(this.colorsList[i].name == name){
        id = this.colorsList[i].id;
      }
    }
    this.colors.push({
      name : name,
      id : id
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
        this.colors.splice(id,1);
      }
    });
  }

  onConfirm(){
    let option = [];
    let color = [];

    this.options.forEach(element => {
      option.push(...element.values)
    });

    this.colors.forEach(element => {
      color.push(element.id)
    });

    const data = {
      status : true,
      name : this.firstFormGroup.controls['nameVersion'].value,
      options : option,
      colors : color,
    }

    // console.log(data.name);
    // console.log(data.options);
    // console.log(data.colors);
    
    this.dialogRef.close(data);
  }
}
