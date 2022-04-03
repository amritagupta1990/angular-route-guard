import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserFormComponent } from "../components/user-form/user-form.component";

@Injectable()
export class AuthDeactivateService implements CanDeactivate<UserFormComponent>{
    constructor(){}
    canDeactivate(component: UserFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
        if(!component.canExit()){
            if (confirm("You have unsaved changes. Are you sure to exit?")) {
                return true
            } else {
                return false
            }
        }   
        else
        return true;
    }
}