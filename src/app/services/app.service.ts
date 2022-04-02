import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
interface User{
 name: string;
 email: string;
 password: string;
};
@Injectable()
export class AppService{
    userList: User[];
    constructor(private http: HttpClient, private router: Router) {}
    userLogin(email:string, password:string){
        this.getUserList().subscribe((userList: User[]) => {
            let filteredList = userList.filter((el) => {
               return (el.email === email && el.password === password);
            });
            if(filteredList.length > 0){
                let userinfo = {
                    email,
                    password
                };
                localStorage.setItem('data-set', btoa(JSON.stringify(userinfo)));
                this.router.navigate(['/dashboard']);
            }else{
                alert('Invalid Login');
            }
        });
    }
    getUserList(){
        return this.http.get<User[]>('./assets/data/users.json').pipe(map(data=>data));
    }
}