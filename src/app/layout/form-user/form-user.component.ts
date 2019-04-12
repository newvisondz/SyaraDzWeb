import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { first } from 'rxjs/operators';
import { Fabricant} from '../../model/fabricant.model';
import { Observable } from 'rxjs';

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
  fabricant : Fabricant;
  loading : boolean = false;

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

  constructor(private fabricantService:FabricantCRUDService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
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
      fabricant: [{value: '', disabled: true}, Validators.required],
    });

    // get the barndid from the local stroage
    this.fabricant = new Fabricant("Kia",new Date(),"1ezf8zf8ze7g74sDFZE88fz","/images/logo.png",new Date());
  }

  onSubmit(){
    console.log("Créer un utilisateur Simple : ");
  }

}
