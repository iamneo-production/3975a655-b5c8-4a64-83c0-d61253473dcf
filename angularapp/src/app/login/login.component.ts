import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserAuthService } from '../services/user-auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor( private userService: UserService,
    private router: Router,
    private userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
  loginUser() {
 
    this.userService.loginUserFromRemote(this.user).subscribe(
      (response) => {
        //console.log(response.jwtToken);
        //console.log(response.user.role);
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
       const role= response.user.role[0].roleName;
       //console.log(role);
       if(role==='User'){
         this.router.navigate(['/user-home']);
       }
       else{
        this.router.navigate(['/admin']);
       }
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Please enter valid emailID or Password';
      }
    );
  }
  public isLoggedIn(){
    //let a!:boolean;
    this.user.active=true;
    this.userAuthService.isLoggedIn();
    //  if(a===true){
    //   this.user.active=true;
     console.log(this.userAuthService.isLoggedIn());
  // }
  // public logout(){
  //   this.UserAuthService.active=false;
  //this.router.navigate(['/login'])
  //  return this.UserAuthService.clear();
      
  // }
    }

}
