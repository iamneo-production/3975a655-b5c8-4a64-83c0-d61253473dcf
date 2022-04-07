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
  name='';
  constructor( private userService: UserService,
    private router: Router,
    private userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }
  loginUser() {
 
    this.userService.loginUserFromRemote(this.user).subscribe(
      (response) => {
           console.log(this.user)
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        this.userAuthService.setUser(response.user.username);
      const role= response.user.role[0].roleName;
       const name=response.user.username;
      // console.log(name);
       if(role==='User'){
         this.router.navigate(['/user-home']);
       }
       else if(role==='Admin') {
        this.router.navigate(['/admin']);
       }
       else{
        this.router.navigate(['/developer-page']);
       }
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Please enter valid emailID or Password';
      }
    );
  }
  public isLoggedIn(){
    
    this.user.active=true;
    this.userAuthService.isLoggedIn();
  
     console.log(this.userAuthService.isLoggedIn());
  
      
 
    }

}
