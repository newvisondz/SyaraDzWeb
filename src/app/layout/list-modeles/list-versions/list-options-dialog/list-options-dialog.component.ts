import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';

import {DeleteConfirmDialogComponent} from './../../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {UpdateModeleDialogComponent} from './../../update-modele-dialog/update-modele-dialog.component';
import {CreateAttributeDialogComponent} from './../../create-attribute-dialog/create-attribute-dialog.component';

@Component({
  selector: 'app-list-options-dialog',
  templateUrl: './list-options-dialog.component.html',
  styleUrls: ['./list-options-dialog.component.scss']
})
export class ListOptionsDialogComponent implements OnInit {
  displayedColumns: string[] = ['index','option', 'valeur','tarif', 'manipulations'];
  options = [];
  optionsTable:MatTableDataSource<Option>;
  idModel = 0 ;

  constructor(@Optional() public dialogRef: MatDialogRef<ListOptionsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.options = this.data.options;
    this.optionsTable = new MatTableDataSource(this.options);
    this.idModel = this.data.id;
  }
  //créer une Option
  onCreateOption(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la création
        //insert new color into model using idModel
        console.log("add Option " + result.name);
        this.options.push({
          name : result.name,
          value : result.value
        })
        this.optionsTable = new MatTableDataSource(this.options);
      }
    });
  }

  //supprimer Option
  onDeleteOption(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //valider la suppression
        console.log("delete Option " + this.options[id].name);
        this.options.splice(id,1);
        this.optionsTable = new MatTableDataSource(this.options);
      }
    });
  }


  //modifier une Option
  onUpdateOption(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      option: this.options[id],
    };
    const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la modification
        console.log("update Option " + this.options[id].name);
        this.options[id] = {
          name : result.name,
          value : result.value
        }
        this.optionsTable = new MatTableDataSource(this.options);
      }
    });
  }

}
interface Option{
  name : string;
  value : string
}
