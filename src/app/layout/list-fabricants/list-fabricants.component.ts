import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';

import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";

import { first,tap } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {UpdateFabriquatDialogComponent} from './update-fabriquat-dialog/update-fabriquat-dialog.component';
import { CreateFabriquantDialogComponent } from './create-fabriquant-dialog/create-fabriquant-dialog.component';
import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';
import { AccountFabricantDialogComponent } from './../shared/account-fabricant-dialog/account-fabricant-dialog.component';

import { Fabricant} from '../../model/fabricant.model';

import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

import jsPDF from 'jspdf';
import 'jspdf-autotable';
@Component({
    selector: 'app-list-fabricants',
    templateUrl: './list-fabricants.component.html',
    styleUrls: ['./list-fabricants.component.scss'],
})
export class ListFabricantsComponent implements OnInit,AfterViewInit {
    durationInSeconds = 5;
    fabricants:MatTableDataSource<Fabricant>;
    dataFabricants = [];
    displayedColumns: string[] = ['logo','marque', 'createdAt', 'updatedAt', 'manipulations'];
    loading : boolean = false;
    error : string = "";
    lengthList : number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    readonly ROOT_URL = environment.baseUrl;
    constructor(private fabricant:FabricantCRUDService,
                public dialog: MatDialog,
                private router:Router,
                private _snackBar: MatSnackBar
                ) {}

    ngOnInit() {
      this.loading = true;
      this.fabricant.listPage(1,5)
          .pipe(first()).subscribe(
            res => {
                console.log(res);
                this.fabricants = new MatTableDataSource(res.manufacturers);
                this.dataFabricants = res.manufacturers;
                this.lengthList = res.count;
                this.fabricants.sort = this.sort;
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
        this.paginator.page
            .pipe(
                tap(() => this.loadFabricantsPage())
            )
            .subscribe();
    }

    loadFabricantsPage() {
      this.loading = true;
      this.fabricant.listPage(this.paginator.pageIndex+1,this.paginator.pageSize,'asc')
        .pipe(first()).subscribe(
          res => {
            console.log(res);
            this.fabricants = new MatTableDataSource(res.manufacturers);
            this.dataFabricants = res.manufacturers;
            this.fabricants.sort = this.sort;
            this.loading = false;
          },
          err => {
            this.error = "Error occured : "+ err;
            console.log("Error occured : "+ err);
            this.loading = false;
          }
        );
    }

    onDelete(id:string,i : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
        title : "Confirmer la suppression",
        message : "Êtes vous sûre de supprimer cette marque ?"
      };
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.loading = true;
          this.fabricant.delete(id).subscribe(
              res => {
                console.log(res);
                this.dataFabricants.splice(i,1);
                this.fabricants = new MatTableDataSource(this.dataFabricants);
                this.lengthList --;
                this.loading = false;
                this._snackBar.openFromComponent(MessageSnackBarComponent, {
                  duration: this.durationInSeconds * 1000,
                  data : {message: 'la marque a bien était supprimée', icon : "delete"}
                });
              },
              err => {
                this.error = "Error occured : "+ err;
                console.log("Error occured : "+ err);
                this.loading = false;
              }
            );
        }
      });
    }
    onUpdate(fabricant:any,i : number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {fabricant: fabricant};
      const dialogRef = this.dialog.open(UpdateFabriquatDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          this.loading = true;
          let formData: FormData = new FormData();
          if(result.marque != ""){
            formData.append('brand', result.marque);
          }
          if(result.logo != null){
            formData.append('images', result.logo);
          }
          this.fabricant.update(fabricant.id,formData).subscribe(
              res => {
                console.log(res);
                this.fabricants.data[i].brand = result.marque;
                this.fabricants.data[i].logo = result.logo;
                this.loading = false;
                this._snackBar.openFromComponent(MessageSnackBarComponent, {
                  duration: this.durationInSeconds * 1000,
                  data : {message: 'la marque a bien était modifiée', icon : "check_circle"}
                });
              },
              err => {
                this.error = "Error occured : "+ err;
                console.log("Error occured : "+ err);
                this.loading = false;
              }
            );
        }
      });
    }

    onCreate(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(CreateFabriquantDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(
        result => {
          if(result.status){
            this.loading = true;
            this.fabricant.create(result.marque,result.logo)
            .pipe(first()).subscribe(
                res => {
                    this.loading = false;
                    console.log(res);
                    this.loadFabricantsPage();
                    this.lengthList ++;
                    this._snackBar.openFromComponent(MessageSnackBarComponent, {
                      duration: this.durationInSeconds * 1000,
                      data : {message: 'la marque a bien était ajoutée',icon : "playlist_add_check"}
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

    onDisplayAdminPage(id : string){
        console.log("/dashboard/afficherFabricants/admins/"+id);
        this.router.navigate(["/dashboard/afficherUsersFabricants/admins/"+id]);
    }

    onDisplayContract(id : string){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      const dialogRef = this.dialog.open(AccountFabricantDialogComponent, dialogConfig);
    }

    onPrint(){
      let doc = new jsPDF();
      doc.autoTable({html: '#my-table'});
      doc.save('fabricants.pdf')
    }
}
