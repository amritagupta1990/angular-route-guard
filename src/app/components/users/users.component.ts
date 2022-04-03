import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private sub: any;
  userList: Users[] = [];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.appService.getUserList().subscribe((data) => {
      this.userList = data;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  goToDetail(id: number){
    this.router.navigate(['/user-detail', id]);
  }

}
