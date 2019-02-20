import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title : string = "Sayara";
  links  = [
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
  constructor() { }

  ngOnInit() {
  }

}
