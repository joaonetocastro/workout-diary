export class Environment {
    static get apiBaseUrl() {
        return process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';
    }
}