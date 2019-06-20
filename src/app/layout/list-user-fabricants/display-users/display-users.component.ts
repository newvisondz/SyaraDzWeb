import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { first,tap } from 'rxjs/operators';
import { FabricantAdmin} from '../../../model/fabricant-admin';
import { AdminsCrudService } from "../../../Services/Admins-CRUD/admins-crud.service";
import { UsersCrudService } from "../../../Services/Users-CRUD/users-crud.service";


@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})


export class DisplayUsersComponent implements OnInit {

  adminsfabricants : FabricantAdmin[] = [];

  id : string;
  title : string = "";

  loading : boolean = false;
  error : string = "";


  constructor(private router: Router,
              private route: ActivatedRoute,
              private admins: AdminsCrudService,
              private users: UsersCrudService) { }

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
    this.loading = true;
    this.admins.list(this.id)
        .pipe(first()).subscribe(
          res => {
              res.manufacturer.admins.forEach(admin => {
                console.log(admin);
                this.adminsfabricants.push(
                  new FabricantAdmin( admin.id,
                                      admin.email,
                                      admin.type,
                                      admin.manufacturer,
                                      admin.lastName,admin.firstName,
                                      admin.isAdmin,
                                      admin.phone,admin.address)
                )
              });
              // Effect the admins array
              this.loading = false;
          },
          err => {
              this.error = "Error occured : "+ err;
              console.log("Error occured : "+ err);
              this.loading = false;
          }
      );
  }

  loadUsers(){
    //load users from backend
    console.log("load users");
    this.loading = true;
    this.users.list(this.id)
        .pipe(first()).subscribe(
          res => {
              res.manufacturer.users.forEach(user => {
                console.log(user);
                this.adminsfabricants.push(
                  new FabricantAdmin( user.id,
                                      user.email,
                                      user.type,
                                      user.manufacturer,
                                      user.lastName,user.firstName,
                                      user.isAdmin,
                                      user.phone,user.address)
                )
              });
              // Effect the admins array
              this.loading = false;
          },
          err => {
              this.error = "Error occured : "+ err;
              console.log("Error occured : "+ err);
              this.loading = false;
          }
      );
  }
}
