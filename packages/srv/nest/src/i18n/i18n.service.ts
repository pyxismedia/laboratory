import { Injectable, MiddlewareFunction } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';

@Injectable()
export class I18nService {
  constructor(
    @InjectConnection() private readonly connection,
  ) {}

  setLanguage(request) {
    const language = request.headers['accept-language'].substring(0, 2);
    this.connection.setDefaultLanguage(language);
  }
}
