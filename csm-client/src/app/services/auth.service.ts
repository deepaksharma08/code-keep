import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserResponse } from "../domain/user-response";
import { BaseService } from "./base.service";

const BASE_URL = "/v1/api/auth";

const LOGIN_URL = "/login"
const REGISTER_URL = "/register";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService extends BaseService {
    constructor(private http: HttpClient) {
        super()
    }

    public isAuthenticUser(): boolean {
        return !!sessionStorage.getItem('token');
    }

    public login(email: string, password: string): Observable<UserResponse> {
        let url = this.getServiceUrl().concat(BASE_URL).concat(LOGIN_URL);

        let params = {
            email: email,
            password: password
        }
        return this.http.post<UserResponse>(url, params)
    }

    public register(email: string, password: string): Observable<UserResponse> {
        let url = this.getServiceUrl().concat(BASE_URL).concat(REGISTER_URL);

        let params = {
            email: email,
            password: password
        }
        return this.http.post<UserResponse>(url, params);
    }

    public getToken(): string {
        return sessionStorage.getItem("token");
    }
}