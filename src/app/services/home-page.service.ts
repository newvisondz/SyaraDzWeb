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
        number : "1000"
      },
      {
        content : "Voitures vendus",
        number : "250"
      },
      {
        content : "Partenaires",
        number : "43"
      },
    ]
  }

  //mission home attributes :
  missionSubject = new Subject<object>();
  private mission = {
    title : "Notre Mission",
    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author : "Bouhenniche Sihem",
    role : "Scrum Master"
  }

  //tarifs home attributes :
  tarifSubject = new Subject<any[]>();
  private tarifArray = [
    {
      type : "BASIC",
      description : "Consectetur adipisicing elit, sed do eiusmodtempor onsectetur adipisicing elit, sed do eiusmodtempor.",
      features : [
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : false
        },
        {
          description : "Cras justo odio",
          available : false
        },
        {
          description : "Cras justo odio",
          available : false
        },
      ],
      price : 10000
    },
    {
      type : "MEDUIM",
      description : "Consectetur adipisicing elit, sed do eiusmodtempor onsectetur adipisicing elit, sed do eiusmodtempor.",
      features : [
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : false
        },
        {
          description : "Cras justo odio",
          available : false
        },
      ],
      price : 20000
    },
    {
      type : "AVANCEE",
      description : "Consectetur adipisicing elit, sed do eiusmodtempor onsectetur adipisicing elit, sed do eiusmodtempor.",
      features : [
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
          available : true
        },
        {
          description : "Cras justo odio",
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
