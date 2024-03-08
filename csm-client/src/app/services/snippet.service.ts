import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SnippetDTO } from '../domain/snippet-response';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private httpClient : HttpClient) { }
  
  public saveCodeSnippet(snippet: SnippetDTO) : Observable<SnippetDTO> {
    let params : SnippetDTO = {
      code: snippet.code,
      type: snippet.type,
      userId: snippet.userId
    }
    return this.httpClient.post<SnippetDTO>("http://localhost:8080/v1/api/snippet/saveSnippetDetails", params)
  }

  public getAllCodeSnippet(): Observable<SnippetDTO[]> {
    return this.httpClient.get<SnippetDTO[]>("http://localhost:8080/v1/api/snippet/getAllSnippets");
  }

  public getSnippetsByType(type: string): Observable<SnippetDTO[]> {
    return this.httpClient.get<SnippetDTO[]>(`http://localhost:8080/v1/api/snippet/getSnippetsByType/${type}`);
  }
}
