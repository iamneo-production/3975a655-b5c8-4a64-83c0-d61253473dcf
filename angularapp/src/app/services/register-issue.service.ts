
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
    return  this._http.post<any>("https://8080-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/addComplaint",Issue);
    }
    fetchIssueList(): Observable<any> {
      return this._http.get<any>("https://8080-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/addComplaint")
    }
    //fetch issue of specific user
    getIssueList(issue:String): Observable<any> {      
      return this._http.get<any>("https://8080-ffddddabeeffaddccadaddadcafda.examlyiopb.examly.io/issue/"+issue)
    }

   
}
