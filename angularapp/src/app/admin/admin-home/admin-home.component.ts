import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddIssue } from 'src/app/model/add-issue';
import { User } from 'src/app/model/user';
import { RegisterIssueService } from 'src/app/services/register-issue.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  issueList!: AddIssue[];
  user = new User();
  developer!: User[];
  constructor(
    private service: RegisterIssueService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.fetchIssueList().subscribe(
      (data) => {
        this.issueList = data;
        console.log('Response recieved');
        console.log(data);
      },
      (error) => console.log('Exception occured')
    );
  }

  handleEdit(n: number) {
    let box = document.getElementsByClassName('edit-box');

    box[n].classList.toggle('hidden');
  }

  handleClick() {
    console.log('clicked');
  }

  handleChange(val: any){
    // let value = document.getElementById("selectDeveloper").EventTarget.value;
    console.log(val.target.value)
  }

  public logout() {
    this.user.active = false;
    this.router.navigate(['/login']);
    return this.userAuthService.clear();
  }
}
