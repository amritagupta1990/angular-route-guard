import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails: Users;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('data-set');
    if(token){
       let userinfo = JSON.parse(atob(token));
       this.appService.getUserList().subscribe((userList: Users[]) => {
        let filteredList = userList.filter((el) => {
          return (el.email === userinfo.email);
       });
       this.userDetails = filteredList[0];
       });
    }
  }

}
