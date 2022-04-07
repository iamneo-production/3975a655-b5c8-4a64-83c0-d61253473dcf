
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
    return  this._http.post<any>("http://localhost:8080/addComplaint",Issue);
    }
    fetchIssueList(): Observable<any> {
      return this._http.get<any>("http://localhost:8080/addComplaint")
    }
    //fetch issue of specific user
    getIssueList(issue:String): Observable<any> {      
      return this._http.get<any>("http://localhost:8080/issue/"+issue)
    }

   
}
