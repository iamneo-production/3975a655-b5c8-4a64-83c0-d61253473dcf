import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { IssueComponent } from './issue/issue.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'manage-user',component:ManageUserComponent},
  {path:'admin-home',component:AdminHomeComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'developer-page',component:DeveloperPageComponent,canActivate:[AuthGuard], data:{roles:['Developer']}},
  {path:'user-home',component:UserHomeComponent,canActivate:[AuthGuard], data:{roles:['User']} },
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'issue',component:IssueComponent,canActivate:[AuthGuard], data:{roles:['User']}}
  // ,canActivate:[AuthGuard], data:{roles:['User']}
  // ,canActivate:[AuthGuard], data:{roles:['Admin']} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
