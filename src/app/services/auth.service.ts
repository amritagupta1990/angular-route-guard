import { JsonpClientBackend } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppService } from "./app.service";

@Injectable()
export class AuthService {
 constructor(private appService: AppService){}
 userAuthorized(){
     let token = localStorage.getItem('data-set');
     if(token){
        let userinfo = JSON.parse(atob(token));
        console.log(userinfo.email);
        return true;
     }
     return false;
 }
}