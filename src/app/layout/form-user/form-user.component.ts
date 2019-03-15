import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { first } from 'rxjs/operators';
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
  fabricants :any [];
  loading : boolean = false;
  constructor(private fabricant:FabricantCRUDService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      usersurname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      fabricant: ['', Validators.required],
    });
    this.loading = true;
    this.fabricant.list()
      .pipe(first()).subscribe(
        res => {
          this.loading = false;
          this.fabricants = res.fabricants;
        },
        err => {
            console.log("Error occured : "+ err);
            this.loading = false;
        }
    );
  }

  onSubmit(){
    console.log("Créer un utilisateur : ");
    console.log(this.userFormGroup.controls);
  }

}
