import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { first,tap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

import { ModelService } from "../../Services/Model-CRUD/model.service";

import { ZoomImageDialogComponent } from './../../shared/zoom-image-dialog/zoom-image-dialog.component';
import { UpdateModeleDialogComponent } from './update-modele-dialog/update-modele-dialog.component';
import { CreateAttributeDialogComponent } from './create-attribute-dialog/create-attribute-dialog.component';
import { CreateVersionDialogComponent } from './create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './create-modele-dialog/create-modele-dialog.component';
import { ListColorsDialogComponent } from './list-colors-dialog/list-colors-dialog.component';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
    selector: 'app-list-modeles',
    templateUrl: './list-modeles.component.html',
    styleUrls: ['./list-modeles.component.scss'],
})
export class ListModelesComponent implements OnInit,AfterViewInit {

    //list des modéles à récupérer depuis la BDD
    path = "versions/";
    loading = false;
    error = "";
    displayedColumns: string[] = ['index', 'photo','model','versions', 'couleurs','disponibilte', 'manipulations'];
    listModeles = [];
    manufacturerId = "";
    tabModels:MatTableDataSource<Model>;

    constructor(public dialog: MatDialog,
                private modelService : ModelService) {
    }

    ngOnInit() {
        this.manufacturerId = localStorage.getItem('manufacturer');
        //remplir la Liste des modéles
        this.loading = true;
        this.modelService.list(this.manufacturerId)
            .pipe(first()).subscribe(
              res => {
                  console.log(res);
                  this.tabModels = new MatTableDataSource(res.models);
                  this.listModeles = res.models;
                  //this.fabricants.sort = this.sort;
                  this.loading = false;
              },
              err => {
                  this.error = "Error occured : "+ err;
                  console.log("Error occured : "+ err);
                  this.loading = false;
              }
          );
    }

    ngAfterViewInit() {

    }

    //afficher les Couleurs
    onDisplayColors(id:string,colors:any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        colors: colors,
        idModel : id,
        idManufacturer : this.manufacturerId
      };
      const dialogRef = this.dialog.open(ListColorsDialogComponent, dialogConfig);
    }

    //créer un modéle
    onCreateModele(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          console.log("add modele " + result.nameModele);
          //getting the model detials
          let formData: FormData = new FormData();
          formData.append('name',result.nameModele);
          formData.append('colors', JSON.stringify(result.couleurs));
          //formData.append('options',result.couleurs);
          formData.append('images', result.photo);
          console.log(formData);
          this.loading = true;
          this.modelService.create(this.manufacturerId,formData)
          .pipe(first()).subscribe(
              res => {
                  this.loading = false;
                  console.log(res);
                  //add model to view
                  this.listModeles.push(res);
                  this.tabModels = new MatTableDataSource(this.listModeles);
              },
              err => {
                  this.error = err;
                  this.loading = false;
              }
          );
        }
      });
    }

    //modifier un model
    onUpdateModel(id:string,name : string,image : string){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        idModel : id,
        name : name,
        image : image,
      };
      const dialogRef = this.dialog.open(UpdateModeleDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la création
          console.log("update model " + result.nameModele);

          let formData: FormData = new FormData();
          if(result.name != ""){
            formData.append('name', result.nameModele);
          }
          if(result.photo != null){
            formData.append('images', result.photo);
          }
          console.log(formData);

          this.loading = true;
          this.modelService.update(this.manufacturerId,id,formData)
          .pipe(first()).subscribe(
              res => {
                  this.loading = false;
                  console.log(res);

              },
              err => {
                  this.error = err;
                  this.loading = false;
              }
          );
        }
      });
    }

    //zoomer sur la photo de model
    zoomOnPhoto(url : string){
      let base = new String("https://sayaradz2.herokuapp.com");
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        image : base.concat(url)
      };
      const dialogRef = this.dialog.open(ZoomImageDialogComponent, dialogConfig);

    }

    //print in pdf
    printModels(){
      let doc = new jsPDF();
      doc.autoTable({html: '#my-table'});
      doc.save('modéles.pdf')
    }
}
interface Model{
  id : string;
  name : string;
  images : any;
  colors : any;
  options : any;
}
