import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { UserHomeComponent } from './user-home/user-home.component';


import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { IssueComponent } from './issue/issue.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserHomeComponent,
    LoginComponent,
    IssueComponent,
    SignupComponent,
    AdminHomeComponent,
    DeveloperPageComponent,
    ManageUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  providers: [ AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
