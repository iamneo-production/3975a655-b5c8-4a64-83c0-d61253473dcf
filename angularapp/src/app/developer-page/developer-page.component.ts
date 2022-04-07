import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddIssue } from '../model/add-issue';
import { User } from '../model/user';
import { RegisterIssueService } from '../services/register-issue.service';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-developer-page',
  templateUrl: './developer-page.component.html',
  styleUrls: ['./developer-page.component.css'],
})
export class DeveloperPageComponent implements OnInit {
  issueList!:AddIssue[];
  user = new User();
 constructor(private service:RegisterIssueService,private userAuthService:UserAuthService, private router: Router) { }
 ngOnInit(): void {
  this.service.fetchIssueList().subscribe(
    data=>{
      this.issueList = data;
      console.log("Response recieved")
      console.log(data)
    },
    error=>console.log("Exception occured")
  )
}

  handleEdit() {
    let box = document.getElementById('edit-container');

    box?.classList.toggle('hidden');
  }
  public logout(){
    this.user.active=false;
    this.router.navigate(['/login'])
   return this.userAuthService.clear();
      
  }
}
