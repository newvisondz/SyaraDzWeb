import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthentificationService } from '../../Services/Authentification/authentification.service';
import { first } from 'rxjs/operators';
import { PasswordValidator } from '../../validators/password.validator';
class Profile{
  email : string;
  id : string;
  type : string;
  constructor(email : string, id : string, type : string)
  {
    this.email = email;
    this.id = id;
    this.type = type;
  }
}


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

  user : Profile = new Profile("","","");
  loading : boolean = false;

  modify : boolean = true;
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
  constructor(private _formBuilder: FormBuilder, private auth:AuthentificationService) { }

  ngOnInit() {
    this.loading = true;
    this.auth.showMe().pipe(first()).subscribe(
        res => {
            this.user = res;
            this.loading = false;
        },
        err => {

          this.error = err;
          console.log("Error occured : "+ err);
          this.loading = false;
        }
    );
    this.userFormGroup = this._formBuilder.group({
        username: [''],
        usersurname: ['',],
        email: ['', Validators.compose([
    	       Validators.required,
    	       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  	    ])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        address: [''],
        phone: [''],
      });
      this.matching_passwords = this._formBuilder.group({
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required],
        },{
          validator: PasswordValidator.validate.bind(this)
      });
    Object.keys(this.userFormGroup.controls).forEach(key => {
      this.userFormGroup.get(key).disable();
    });
  }
  onSubmit(){
    console.log(this.userFormGroup.controls['email'].value + this.userFormGroup.controls['password'].value);
  }
  enableModify(){
    this.modify = !this.modify;
    if(this.modify){
      Object.keys(this.userFormGroup.controls).forEach(key => {
        this.userFormGroup.get(key).disable();
      });
    }else{
      Object.keys(this.userFormGroup.controls).forEach(key => {
        this.userFormGroup.get(key).enable();
      });
    }
  }

}
