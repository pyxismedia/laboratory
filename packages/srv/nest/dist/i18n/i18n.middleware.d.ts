import { MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { I18nService } from './i18n.service';
export declare class I18nMiddleware implements NestMiddleware {
    private readonly i18nService;
    constructor(i18nService: I18nService);
    resolve(): MiddlewareFunction;
}
