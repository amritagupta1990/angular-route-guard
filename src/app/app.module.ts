import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { UserBasicDetailsComponent } from './components/user-basic-details/user-basic-details.component';
import { AuthGuardChildService } from './services/auth-guard-child.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailsComponent,
    UserRolesComponent,
    UserBasicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService, AuthGuardService, AuthService, AuthGuardChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
