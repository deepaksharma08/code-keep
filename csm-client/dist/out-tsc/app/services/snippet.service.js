import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SnippetService = class SnippetService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getCodeSnippet(codeSnippet) {
        let params = {
            code: codeSnippet,
            username: "Deepak"
        };
        return this.httpClient.post("http://localhost:8080/v1/api/snippet/getDetails", params);
    }
};
SnippetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SnippetService);
export { SnippetService };
//# sourceMappingURL=snippet.service.js.map