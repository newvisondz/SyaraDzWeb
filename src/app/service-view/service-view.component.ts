import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.scss']
})
export class ServiceViewComponent implements OnInit {
  servicesArray = [
    {
      name : "Gestion des versions",
      details : "L'utilisateur fabricant peut ajouter/ modifier/ supprimer/ lister les versions des véhicules",
      icon : "fas fa-chart-line fa-5x"
    },
    {
      name : "Gestion des modéles",
      details : "L'utilisateur fabricant peut ajouter/ modifier/ supprimer/ lister les modéles des véhicules",
      icon : "fas fa-tachometer-alt fa-5x"
    },
    {
      name : "Gestion des couleurs",
      details : "L'utilisateur fabricant peut ajouter/ modifier/ supprimer/ lister les couleurs des véhicules",
      icon : "fas fa-palette fa-5x"
    },
    {
      name : "Gestion des options",
      details : "L'utilisateur fabricant peut ajouter/ modifier/ supprimer/ lister les options des véhicules",
      icon : "fas fa-columns fa-5x"
    },
    {
      name : "Gestion des utilisateurs",
      details : "L'utilisateur fabricant peut ajouter/ modifier/ supprimer/ lister les utilisateurs fabricant",
      icon : "fas fa-users-cog fa-5x"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
