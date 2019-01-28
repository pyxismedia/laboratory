export const DEVELOPMENT = 'development';
export const PRODUCTION = 'production';
export const ENVIRONMENT = process.env.NODE_ENV || 'production';
export const PORT = process.env.PORT || 3002;
export const MONGODB = process.env.MONGODB_URI || 'mongodb://localhost/pyxis';
export const HOST = process.env.HOST || '0.0.0.0';
