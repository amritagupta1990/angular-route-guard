import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardChildService implements CanActivateChild{
    constructor(private router: Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token = localStorage.getItem('data-set');
        if(token){
            let userinfo = JSON.parse(atob(token));
            console.log('userinfo', userinfo);
            if(userinfo.userDetailsAccess === true) return true;
        }
        alert('You do not have permission to Access the URL');
        this.router.navigate(['/users']);
        return false;
    }
}