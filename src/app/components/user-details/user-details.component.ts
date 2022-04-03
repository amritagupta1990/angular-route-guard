import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userDetails: Users;
  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }

}
