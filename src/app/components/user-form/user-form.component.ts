import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  bio: string = "";
  savedBio: string = "";
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  canExit(){
    if(this.bio !== '' && this.savedBio ===''){
      return false;
    }else{
      return true;
    }
  }
  save(){
    this.savedBio = this.bio;
    alert("Saved Successfully!");
    this.router.navigate(['/dashboard']);
  }

}
