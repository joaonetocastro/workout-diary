import { Environment } from "@/environment";
import { Auth } from "../auth";

export class BaseClient<
    Model,
    CreateModelSchema
> {
    public baseUrl: string = Environment.apiBaseUrl
    public resource: string = ''

    async getAll({filters={}}: {filters?: Record<string, any>} = {}): Promise<Model[]>{
        const url = new URL(`${this.baseUrl}/${this.resource}`)
        if(Object.keys(filters).length > 0) {
            url.search = new URLSearchParams(filters).toString();
        }
        const response = await fetch(url, {
            headers: this.headers,
        })
        return response.json();
    }

    async findById(id: string): Promise<Model> {
        const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`, {
            headers: this.headers,
        })
        return response.json();
    }

    async create(model: CreateModelSchema): Promise<Model> {
        const response = await fetch(`${this.baseUrl}/${this.resource}`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(model)
        })
        return response.json();
    }

    async update(id: string, model: Partial<Model>): Promise<Model> {
        const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(model)
        })
        return response.json();
    }

    async delete(id: string): Promise<Model> {
        const response = await fetch(`${this.baseUrl}/${this.resource}/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        return response.json();
    }

    get headers() {
        return {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Auth.getToken()}`
        };
    }
}