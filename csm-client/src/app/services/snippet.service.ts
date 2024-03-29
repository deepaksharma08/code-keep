import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SnippetDTO } from '../domain/snippet-response';
import { BaseService } from './base.service';


const BASE_SERVICE_URL = "/v1/api/snippet";

const GET_ALL_SNIPPETS = "/getAllSnippets/{USER_ID}";
const GET_SNIPPET_BY_TYPE = "/getSnippetsByType?type={TYPE}&userId={USER_ID}";
const DELETE_SNIPPET = "/deleteSnippet/{SNIPPET_ID}"
const SAVE_SNIPPET = "/saveSnippetDetails";
const EDIT_SNIPPET = "/editSnippet";

const TYPE = "{TYPE}";
const USER_ID = "{USER_ID}";
const SNIPPET_ID = "{SNIPPET_ID}";

@Injectable({
  providedIn: 'root'
})
export class SnippetService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super()
  }

  public saveCodeSnippet(snippet: SnippetDTO): Observable<SnippetDTO> {
    let url = this.getServiceUrl()
      .concat(BASE_SERVICE_URL)
      .concat(SAVE_SNIPPET);

    let params: SnippetDTO = {
      code: snippet.code,
      type: snippet.type,
      userId: snippet.userId
    }

    return this.httpClient.post<SnippetDTO>(url, params);
  }

  public getAllCodeSnippet(userId: string): Observable<SnippetDTO[]> {
    let url = this.getServiceUrl()
      .concat(BASE_SERVICE_URL)
      .concat(GET_ALL_SNIPPETS)
      .replace(USER_ID, userId);

    return this.httpClient.get<SnippetDTO[]>(url);
  }

  public getSnippetsByType(type: string, userId: string): Observable<SnippetDTO[]> {
    let url = this.getServiceUrl()
      .concat(BASE_SERVICE_URL)
      .concat(GET_SNIPPET_BY_TYPE)
      .replace(TYPE, type)
      .replace(USER_ID, userId);
    return this.httpClient.get<SnippetDTO[]>(url);
  }

  public deleteSnippetById(id: string): Observable<string> {
    let url = this.getServiceUrl()
      .concat(BASE_SERVICE_URL)
      .concat(DELETE_SNIPPET)
      .replace(SNIPPET_ID, id);

    return this.httpClient.get(url, { responseType: 'text' });
  }

  public saveEdittedSnippet(editedSnippet: SnippetDTO): Observable<SnippetDTO> {
    let url = this.getServiceUrl().concat(BASE_SERVICE_URL).concat(EDIT_SNIPPET);
    return this.httpClient.post<SnippetDTO>(url, editedSnippet);
  }
}
