import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'

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
  user = {
    name : "Sihem",
    surname : "Bouhenniche",
    post : "Admin",
    email : "sayaradz@esi.dz",
    password : "root",
    address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
    phone : "0551 78 91 42"
  };
  loading : boolean = false;
  modify : boolean = true;
  userFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      usersurname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
    Object.keys(this.userFormGroup.controls).forEach(key => {
      this.userFormGroup.get(key).disable();
    });
  }
  onSubmit(){

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
