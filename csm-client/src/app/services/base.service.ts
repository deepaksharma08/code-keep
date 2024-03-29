import { environment } from "src/environments/environment";

export class BaseService {
    protected getServiceUrl(): string {
        return environment.apiUrl;
    }
}