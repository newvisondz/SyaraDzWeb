import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';
import { first,tap } from 'rxjs/operators';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {UpdateModeleDialogComponent} from './../update-modele-dialog/update-modele-dialog.component';
import {CreateAttributeDialogComponent} from './../create-attribute-dialog/create-attribute-dialog.component';
import { ModelService } from "../../../Services/Model-CRUD/model.service";

@Component({
  selector: 'app-list-colors-dialog',
  templateUrl: './list-colors-dialog.component.html',
  styleUrls: ['./list-colors-dialog.component.scss']
})
export class ListColorsDialogComponent implements OnInit {
  displayedColumns: string[] = ['index', 'aperçu','couleur','tarif', 'manipulations'];
  colors = [];
  colorsTable:MatTableDataSource<Color>;
  idModel = "" ;
  idManufacturer = "";
  loading = false;
  error = "";

  constructor(@Optional() public dialogRef: MatDialogRef<ListColorsDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog: MatDialog,
              private modelService : ModelService) { }

  ngOnInit() {
    this.colors = this.data.colors;
    this.colorsTable = new MatTableDataSource(this.colors);
    this.idModel = this.data.idModel;
    this.idManufacturer = this.data.idManufacturer;
  }
  //créer une couleur
  onCreateCouleur(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(CreateAttributeDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la création
        console.log("add color " + result.name);
        //ajouter la couleur
        this.colors.push({
          name : result.name,
          value : result.value
        })

        let formData: FormData = new FormData();
        formData.append('colors', JSON.stringify(this.colors));
        console.log(formData);

        this.loading = true;
        this.modelService.update(this.idManufacturer,this.idModel,formData)
        .pipe(first()).subscribe(
            res => {
                this.loading = false;
                console.log(res);
                //insert new color into model using idModel
                console.log("add couleur " + result.name);
                this.colorsTable = new MatTableDataSource(this.colors);
            },
            err => {
                this.error = err;
                this.loading = false;
            }
        );
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
        console.log("delete couleur " + this.colors[id].name);
        this.colors.splice(id,1);
        this.colorsTable = new MatTableDataSource(this.colors);
      }
    });
  }


  //modifier une couleur
  onUpdateCouleur(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      option: this.colors[id],
    };
    const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        //valider la modification
        console.log("update couleur " + this.colors[id].name);
        this.colors[id] = {
          name : result.name,
          value : result.value
        }
        this.colorsTable = new MatTableDataSource(this.colors);
      }
    });
  }

}
interface Color{
  name : string;
  value : string
}
