import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { UserBasicDetailsComponent } from "./components/user-basic-details/user-basic-details.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { UserRolesComponent } from "./components/user-roles/user-roles.component";
import { UsersComponent } from "./components/users/users.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthGuardChildService } from './services/auth-guard-child.service';
import { UserFormComponent } from "./components/user-form/user-form.component";
import { AuthDeactivateService } from './services/auth-deactivate.service';
const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService]
    },
    {
        path: "users", component: UsersComponent, canActivate: [AuthGuardService]
    },
    {
        path: "user-bio-form", component: UserFormComponent, canActivate: [AuthGuardService], canDeactivate: [AuthDeactivateService]
    }, 
    {
        path: "user-detail/:id", component: UserDetailsComponent, canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardChildService],
        children: [
            { path: 'basic', component: UserBasicDetailsComponent},
            { path: 'roles', component: UserRolesComponent }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })

  export class AppRoutingModule {}