import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './authentication/auth.guard';
import { IssueComponent } from './issue/issue.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
  {path:'user-home',component:UserHomeComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:IssueComponent},

  {path:'admin',component:AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']} },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
