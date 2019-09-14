import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { first,tap } from 'rxjs/operators';
import { FabricantAdmin} from '../../../model/fabricant-admin';
import { AdminsCrudService } from "../../../Services/Admins-CRUD/admins-crud.service";
import { UsersCrudService } from "../../../Services/Users-CRUD/users-crud.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import { CreateUserFabricantDialogComponent } from './../create-user-fabricant-dialog/create-user-fabricant-dialog.component';
import { MessageSnackBarComponent } from './../../../shared/message-snack-bar/message-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})


export class DisplayUsersComponent implements OnInit {
  durationInSeconds = 5;
  adminsfabricants : FabricantAdmin[] = [];

  id : string;
  title : string = "";

  loading : boolean = false;
  error : string = "";


  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private admins: AdminsCrudService,
              private users: UsersCrudService) { }

  ngOnInit() {
    //the id of the manufacturer
    this.id = this.route.snapshot.params['id'];
    //the type of users (admin or simple user)
    this.title = this.route.snapshot.data['title'];

    if(this.title === "Administrateurs"){
      this.loadAdmins();
    }else{
      this.loadUsers();
    }
  }

  loadAdmins(){
    //load admins from backend
    console.log("load admins");
    this.loading = true;
    this.admins.list(this.id)
        .pipe(first()).subscribe(
          res => {
              res.manufacturer.admins.forEach(admin => {
                console.log(admin);
                this.adminsfabricants.push(
                  new FabricantAdmin( admin.id,
                                      admin.email,
                                      admin.type,
                                      admin.manufacturer,
                                      admin.lastName,admin.firstName,
                                      admin.isAdmin,
                                      admin.phone,admin.address)
                )
              });
              // Effect the admins array
              this.loading = false;
          },
          err => {
              this.error = "Error occured : "+ err;
              console.log("Error occured : "+ err);
              this.loading = false;
          }
      );
  }

  loadUsers(){
    //load users from backend
    console.log("load users");
    this.loading = true;
    this.users.list(this.id)
        .pipe(first()).subscribe(
          res => {
              res.manufacturer.users.forEach(user => {
                console.log(user);
                this.adminsfabricants.push(
                  new FabricantAdmin( user.id,
                                      user.email,
                                      user.type,
                                      user.manufacturer,
                                      user.lastName,user.firstName,
                                      user.isAdmin,
                                      user.phone,user.address)
                )
              });
              // Effect the admins array
              this.loading = false;
          },
          err => {
              this.error = "Error occured : "+ err;
              console.log("Error occured : "+ err);
              this.loading = false;
          }
      );
  }

  deleteUser(i : number){
    this.adminsfabricants.splice(i,1);
    console.log("hanii"+ i);
  }

  onCreateUser(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title : "Créer un nouvel Utilisateur"
    };
    const dialogRef = this.dialog.open(CreateUserFabricantDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result.status){

        if(this.title === "Administrateurs"){
          this.admins.create(this.id,result.user.email,result.user.password,result.user.firstName,result.user.lastName,result.user.address,result.user.phone).subscribe(
            res => {
              console.log(res);
              this.adminsfabricants.push(new FabricantAdmin( "0",
                                  result.user.email,
                                  "Admin Fabricant",
                                  this.id,
                                  result.user.lastName,result.user.firstName,
                                  true,
                                  result.user.phone,result.user.address));
            this._snackBar.openFromComponent(MessageSnackBarComponent, {
              duration: this.durationInSeconds * 1000,
              data : {message: 'Utilisateur ajouté', icon : "check_circle"}
            });
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        } else {
          this.users.create(this.id,result.user.email,result.user.password,result.user.firstName,result.user.lastName,result.user.address,result.user.phone).subscribe(
            res => {
              console.log(res);
              this.adminsfabricants.push(new FabricantAdmin( "0",
                                  result.user.email,
                                  "User Fabricant",
                                  this.id,
                                  result.user.lastName,result.user.firstName,
                                  true,
                                  result.user.phone,result.user.address));
            },
            err => {
              console.log("Error occured : "+ err);
            }
          );
        }
      }
    });
  }
}
