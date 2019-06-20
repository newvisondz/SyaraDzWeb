import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.isAdmin = (localStorage.getItem('isAdmin') =="true");
    this.isSuperAdmin = (localStorage.getItem('isSuperAdmin') =="true");

    //get the name of the current user
    this.fullName = "Mounir Ilias";

    if(this.isSuperAdmin){
      //check if is the super admin and set the authorized links
      this.type = "Administrateur";
      this.links  = [
        {
          header : "Vue d'ensemble",
          icon : "fas fa-tachometer-alt",
          sublinks : [
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
          ]
        },
        {
          header : "Gestion des fabricants",
          icon : "fas fa-clipboard-list",
          sublinks : [
            {
              header : "Créer fabricant",
              icon : "fas fa-plus",
              route : "creerFabricant"
            },
            {
              header : "Afficher fabricants",
              icon : "fas fa-list-alt",
              route : "afficherFabricants"
            },
          ]
        },
        {
          header : "Gestion des utilisateurs",
          icon : "fas fa-users",
          sublinks : [
            {
              header : "Créer utilisateur",
              icon : "fas fa-plus",
              route : "creerUtilisateur"
            },
            {
              header : "Afficher utilisateur",
              icon : "fas fa-list-alt",
              route : "afficherUsersFabricants"
            },
          ],
        },
        {
          header : "Avancées",
          icon : "fas fa-folder-plus",
          sublinks : [
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
          ],
        },
        {
          header : "Données de références",
          icon : "fas fa-car",
          sublinks : [
            {
              header : "Gestion des modéles",
              icon : "fas fa-car",
              route : "modeles"
            },
            {
              header : "Gestion des véhicules",
              icon : "fas fa-car-side",
              route : "vehicules"
            },
          ],
        },
      ];
      console.log("super admin")
    }else{
      if(this.isAdmin){
        this.type = "Administrateur de fabricant";
        //check if is the admin and set the authorized links
        this.links  = [
          {
            header : "Vue d'ensemble",
            icon : "fas fa-tachometer-alt",
            sublinks : [
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
            ]
          },
          {
            header : "Données de références",
            icon : "fas fa-car",
            sublinks : [
              {
                header : "Gestion des modéles",
                icon : "fas fa-car",
                route : "modeles"
              },
              {
                header : "Gestion des véhicules",
                icon : "fas fa-car-side",
                route : "vehicules"
              },
            ],
          },
          {
            header : "Gestion des utilisateurs",
            icon : "fas fa-users",
            sublinks : [
              {
                header : "Créer utilisateur",
                icon : "fas fa-plus",
                route : "creerUtilisateur"
              },
              {
                header : "Afficher utilisateur",
                icon : "fas fa-list-alt",
                route : "afficherUsersFabricants"
              },
            ],
          },
          {
            header : "Avancées",
            icon : "fas fa-folder-plus",
            sublinks : [
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
            ],
          }
        ];
        console.log("admin fabricant")
      }else{
        //set the authorized links for simple user
        this.type = "Utilisateur fabricant";
        this.links  = [
          {
            header : "Vue d'ensemble",
            icon : "fas fa-tachometer-alt",
            sublinks : [
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
            ]
          },
          {
            header : "Données de références",
            icon : "fas fa-car",
            sublinks : [
              {
                header : "Gestion des modéles",
                icon : "fas fa-car",
                route : "modeles"
              },
              {
                header : "Gestion des véhicules",
                icon : "fas fa-car-side",
                route : "vehicules"
              },
            ],
          },
          {
            header : "Avancées",
            icon : "fas fa-folder-plus",
            sublinks : [
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
            ],
          }
        ];
        console.log("user fabricant")
      }
    }
  }

}
