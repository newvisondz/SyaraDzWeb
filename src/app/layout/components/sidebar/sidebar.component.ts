import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links = [
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
          route : "/"
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
          header : "Afficher fabricant",
          icon : "fas fa-list-alt",
          route : "afficherFabricants"
        },
      ]
    },
    {
      header : "Gestion des modéles",
      icon : "fas fa-car",
      sublinks : [
        {
          header : "Créer modéle",
          icon : "fas fa-plus",
          route : "/"
        },
        {
          header : "Afficher modéle",
          icon : "fas fa-list-alt",
          route : "/"
        },
      ]
    },
    {
      header : "Gestion des versions",
      icon : "fas fa-code-branch",
      sublinks : [
        {
          header : "Créer version",
          icon : "fas fa-plus",
          route : "/"
        },
        {
          header : "Afficher version",
          icon : "fas fa-list-alt",
          route : "/"
        },
      ]
    },
    {
      header : "Gestion des véhicules",
      icon : "fas fa-car-side",
      sublinks : [
        {
          header : "Créer véhicule",
          icon : "fas fa-plus",
          route : "/"
        },
        {
          header : "Afficher véhicule",
          icon : "fas fa-list-alt",
          route : "/"
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
          route : "/"
        },
        {
          header : "Afficher utilisateur",
          icon : "fas fa-list-alt",
          route : "/"
        },
      ]
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
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
