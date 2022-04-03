import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { Users } from "../models/users.model";
@Injectable()
export class AppService{
    userList: Users[];
    constructor(private http: HttpClient, private router: Router) {}
    userLogin(email:string, password:string){
        this.getUserList().subscribe((userList: Users[]) => {
            let filteredList = userList.filter((el) => {
               return (el.email === email && el.password === password);
            });
            if(filteredList.length > 0){
                let userinfo = filteredList[0];
                localStorage.setItem('data-set', btoa(JSON.stringify(userinfo)));
                this.router.navigate(['/dashboard']);
            }else{
                alert('Invalid Login');
            }
        });
    }
    getUserList(){
        return this.http.get<Users[]>('./assets/data/users.json').pipe(map(data=>data));
    }
}