import path from 'path';

export default ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi'),
            user: env('DATABASE_USERNAME', 'strapi'),
            password: env('DATABASE_PASSWORD', 'strapi'),
            schema: env('DATABASE_SCHEMA', 'public'), // Not required
            ssl: {
                rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
            },
        },
        debug: false,
        useNullAsDefault: true,
        acquireConnectionTimeout: 5000,
        pool: {
            min: 0,
            max: 10,
            createTimeoutMillis: 8000,
            acquireTimeoutMillis: 8000,
            idleTimeoutMillis: 8000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100,
            propagateCreateError: false,
        },
    },
});
