import { Component, OnInit,Input } from '@angular/core';
import { first,tap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { UpdateUserFabricantDialogComponent } from './../update-user-fabricant-dialog/update-user-fabricant-dialog.component';
import { FabricantAdmin} from '../../../model/fabricant-admin';

@Component({
  selector: 'app-display-card-user',
  templateUrl: './display-card-user.component.html',
  styleUrls: ['./display-card-user.component.scss']
})

export class DisplayCardUserComponent implements OnInit {

  @Input() user:any;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  onDelete(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id: id};

    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("delete");
      }
    });
  }

  onUpdate(id:number){
    const user : FabricantAdmin =   new FabricantAdmin("12d8azD885DZq8dzar",
      "fs_bouhenniche@esi.dz",
      "USER FABRICANT",
      "kia",
      "Bouhenniche","Sihem",
      false,
      "0551234567","hai elbadre,kouba, alger");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {user: user};

    const dialogRef = this.dialog.open(UpdateUserFabricantDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        console.log("update : "+result.user.firstName)
      }
    });
  }
}
