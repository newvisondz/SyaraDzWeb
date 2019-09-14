import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { first,tap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { ModelService } from "../../Services/Model-CRUD/model.service";

import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';
import { ZoomImageDialogComponent } from './../../shared/zoom-image-dialog/zoom-image-dialog.component';
import { UpdateModeleDialogComponent } from './update-modele-dialog/update-modele-dialog.component';
import { CreateAttributeDialogComponent } from './create-attribute-dialog/create-attribute-dialog.component';
import { CreateVersionDialogComponent } from './create-version-dialog/create-version-dialog.component';
import { CreateModeleDialogComponent } from './create-modele-dialog/create-modele-dialog.component';
import { ListColorsDialogComponent } from './list-colors-dialog/list-colors-dialog.component';
import { ListOptionsDialogComponent } from './list-options-dialog/list-options-dialog.component';

import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';


import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { environment } from '../../../environments/environment';
@Component({
    selector: 'app-list-modeles',
    templateUrl: './list-modeles.component.html',
    styleUrls: ['./list-modeles.component.scss'],
})
export class ListModelesComponent implements OnInit,AfterViewInit {
    titleView = "";
    //utlisés pour aller à la vue des versions
    path = "versions/";
    //baseUrl for get full link of images
    readonly ROOT_URL = environment.baseUrl;
    //for loading and displaying errors
    loading = false;
    error = "";
    //header of the table
    displayedColumns: string[] = ['photo','model','versions', 'couleurs','options', 'manipulations'];
    tabModels:MatTableDataSource<Model>;

    manufacturerId = "";

    durationInSeconds = 5;


    constructor(public dialog: MatDialog,
                private modelService : ModelService,
                private _snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.manufacturerId = localStorage.getItem('manufacturer');
        this.titleView = "Tout les modéles de "+ this.manufacturerId;
        //get the models list
        this.loading = true;
        this.modelService.list(this.manufacturerId)
            .pipe(first()).subscribe(
              res => {
                  console.log(res);
                  this.tabModels = new MatTableDataSource(res.models);
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

    //display colors dialog
    onDisplayColors(id:string,colors:any){
      //creation of the dialog
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        colors: colors,
      };
      const dialogRef = this.dialog.open(ListColorsDialogComponent, dialogConfig);
      //after close create colors if there is new colors
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){

          let formData: FormData = new FormData();
          formData.append('colors', JSON.stringify(result.colors));
          console.log(formData);

          this.loading = true;
          this.modelService.update(this.manufacturerId,id,formData)
          .pipe(first()).subscribe(res => {
                this.loading = false;
                console.log(res);
            },err => {
                this.error = err;
                this.loading = false;
            }
          );
        }
      });
    }

    //display colors dialog
    onDisplayOptions(id:string,options:any){
      //creation of the dialog
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        options: options,
      };
      const dialogRef = this.dialog.open(ListOptionsDialogComponent, dialogConfig);
      //after close create colors if there is new colors
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){

          let formData: FormData = new FormData();
          formData.append('options', JSON.stringify(result.options));

          console.log(formData);

          this.loading = true;
          this.modelService.update(this.manufacturerId,id,formData)
          .pipe(first()).subscribe(res => {
                this.loading = false;
                console.log(res);
            },err => {
                this.error = err;
                this.loading = false;
            }
          );
        }
      });
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
          console.log(JSON.stringify(result.colors));
          formData.append('colors', JSON.stringify(result.colors));
          console.log(JSON.stringify(result.options));
          formData.append('options', JSON.stringify(result.options));

          formData.append('images', result.photos);
          console.log(formData.get("images"));
          console.log(result.photos);

          this.loading = true;
          this.modelService.create(this.manufacturerId,formData)
          .pipe(first()).subscribe(
              res => {
                  this.loading = false;
                  console.log(res);
                  //add model to view
                  let data = this.tabModels.data
                  data.push(res)
                  this.tabModels = new MatTableDataSource(data);
                  this._snackBar.openFromComponent(MessageSnackBarComponent, {
                    duration: this.durationInSeconds * 1000,
                    data : {message: 'Le modéle ' + result.nameModele + ' a bien été crée', icon : "check-circle"}
                  });
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
            formData.append('images', result.photos);
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

    onDeleteModel(id:string,index : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
       title : "Confirmer la suppression",
       message : "Êtes vous sûre de supprimer ce modéle ?"
      };
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.loading = true;
          this.modelService.delete(this.manufacturerId,id)
          .pipe(first()).subscribe(
              res => {
                  this.loading = false;
                  console.log(res);
                  let data = this.tabModels.data;
                  data.splice(index,1);
                  this.tabModels = new MatTableDataSource(data);
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
    zoomOnPhoto(images : any){
      let base = new String(this.ROOT_URL);
      let photos = [];
      for(let i = 0; i<images.length; i++){
        photos.push(base.concat(images[i]));
      }
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title : "Tout le photos de ce modéle",
        photos : photos
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
