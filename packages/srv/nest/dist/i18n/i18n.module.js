"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const i18n_middleware_1 = require("./i18n.middleware");
const mongoose_1 = require("@nestjs/mongoose");
const i18n_service_1 = require("./i18n.service");
const mongoose = require("mongoose");
const mongooseIntl = require("mongoose-intl");
const config_module_1 = require("../config/config.module");
const config_singleton_1 = require("../config/config.singleton");
mongoose.plugin(mongooseIntl, { languages: ['en', 'de', 'fr'], defaultLanguage: 'en' });
let I18nModule = class I18nModule {
    configure(i18n) {
        i18n.apply(i18n_middleware_1.I18nMiddleware).forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
I18nModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                useFactory: (configService) => __awaiter(this, void 0, void 0, function* () {
                    return ({
                        uri: configService.get(configService.Env.MONGODB_URI),
                    });
                }),
                inject: [config_singleton_1.ConfigSingleton],
            })
        ],
        providers: [i18n_service_1.I18nService],
    })
], I18nModule);
exports.I18nModule = I18nModule;
//# sourceMappingURL=i18n.module.js.map