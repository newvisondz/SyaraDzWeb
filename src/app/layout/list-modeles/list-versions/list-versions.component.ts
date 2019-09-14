import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig, MatTableDataSource} from '@angular/material';
import { first,tap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { VersionService  } from "../../../Services/Version-CRUD/version.service";
import { ModelService  } from "../../../Services/Model-CRUD/model.service";

import { CreateVersionDialogComponent} from './../create-version-dialog/create-version-dialog.component';
import { ListOptionsDialogComponent } from '../list-options-dialog/list-options-dialog.component';
import { ListColorsDialogComponent } from '../list-colors-dialog/list-colors-dialog.component';

import jsPDF from 'jspdf';
// import 'jspdf-autotable';

@Component({
    selector: 'app-list-versions',
    templateUrl: './list-versions.component.html',
    styleUrls: ['./list-versions.component.scss'],
})


export class ListVersionsComponent implements OnInit,AfterViewInit {
    //récupérer idModel a partir de router
    idModel ;
    loading = false;
    error = "";
    manufacturerId = "";
    optionsList = [];
    colorsList = [];

    //list des modéles à récupérer depuis la BDD
    //we don't need to initialise once we fetch versions from database with idModele
    versionsTable : MatTableDataSource<Version>;
    displayedColumns: string[] = ['index','version','options', 'colors', 'manipulations'];


    constructor(public dialog: MatDialog,
                private _Activatedroute:ActivatedRoute,
                private _VersionService:VersionService,
                private _ModelService : ModelService) {}

    ngOnInit() {
        //initialise versionsTable
        this.idModel = this._Activatedroute.snapshot.paramMap.get("id");
        this.manufacturerId = localStorage.getItem('manufacturer');
        console.log(this.idModel)
        this._ModelService.getDetails(this.manufacturerId,this.idModel)
        .pipe(first()).subscribe(res => {
              this.optionsList = res.options;
              this.colorsList = res.colors;
              //then display list versions
              this._VersionService.list(this.manufacturerId,this.idModel)
                  .pipe(first()).subscribe(
                    res => {
                        this.loading = false;
                        console.log(res);
                        let tab = [];
                        for(var version in res){
                          console.log(res[version]);
                          tab.push(res[version]);
                        }
                        this.versionsTable = new MatTableDataSource(tab);
                    },
                    err => {
                        this.error = "Error occured : "+ err;
                        console.log("Error occured : "+ err);
                        this.loading = false;
                    }
                );
          },err => {
              this.error = err;
              this.loading = false;
          }
        );
    }

    ngAfterViewInit() {

    }

    //aficher dialog des options
    onDisplayOptions(id:string,options : any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        options : options,
        optionsList : this.optionsList
      };
      const dialogRef = this.dialog.open(ListOptionsDialogComponent, dialogConfig);
      //after close create colors if there is new colors
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){

          let formData: FormData = new FormData();
          formData.append('options', JSON.stringify(result.options));

          console.log(formData);

          this.loading = true;
          this._VersionService.update(this.manufacturerId,this.idModel,id,formData)
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

    //aficher dialog des options
    onDisplayColors(id:string,colors : any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        colors : colors,
        colorsList : this.colorsList
      };
      const dialogRef = this.dialog.open(ListColorsDialogComponent, dialogConfig);
      //after close create colors if there is new colors
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){

          let formData: FormData = new FormData();
          formData.append('colors', JSON.stringify(result.colors));
          console.log(formData);

          this.loading = true;
          this._VersionService.update(this.manufacturerId,this.idModel,id,formData)
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

    //créer une version
    onCreateVersion(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {
        optionsList : this.optionsList,
        colorsList : this.colorsList
      };
      const dialogRef = this.dialog.open(CreateVersionDialogComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          //valider la création
          console.log("add version " + result.nameVersion);
          //getting the model detials
          let formData: FormData = new FormData();
          formData.append('name',result.nameVersion);
          console.log(JSON.stringify(result.colors));
          formData.append('colors', JSON.stringify(result.colors));
          console.log(JSON.stringify(result.options));
          formData.append('options', JSON.stringify(result.options));

          this.loading = true;
          this._VersionService.create(this.manufacturerId,this.idModel,formData)
          .pipe(first()).subscribe(
              res => {
                  this.loading = false;
                  console.log(res);
                  //add model to view
                  let data = this.versionsTable.data
                  for(var version in res){
                    console.log(res[version]);
                    data.push(res[version]);
                  }
                  this.versionsTable = new MatTableDataSource(data);
              },
              err => {
                  this.error = err;
                  this.loading = false;
              }
          );
        }
      });
    }

    printVersions(){
      let doc = new jsPDF();
      doc.autoTable({html: '#my-table'});
      doc.save('versions.pdf')
    }

}
//types utilisés
interface Version{
  id : string;
  name : string;
  options : any;
  colors : any
}
