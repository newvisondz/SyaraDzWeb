import { Component, OnInit } from '@angular/core';

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
  user = {
    name : "Sihem",
    surname : "Bouhenniche",
    post : "Admin",
    email : "sayaradz@esi.dz",
    password : "root",
    address : "CEM El Badre batiment A N 21 Hai El Badre Kouba -Alger",
    phone : "0551 78 91 42"
  };
  modify : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  enableModify(){
    this.modify = !this.modify;
  }

}
