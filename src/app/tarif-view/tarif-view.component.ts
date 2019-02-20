import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarif-view',
  templateUrl: './tarif-view.component.html',
  styleUrls: ['./tarif-view.component.scss']
})
export class TarifViewComponent implements OnInit {
  @Input() tarifArray = [
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
  constructor() { }

  ngOnInit() {
  }

}
