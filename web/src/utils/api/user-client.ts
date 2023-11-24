import { Environment } from "@/environment";
import { Auth } from "../auth";
import { LoginSuccessResponse } from "./models/user";

export class UserClient {
    baseUrl: string = Environment.apiBaseUrl;
    resource: string = 'v1/user'

    async login(email: string, password: string): Promise<LoginSuccessResponse> {
        return fetch(`${this.baseUrl}/${this.resource}/login`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json())
            .then((data: LoginSuccessResponse) => {
                if (data.accessToken) {
                    localStorage.setItem('token', data.accessToken);
                }
                return data;
            });
    }
    
    get headers() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Auth.getToken()}`
        };
    }
}