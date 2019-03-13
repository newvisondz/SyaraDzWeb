import { Component, OnInit } from '@angular/core';

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
  modify : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  enableModify(){
    this.modify = !this.modify;
  }

}
