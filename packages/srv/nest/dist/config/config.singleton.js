"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const Joi = require("joi");
const common_1 = require("@nestjs/common");
var Env;
(function (Env) {
    Env["MONGODB_URI"] = "MONGODB_URI";
    Env["NODE_ENV"] = "NODE_ENV";
    Env["PORT"] = "PORT";
})(Env || (Env = {}));
let ConfigSingleton = class ConfigSingleton {
    constructor(filePath) {
        this.Env = Env;
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
    }
    get(key) {
        return this.envConfig[key];
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            [this.Env.NODE_ENV]: Joi.string()
                .valid(['development', 'production', 'test', 'provision'])
                .default('development'),
            [this.Env.MONGODB_URI]: Joi.string(),
            [this.Env.PORT]: Joi.string(),
        });
        const { error, value: validatedEnvConfig } = Joi.validate(envConfig, envVarsSchema);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
};
ConfigSingleton = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [String])
], ConfigSingleton);
exports.ConfigSingleton = ConfigSingleton;
//# sourceMappingURL=config.singleton.js.map