import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {CreateAttributeDialogComponent} from './../create-attribute-dialog/create-attribute-dialog.component';

@Component({
  selector: 'app-list-options-dialog',
  templateUrl: './list-options-dialog.component.html',
  styleUrls: ['./list-options-dialog.component.scss']
})
export class ListOptionsDialogComponent implements OnInit {
  displayedColumns: string[] = ['index', 'aperçu','option','tarif', 'manipulations'];
  optionsTable:MatTableDataSource<Option>;
  originLength = 0
  constructor(@Optional() public dialogRef: MatDialogRef<ListOptionsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.optionsTable = new MatTableDataSource(this.data.options);
    this.originLength = this.data.options.length
  }
  //créer une couleur
  onCreateOption(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : "Créer une option"
    };
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la création
        console.log("add option " + result.name);
        const option = {
          name : result.name,
          values : result.value
        }
        //ajouter la couleur
        let data = this.optionsTable.data
        data.push(option)
        this.optionsTable = new MatTableDataSource(data)
      }
    });
  }

  //modifier une couleur
  onUpdateCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : "Modifier l'option"
    };
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la modification
        console.log("update option " + this.optionsTable.data[id].name);
        let data = this.optionsTable.data
        data[id] = {
          name : result.name,
          values : result.value
        }
        this.optionsTable = new MatTableDataSource(data);
      }
    });
  }

  onClose(){
    const data = {
      status : true,
      options : this.optionsTable.data
    }
    console.log(data)
    this.dialogRef.close(data);
  }
  onCancel(){
    const data = {
      status : false,
    }
    for(let i = 0 ; i< (this.optionsTable.data.length - this.originLength); i++){
      this.optionsTable.data.pop();
    }

    this.dialogRef.close(data);
  }

}
interface Option{
  name : string;
  values : string
}
