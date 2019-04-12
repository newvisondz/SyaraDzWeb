import { Component, OnInit, ViewChild,Optional,Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { PasswordValidator } from '../../../validators/password.validator';
@Component({
  selector: 'app-update-fabriquat-dialog',
  templateUrl: './update-user-fabricant-dialog.component.html',
  styleUrls: ['./update-user-fabricant-dialog.component.scss']
})
export class UpdateUserFabricantDialogComponent implements OnInit {
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
    user : any = null;
  constructor(private _formBuilder: FormBuilder,
              @Optional() public dialogRef: MatDialogRef<UpdateUserFabricantDialogComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

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
    console.log(this.data.user);
    this.user = this.data.user;
  }


  onConfirm(){
    const user = {
      email: this.userFormGroup.controls['email'].value,
      password : this.matching_passwords.controls['password'].value,
      firstName : this.userFormGroup.controls['username'].value,
      lastName : this.userFormGroup.controls['usersurname'].value,
      address : this.userFormGroup.controls['address'].value,
      phone : this.userFormGroup.controls['phone'].value
    }
    const data = {
      status : true,
      user : user
    }
    this.dialogRef.close(data);
  }
}
