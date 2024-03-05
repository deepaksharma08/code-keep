import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        let params = {
            email: email,
            password: password
        };
        return this.http.post('http://localhost:8080/v1/api/auth/login', params);
    }
    register(email, password) {
        let params = {
            email: email,
            password: password
        };
        return this.http.post('http://localhost:8080/v1/api/auth/register', params);
    }
};
AuthService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map