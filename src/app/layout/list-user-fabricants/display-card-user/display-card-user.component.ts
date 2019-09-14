import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { first,tap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { UpdateUserFabricantDialogComponent } from './../update-user-fabricant-dialog/update-user-fabricant-dialog.component';
import { AdminsCrudService } from "./../../../Services/Admins-CRUD/admins-crud.service"
import { UsersCrudService } from "./../../../Services/Users-CRUD/users-crud.service"
import {Router} from "@angular/router"
import { MessageSnackBarComponent } from './../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-card-user',
  templateUrl: './display-card-user.component.html',
  styleUrls: ['./display-card-user.component.scss']
})

export class DisplayCardUserComponent implements OnInit {
  durationInSeconds = 5;
  @Output() someEvent = new EventEmitter<number>();
  @Input() user:any;
  @Input() index = 0;

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,
              private admins : AdminsCrudService,
              private users : UsersCrudService,
              private router : Router) { }

  ngOnInit() {}

  onDelete(mf:string,id:number){
    const user = this.user;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    console.log('this is id = '+ id);


    dialogConfig.data = {
      title : "Confirmer la suppression",
      message : "Êtes vous sûre de supprimer cet utilisateur ?"
    };

    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){

        if(user.isAdmin){
          this.admins.delete(mf,id).subscribe(
            res => {
              console.log(res);
              this._snackBar.openFromComponent(MessageSnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                data : {message: 'Utilisateur supprimé', icon : "delete"}
              });
              this.callParent();
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        } else {
          this.users.delete(mf,id).subscribe(
            res => {
              console.log(res);
              this._snackBar.openFromComponent(MessageSnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                data : {message: 'Utilisateur supprimé', icon : "delete"}
              });
              this.callParent();
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        }
      }
    });

  }

  onUpdate(mf:string,id:number){
    const user = this.user;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {user: user};

    const dialogRef = this.dialog.open(UpdateUserFabricantDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){

        var body = {};
        var obj = result.user;

        for(var att in obj){
          if(obj[att] != ''){
            body[att] = obj[att]
          }else{
            body[att] = user[att]
          }
        }

        if(user.isAdmin){
          this.admins.update(mf,id,body).subscribe(
            res => {
              console.log(res);
              this._snackBar.openFromComponent(MessageSnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                data : {message: 'Utilisateur modifié', icon : "check_circle"}
              });
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        } else {
          this.users.update(mf,id,body).subscribe(
            res => {
              console.log(res);
              this._snackBar.openFromComponent(MessageSnackBarComponent, {
                duration: this.durationInSeconds * 1000,
                data : {message: 'Utilisateur modifié', icon : "check_circle"}
              });
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        }
      }
    });
  }

  callParent() {
    this.someEvent.next(this.index);
  }
}
