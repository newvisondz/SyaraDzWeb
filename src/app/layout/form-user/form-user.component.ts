import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { AdminsCrudService } from "../../Services/Admins-CRUD/admins-crud.service"
import { UsersCrudService } from "../../Services/Users-CRUD/users-crud.service"
import { AuthentificationService } from "../../Services/Authentification/authentification.service"
import { first } from 'rxjs/operators';
import { Fabricant} from '../../model/fabricant.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})

export class FormUserComponent implements OnInit {

  infoPage = {
    title : "Creer Utilisateur",
    icon : "fa-users",
  };

  userFormGroup: FormGroup;
  fabricants : any[] = [];
  loading : boolean = false;
  isSuperAdmin = (localStorage.getItem('isSuperAdmin') =="true");

  account_validation_messages = {
    'username' : [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your username must contain only letters' },
    ],
    'usersurname' : [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Username must be at least 5 characters long' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
        { type: 'pattern', message: 'Your username must contain only letters' },
    ],
    'fabricant' : [
        { type: 'required', message: 'Password is required' },
    ],
    'isAdmin': [
        { type: 'required', message: 'Password is required' },
    ],
    'phone' : [
        { type: 'required', message: 'Password is required' },
    ],
    'address' : [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Addres must be at least 5 characters long' },
        { type: 'maxlength', message: 'Addres cannot be more than 30 characters long' },
    ],
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

  constructor(private _formBuilder: FormBuilder,
              private fabricantService : FabricantCRUDService,
              private admins : AdminsCrudService,
              private router:Router,
              private auth: AuthentificationService,
              private users: UsersCrudService) { }

  ngOnInit() {
    this.loading = true;
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
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.compose([
    		Validators.maxLength(25),
    		Validators.minLength(5),
    		Validators.required
    	])],
      phone: ['', Validators.required],
      fabricant: [null, Validators.required],
    });

    if(this.isSuperAdmin){
      //check if is the super admin and set the authorized links
      this.fabricantService.list()
        .pipe(first()).subscribe(
          res => {
            this.fabricants = res.manufacturers;
            console.log(this.fabricants);
          },
          err => {
              console.log("Error occured : "+ err);

          }
      );
    } else {
      this.auth.showMe().pipe(first()).subscribe(
          res => {
            var obj = {
              brand : res.manufacturer,
              id: res.manufacturer
            }
            this.fabricants.push(obj);
            this.userFormGroup.get('fabricant').setValue(res.manufacturer);
          },
          err => {
              console.log("Error occured : "+ err);
          }
      );
    }

    this.loading = false;
  }

  onSubmit(){
    this.loading = true;
    console.log("Créer un utilisateur : ");    var service;
    if(this.isSuperAdmin){
      service = this.admins;
    } else {
      service = this.users;
    }

    service.create(this.userFormGroup.get('fabricant').value.id,
                      this.userFormGroup.get('email').value,
                      this.userFormGroup.get('password').value,
                      this.userFormGroup.get('username').value,
                      this.userFormGroup.get('usersurname').value,
                      this.userFormGroup.get('address').value,
                      this.userFormGroup.get('phone').value)
    .pipe(first()).subscribe(
      res => {
          if (res.type == undefined) {
              console.log("Show Error feedback!");
          } else {
              console.log(res);
              this.router.navigate(["dashboard/afficherUsersFabricants"]);
          }
          this.loading = false;
      },
      err => {
        console.log("Error occured : /n"+ err);
        this.loading = false;
      }
  );

  }

}
