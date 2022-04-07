
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AddIssue } from '../model/add-issue';
import { RegisterIssueService } from '../services/register-issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
})
export class IssueComponent implements OnInit {
  imageToShow: string = '';
  Issue=new AddIssue();
  msg:any='';
  constructor(private service: RegisterIssueService, private _router: Router) {}

  ngOnInit(): void {
   
  }

  showImage() {
    let imageToShow = (<HTMLInputElement>document.getElementById('imageUrl')).value;
   
    let image = document.getElementById('imagePreviewArea') as HTMLImageElement;
    let text = document.getElementById('text') as HTMLHeadingElement;
    
    if (imageToShow.length > 0) {
      image.src = imageToShow;
      image.style.display = 'block';
      text.style.display = 'none';
    } else {
      image.style.display = 'none';
      text.style.display = 'block';
    }
  }
  submitIssue(){
    this.service.RegisterIssueFromRemote(this.Issue).subscribe(
      (data) => {
        //console.log(data);
        this._router.navigate(['/user-home']);
      },
      (error) => {
        console.log('exception occured');
        
       
      }
    );

  }
}
