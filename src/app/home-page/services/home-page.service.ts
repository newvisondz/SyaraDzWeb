import { Subject } from 'rxjs';

export class HomePageService {
  //home page attributes :
  linksSubject = new Subject<any[]>();
  title : string = "Sayara";
  private links  = [
    {
      title : "Accueil",
      element : "#ac",
    },
    {
      title : "Notre Mission",
      element : "#ms",
    },
    {
      title : "Tarifs",
      element : "#tr",
    },
    {
      title : "Nos Services",
      element : "#sr",
    },
  ]

  //header home attributes :
  headerSubject = new Subject<object>();
  private header  = {
    title : "SayaraDz",
    citation : "La vie est déjà assez dure. Rendons les choses un peu plus faciles.",
    statics : [
      {
        content : "Voitures exposées",
        number : "+1000"
      },
      {
        content : "Marques",
        number : "+250"
      },
      {
        content : "Modéles et versions",
        number : "+500"
      },
    ]
  }

  //mission home attributes :
  missionSubject = new Subject<object>();
  private mission = {
    title : "Notre Mission",
    content : "Rendez-vous sur notre application mobile et découvrez environ 250 entreprises et plus de 50 000 vendeurs de voitures d'occasion dans toute l’Algérie. Sur SayaraDz, vous aurez accès à le meilleur service de gestion des ventes et aprés ventes en Algérie, ainsi notre site vous offre une gestion des modéles de références plus efficaces et vous donne la main por bien gérer les commandes de vos client, tout ça avec un outil facile à utiliser et trés fluid. Notre mission est vous rendre la vie plus facile",
    author : "Bouflane Flan",
    role : "PDG-SayaraDz"
  }

  //tarifs home attributes :
  tarifSubject = new Subject<any[]>();
  private tarifArray = [
    {
      type : "BASIC",
      description : "Idéal pour commencer votre expérience avec SayaraDz, vous aurez accées à presque tous les services",
      features : [
        {
          description : "un admnistrateur et 5 simple utilisateurs",
          available : true
        },
        {
          description : "200 voitures exposées",
          available : true
        },
        {
          description : "Notifiaction sur e-mails",
          available : false
        },
        {
          description : "Strockage illimité",
          available : false
        },
        {
          description : "Historique des manipulations",
          available : false
        },
      ],
      price : 10000
    },
    {
      type : "MEDUIM",
      description : "Idéal pour gérer vos modéles de références en toute fluidité.",
      features : [
        {
          description : "un admnistrateur et 10 simple utilisateurs",
          available : true
        },
        {
          description : "400 voitures exposées et modéles de références illimités",
          available : true
        },
        {
          description : "Notifiaction sur e-mails",
          available : true
        },
        {
          description : "Strockage illimité",
          available : false
        },
        {
          description : "Historique des manipulations",
          available : false
        },
      ],
      price : 20000
    },
    {
      type : "AVANCEE",
      description : "Idéal pour domminer le marché en ligne algérien des véhicules, ainsi vous aurez accées à tous les services",
      features : [
        {
          description : "un admnistrateur et 15 simple utilisateurs",
          available : true
        },
        {
          description : "Strockage illimité",
          available : true
        },
        {
          description : "Notifiaction e-mails",
          available : true
        },
        {
          description : "Historique des manipulations",
          available : true
        },
        {
          description : "Automatisation",
          available : true
        },
      ],
      price : 30000
    }
  ]

  //services home attributes :
  serviceSubject = new Subject<any[]>();
  private servicesArray = [
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
  emitLinkSubject() {
    this.linksSubject.next(this.links.slice());
  }

  emitHeaderSubject() {
    this.headerSubject.next(this.header);
  }

  emitMissionSubject() {
    this.missionSubject.next(this.mission);
  }

  emitTarifSubject() {
    this.tarifSubject.next(this.tarifArray.slice());
  }

  emitServiceSubject() {
    this.serviceSubject.next(this.servicesArray.slice());
  }
}
