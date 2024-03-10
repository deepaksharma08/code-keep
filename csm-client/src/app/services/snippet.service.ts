import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SnippetDTO } from '../domain/snippet-response';


const BASE_SERVICE_URL = "/v1/api/snippet";
const SERVICE_URL = "http://localhost:8080";

const GET_ALL_SNIPPETS = "/getAllSnippets/{USER_ID}";
const GET_SNIPPET_BY_TYPE = "/getSnippetsByType/{TYPE}";
const SAVE_SNIPPET = "/saveSnippetDetails";

const TYPE = "{TYPE}";
const USER_ID = "{USER_ID}";

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  constructor(private httpClient: HttpClient) { }

  public saveCodeSnippet(snippet: SnippetDTO): Observable<SnippetDTO> {
    let url = SERVICE_URL
      .concat(BASE_SERVICE_URL)
      .concat(SAVE_SNIPPET);

    let params: SnippetDTO = {
      code: snippet.code,
      type: snippet.type,
      userId: snippet.userId
    }

    return this.httpClient.post<SnippetDTO>(url, params);
    // return of({} as SnippetDTO);
  }

  public getAllCodeSnippet(userId: string): Observable<SnippetDTO[]> {
    let url = SERVICE_URL
      .concat(BASE_SERVICE_URL)
      .concat(GET_ALL_SNIPPETS)
      .replace(USER_ID, userId);

    return this.httpClient.get<SnippetDTO[]>(url);
  }

  public getSnippetsByType(type: string): Observable<SnippetDTO[]> {
    let url = SERVICE_URL
      .concat(BASE_SERVICE_URL)
      .concat(GET_SNIPPET_BY_TYPE)
      .replace(TYPE, type);

    return this.httpClient.get<SnippetDTO[]>(url);
  }
}
