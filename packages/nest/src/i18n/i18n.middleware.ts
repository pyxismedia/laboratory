import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { I18nService } from './i18n.service';

@Injectable()
export class I18nMiddleware implements NestMiddleware {
  constructor(
    private readonly i18nService: I18nService,
  ) {}

  resolve(): MiddlewareFunction {
    return (request, response, next) => {
      this.i18nService.setLanguage(request);
      next();
    };
  }
}
