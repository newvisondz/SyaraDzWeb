import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {CreateAttributeDialogComponent} from './../create-attribute-dialog/create-attribute-dialog.component';

@Component({
  selector: 'app-list-colors-dialog',
  templateUrl: './list-colors-dialog.component.html',
  styleUrls: ['./list-colors-dialog.component.scss']
})
export class ListColorsDialogComponent implements OnInit {
  displayedColumns: string[] = ['index', 'aperçu','couleur','tarif', 'manipulations'];
  colorsTable:MatTableDataSource<Color>;
  originLength = 0
  constructor(@Optional() public dialogRef: MatDialogRef<ListColorsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.colorsTable = new MatTableDataSource(this.data.colors);
    this.originLength = this.data.colors.length
  }
  //créer une couleur
  onCreateCouleur(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : "Créer une couleur"
    };
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la création
        console.log("add color " + result.name);
        const color = {
          name : result.name,
          value : result.value
        }
        //ajouter la couleur
        let data = this.colorsTable.data
        data.push(color)
        this.colorsTable = new MatTableDataSource(data)
      }
    });
  }

  //supprimer couleur
  onDeleteCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //valider la suppression
        console.log("delete couleur " + this.colorsTable.data[id].name);
        let data = this.colorsTable.data
        data.splice(id,1);
        this.colorsTable = new MatTableDataSource(data);
      }
    });
  }


  //modifier une couleur
  onUpdateCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : "Modifier la couleur"
    };
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la modification
        console.log("update couleur " + this.colorsTable.data[id].name);
        let data = this.colorsTable.data
        data[id] = {
          name : result.name,
          value : result.value
        }
        this.colorsTable = new MatTableDataSource(data);
      }
    });
  }

  onClose(){
    const data = {
      status : true,
      colors : this.colorsTable.data
    }
    console.log(data)
    this.dialogRef.close(data);
  }
  onCancel(){
    const data = {
      status : false,
    }
    for(let i = 0 ; i< (this.colorsTable.data.length - this.originLength); i++){
      this.colorsTable.data.pop();
    }

    this.dialogRef.close(data);
  }

}
interface Color{
  name : string;
  value : string
}
