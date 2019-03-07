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
const common_1 = require("@nestjs/common");
const i18n_service_1 = require("./i18n.service");
let I18nMiddleware = class I18nMiddleware {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    resolve() {
        return (request, response, next) => {
            this.i18nService.setLanguage(request);
            next();
        };
    }
};
I18nMiddleware = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [i18n_service_1.I18nService])
], I18nMiddleware);
exports.I18nMiddleware = I18nMiddleware;
//# sourceMappingURL=i18n.middleware.js.map