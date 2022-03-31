
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddIssue } from '../model/add-issue';

@Injectable({
  providedIn: 'root'
})
export class RegisterIssueService {

  constructor(private _http:HttpClient) { }
  public RegisterIssueFromRemote(Issue:AddIssue):Observable<any>{
    return  this._http.post<any>("http://localhost:8081/addIssue",Issue);
    }
}
