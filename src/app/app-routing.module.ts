import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService]
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