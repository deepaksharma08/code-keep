import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SnippetResponse } from '../domain/snippet-response';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private httpClient : HttpClient) { }
  
  public getCodeSnippet(codeSnippet : string) : Observable<SnippetResponse> {
    let params = {
      code : codeSnippet,
      username : "Deepak"
    }  
    return this.httpClient.post<SnippetResponse>("http://localhost:8080/v1/api/snippet/getDetails", params)
  }
}
