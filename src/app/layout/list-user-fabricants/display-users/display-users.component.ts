import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { first,tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FabricantAdmin} from '../../../model/fabricant-admin';
@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  id : string;
  adminsfabricants : FabricantAdmin[] = [
    new FabricantAdmin("12d8azD885DZq8dzar",
    "fs_bouhenniche@esi.dz",
    "USER FABRICANT",
    "kia",
    "Bouhenniche","Sihem",
    false,
    "0551234567","hai elbadre,kouba, alger"),
    new FabricantAdmin("12d8azD885DZq8dzar",
    "fs_bouhenniche@esi.dz",
    "USER FABRICANT",
    "kia",
    "Bouhenniche","Sihem",
    false,
    "0551234567","hai elbadre,kouba, alger"),
    new FabricantAdmin("12d8azD885DZq8dzar",
    "fs_bouhenniche@esi.dz",
    "USER FABRICANT",
    "kia",
    "Bouhenniche","Sihem",
    false,
    "0551234567","hai elbadre,kouba, alger")
  ];
  loading : boolean = false;
  error : string = "";
  title : string = "";
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    //the id of the manufacturer
    this.id = this.route.snapshot.params['id'];
    //the type of users (admin or simple user)
    this.title = this.route.snapshot.data['title'];

    if(this.title === "Administrateurs"){
      this.loadAdmins();
    }else{
      this.loadUsers();
    }
  }
  loadAdmins(){
    //load admins from backend
    console.log("load admins");
  }
  loadUsers(){
    //load users from backend
    console.log("load users");
  }
}
