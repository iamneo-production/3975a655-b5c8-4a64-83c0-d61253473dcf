import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
})
export class ManageUserComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(
    private services: UserService,
    private router: Router,
    private userAuthService: UserAuthService
  ) {}
  developer!: User[];
  ngOnInit(): void {
    this.services.fetchByRole('Developer').subscribe(
      (data) => {
        this.developer = data;
        console.log('Response recieved');
        console.log(data);
      },
      (error) => console.log('Exception occured')
    );
  }

  handleAdd() {
    // let btn = document.getElementById("addButton")
    let box = document.getElementById('right-content');
    // let update = document.getElementById('updateButton');

    box?.classList.toggle('hidden');
  }

  handleEdit() {
    let box = document.getElementById('right-content');

    // let addb = document.getElementById('addButton');

    box?.classList.toggle('hidden');

    // if (!addb?.classList.contains('hidden')) {
    //   addb!.classList.add('hidden');
    // } else {
    //   addb.classList.remove('hidden');
    // }
    // addb?.classList.toggle('hidden');
    // console.log("working");
  }

  registerUser() {
    console.log(this.user);
    this.services.registerDeveloperUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received ');
        location.reload();
        this.router.navigate(['/manage-user']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = '*Email already exists';
      }
    );
    // let user = (<HTMLInputElement>document.getElementById("enterUsername")).value ;
    //console.log(this.user.username);
  }
  public isLoggedIn() {
    this.user.active = true;
    this.userAuthService.isLoggedIn();

    console.log(this.userAuthService.isLoggedIn());
  }
  public logout() {
    this.user.active = false;
    this.router.navigate(['/login']);
    return this.userAuthService.clear();
  }
}
