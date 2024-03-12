import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../domain/user-response";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    constructor(private http: HttpClient) {
    }

    public isAuthenticUser(): boolean {
        return !!sessionStorage.getItem('token');
    }

    public login(email: string, password: string): Observable<UserResponse> {
        let params = {
            email: email,
            password: password
        }
        return this.http.post<UserResponse>('http://localhost:8080/v1/api/auth/login', params)
    }

    public register(email: string, password: string): Observable<UserResponse> {
        let params = {
            email: email,
            password: password
        }
        return this.http.post<UserResponse>('http://localhost:8080/v1/api/auth/register', params);
    }
}