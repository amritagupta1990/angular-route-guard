import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(): boolean {
        if(this.authService.userAuthorized()){
            return true;
        }else{
            this.router.navigate(['/']);
        }
        return false;
    }
}