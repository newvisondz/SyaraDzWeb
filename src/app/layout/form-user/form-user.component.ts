import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
import { FabricantCRUDService } from "../../Services/Fabricant-CRUD/fabricant-crud.service";
import { AdminsCrudService } from "../../Services/Admins-CRUD/admins-crud.service"
import { first } from 'rxjs/operators';
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
  fabricants :any[];
  loading : boolean = false;
  constructor(private fabricant:FabricantCRUDService,
              private _formBuilder: FormBuilder,
              private admins : AdminsCrudService,
              private router:Router) { }

  ngOnInit() {
    this.userFormGroup = this._formBuilder.group({
      username: ['', ],
      usersurname: ['', ],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', ],
      phone: ['', ],
      fabricant: ['', Validators.required],
    });
    this.loading = true;
    this.fabricant.list()
      .pipe(first()).subscribe(
        res => {
          this.loading = false;
          this.fabricants = res.manufacturers;
          console.log(this.fabricants);
        },
        err => {
            console.log("Error occured : "+ err);
            this.loading = false;
        }
    );
  }

  onSubmit(){
    console.log("Créer un utilisateur : ");
    this.admins.create(this.userFormGroup.get('fabricant').value.id,
                      this.userFormGroup.get('email').value,
                      this.userFormGroup.get('password').value)
    .pipe(first()).subscribe(
      res => {
          if (res.type == undefined) {
              this.loading = false;
              console.log("Show Error feedback!");
          } else {
              console.log(res);
              this.router.navigate(["dashboard/afficherUsersFabricants"]);
          }
      },
      err => {
        console.log("Error occured : "+ err);
      }
  );
    
  }

}
