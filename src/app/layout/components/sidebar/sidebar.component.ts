import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './../../../Services/Authentification/authentification.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isAdmin : boolean = false;
  isSuperAdmin : boolean = false;
  links = []
  type : String = "";
  fullName : String = "";
  manufacturer : String = "";
  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
    this.isAdmin = (localStorage.getItem('isAdmin') =="true");
    this.isSuperAdmin = (localStorage.getItem('isSuperAdmin') =="true");



    if(this.isSuperAdmin){
      //check if is the super admin and set the authorized links
      this.fullName = "SayaraDz";
      this.type = "Administrateur";
      this.links  = [
        {
          header : "Tableau de bords",
          icon : "fas fa-tachometer-alt",
          route : "overview",
        },
        {
          header : "Gestion des fabricants",
          icon : "fas fa-list-alt",
          route : "afficherFabricants"
        },
        {
          header : "Gestion des utilisateurs",
          icon : "fas fa-users",
          route : "afficherUsersFabricants"
        },
        {
          header : "Paramétres",
          icon : "fa fa-fw fa-wrench",
          route : "/"
        },
        {
          header : "Aide",
          icon : "fas fa-question",
          route : "/"
        },
      ];
      console.log("super admin")
    }else{
      //get the name of the current user
      this.auth.showMe()
      .pipe(first()).subscribe(
          res => {
            if (res == undefined) {
              console.log("Show Error feedback!");
            } else {
              this.fullName = res.firstName + " " + res.lastName;
            }
          },
          err => {
            console.log("Error occured : "+ err);
          }
        );
        this.manufacturer = localStorage.getItem('manufacturer');
        this.type = "Administrateur de "+ this.manufacturer;
      if(this.isAdmin){

        //check if is the admin and set the authorized links
        this.links  = [
          {
            header : "Tableau de bords",
            icon : "fas fa-tachometer-alt",
            route : "overview"
          },
          {
            header : "Profile",
            icon : "fas fa-user",
            route : "profile"
          },
          {
            header : "Gestion des modéles",
            icon : "fas fa-car",
            route : "modeles"
          },
          {
            header : "Gestion des utilisateurs",
            icon : "fas fa-users",
            route : "afficherUsersFabricants/users/" + localStorage.getItem('manufacturer')
          },
          {
            header : "Simulation tarif",
            icon : "fas fa-fw fa-desktop",
            route : "/"
          },
          {
            header : "Paramétres",
            icon : "fa fa-fw fa-wrench",
            route : "/"
          },
          {
            header : "Aide",
            icon : "fas fa-question",
            route : "/"
          },
        ];
        console.log("admin fabricant")
      }else{
        //set the authorized links for simple user
        this.type = "Utilisateur fabricant";
        this.links  = [
          {
            header : "Tableau de bords",
            icon : "fas fa-tachometer-alt",
            route : "overview"
          },
          {
            header : "Profile",
            icon : "fas fa-user",
            route : "profile"
          },
          {
            header : "Gestion des modéles",
            icon : "fas fa-car",
            route : "modeles"
          },
          {
            header : "Simulation tarif",
            icon : "fas fa-fw fa-desktop",
            route : "/"
          },
          {
            header : "Paramétres",
            icon : "fa fa-fw fa-wrench",
            route : "/"
          },
          {
            header : "Aide",
            icon : "fas fa-question",
            route : "/"
          },
        ];
        console.log("user fabricant")
      }
    }
  }
}
