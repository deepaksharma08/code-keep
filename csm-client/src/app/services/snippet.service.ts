import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SnippetResponse } from '../domain/snippet-response';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private httpClient : HttpClient) { }
  
  public saveCodeSnippet(codeSnippet : string, type: string, user: string) : Observable<SnippetResponse> {
    let params : SnippetResponse = {
      code: codeSnippet,
      type: type,
      userId: user
    }
    return this.httpClient.post<SnippetResponse>("http://localhost:8080/v1/api/snippet/saveSnippetDetails", params)
  }
}
