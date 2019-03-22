import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { first,tap } from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import {UpdateFabriquatDialogComponent} from './update-fabriquat-dialog/update-fabriquat-dialog.component';
@Component({
    selector: 'app-list-fabricants',
    templateUrl: './list-fabricants.component.html',
    styleUrls: ['./list-fabricants.component.scss'],
})
export class ListFabricantsComponent implements OnInit,AfterViewInit {

    fabricants:MatTableDataSource<object>;
    displayedColumns: string[] = ['index','marque', 'logo','createdAt', 'updatedAt', 'manipulations'];
    loading : boolean = false;
    error : string = "";
    lengthList : number = 0;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(private fabricant:FabricantCRUDService,public dialog: MatDialog) {}

    ngOnInit() {
      this.loading = true;
      this.fabricant.listPage(1,5)
          .pipe(first()).subscribe(
            res => {
                console.log(res);
                this.fabricants = new MatTableDataSource(res.manufacturers);
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

    onDelete(id:number){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {id: id};
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.loading = true;
          this.fabricant.delete(id).subscribe(
              res => {
                console.log(res);
                this.loadFabricantsPage();
                this.loading = false;
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
    onUpdate(fabricant:any){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {fabricant: fabricant};
      const dialogRef = this.dialog.open(UpdateFabriquatDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result.status){
          this.loading = true;
          this.fabricant.update(fabricant.id,result.marque).subscribe(
              res => {
                console.log(res);
                this.loadFabricantsPage();
                this.loading = false;
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
}
