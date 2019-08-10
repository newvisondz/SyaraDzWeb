import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig} from '@angular/material';
import { first } from 'rxjs/operators';
import { PasswordValidator } from '../../validators/password.validator';
import { FabricantAdmin } from '../../model/fabricant-admin';
import { AuthentificationService } from './../../Services/Authentification/authentification.service';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoPage = {
    title : "Profile",
    icon : "fa-user",
  };

  error : string = "";

  user :FabricantAdmin = new FabricantAdmin("12d8azD885DZq8dzar",
  "fs_bouhenniche@esi.dz",
  "USER FABRICANT",
  "kia",
  "Bouhenniche","Sihem",
  false,
  "0551234567","hai elbadre,kouba, alger");
  loading : boolean = false;


  userFormGroup: FormGroup;
  matching_passwords : FormGroup;

  account_validation_messages = {
    'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
      ],
      'confirm_password': [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'areEqual', message: 'Password mismatch' }
      ],
      'password': [
        { type: 'required', message: 'Password is required' },
      ]
    };
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private auth:AuthentificationService) { }

  ngOnInit() {
    //get user infos
    this.loading = true;
    this.auth.showMe()
    .pipe(first()).subscribe(
        res => {
          if (res == undefined) {
            console.log("Show Error feedback!");
          } else {
            this.user = res;
          }
          this.loading = false;
        },
        err => {
          this.loading = false;
          this.error = err;
          console.log("Error occured : "+ err);
        }
      );
    //init form
    this.userFormGroup = this._formBuilder.group({
      username: ['', Validators.compose([
    		Validators.maxLength(25),
    		Validators.minLength(5),
    		Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$'),
    		Validators.required
    	])],
      usersurname: ['', Validators.compose([
    		Validators.maxLength(25),
    		Validators.minLength(5),
    		Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z]+$'),
    		Validators.required
    	])],
      email: ['', Validators.compose([
           Validators.required,
           Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      address: ['', Validators.compose([
    		Validators.maxLength(25),
    		Validators.minLength(5),
    		Validators.required
    	])],
      phone: ['', Validators.required],
      fabricant: ['', Validators.required],
    });

    this.matching_passwords = this._formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
   {
      // check whether our password and confirm password match
      validator: PasswordValidator.validate.bind(this)
   });
  }
  onSubmit(){
    const email = this.userFormGroup.controls['email'].value;
    const password = this.matching_passwords.controls['password'].value;
    //...... update inofrmations

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("confirmation : true; update")
      }
    });
  }

}
