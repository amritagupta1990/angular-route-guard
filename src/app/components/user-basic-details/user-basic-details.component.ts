import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-basic-details',
  templateUrl: './user-basic-details.component.html',
  styleUrls: ['./user-basic-details.component.css']
})
export class UserBasicDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  userDetails: Users;
  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    const id= this.route.parent?.snapshot.params['id'];
    this.sub = this.appService.getUserList().subscribe((userList: Users[]) => {
      let filteredList = userList.filter((el) => {
        return (el.id === +id);
     });
     this.userDetails = filteredList[0];
     });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
