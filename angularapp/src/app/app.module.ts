import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './authentication/auth.interceptor';
import { AuthGuard } from './authentication/auth.guard';
import { IssueComponent } from './issue/issue.component';



@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    SignupComponent,
    LoginComponent,
    AdminComponent,
    IssueComponent,
  
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
