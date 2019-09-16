import { Component, OnInit} from '@angular/core';
import { first,tap } from 'rxjs/operators';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import {MatTableDataSource} from '@angular/material';
import {MatSnackBar} from '@angular/material/snack-bar';

import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';

import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { CommandsService } from 'src/app/Services/Commands/commands.service';

@Component({
    selector: 'app-list-commandes',
    templateUrl: './list-commandes.component.html',
    styleUrls: ['./list-commandes.component.scss'],
})
export class ListCommandesComponent implements OnInit {
    titleView = "";
    manufacturerId = "";
    //for loading and displaying errors
    loading = false;
    error = "";
    //header of the table
    displayedColumns: string[] = ['index','vehicle','montant','Status', 'manipulations'];
    tabCommandes:MatTableDataSource<commande>;

    durationInSeconds = 5;


    constructor(public dialog: MatDialog,
                private _snackBar: MatSnackBar,
                private cmd : CommandsService) {
    }

    ngOnInit() {
      var tab = [];
      this.manufacturerId = localStorage.getItem('manufacturer');
      this.titleView = "Tout les commandes de "+ this.manufacturerId;
      
      this.cmd.list(this.manufacturerId)
      .pipe(first()).subscribe(
        res => {
            console.log(res.commands);

            res.commands.forEach(element => {
              tab.push({
                id : element.id,
                vehicle : element.vehicle,
                amount: element.amount,
                payed: element.accepted,
              })
            });

            this.tabCommandes = new MatTableDataSource(tab);
        },
        err => {
            console.log("Error occured : "+ err);
        }
      );
      
    }

    onAcceptCommand(id:string){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;

      dialogConfig.data = {
       title : "Confirmer l'acceptation de la commande",
       message : "Êtes vous sûre de confirmer cette commande ?"
      };
      const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.cmd.accept(this.manufacturerId,id,true)
          .pipe(first()).subscribe(
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
interface commande{
  id : any,
  amount:any,
  vehicle : any,
  accepted: any,
}
