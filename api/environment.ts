class Environment {
    get DATABASE_URL() {
        return process.env.DATABASE_URL || ''
    }
}

export const environment = new Environment();