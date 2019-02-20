import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {
  title : String = "SayaraDz";
  citation : String = "La vie est déjà assez dure. Rendons les choses un peu plus faciles.";
  statics = [
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
  constructor() { }

  ngOnInit() {
  }

}
