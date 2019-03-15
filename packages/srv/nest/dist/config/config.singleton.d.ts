declare enum Env {
    MONGODB_URI = "MONGODB_URI",
    NODE_ENV = "NODE_ENV",
    PORT = "PORT"
}
export declare class ConfigSingleton {
    private readonly envConfig;
    readonly Env: typeof Env;
    constructor(filePath: string);
    get(key: Env): Env;
    private validateInput;
}
export {};
