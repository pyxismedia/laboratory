"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const posts_module_1 = require("../posts/posts.module");
const graphql_1 = require("@nestjs/graphql");
const i18n_module_1 = require("../i18n/i18n.module");
const config_module_1 = require("../config/config.module");
const auth_module_1 = require("../auth/auth.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            i18n_module_1.I18nModule,
            posts_module_1.PostsModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                include: [posts_module_1.PostsModule],
                context: ({ req }) => ({
                    request: req,
                }),
            }),
            config_module_1.ConfigModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map