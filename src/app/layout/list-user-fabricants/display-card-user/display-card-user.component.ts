import { Component, OnInit,Input } from '@angular/core';
import { first,tap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {DeleteConfirmDialogComponent} from './../../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AdminsCrudService } from "./../../../Services/Admins-CRUD/admins-crud.service"

@Component({
  selector: 'app-display-card-user',
  templateUrl: './display-card-user.component.html',
  styleUrls: ['./display-card-user.component.scss']
})

export class DisplayCardUserComponent implements OnInit {

  @Input() user:any;


  constructor(public dialog: MatDialog,
              private admins : AdminsCrudService) { }

  ngOnInit() {}

  onDelete(id:number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {id: id};

    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        
        this.admins.delete('toyota',id).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured : "+ err);
          }
        );
      }
    });
  }
}
