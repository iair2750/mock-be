import { NestApplicationOptions } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { IAppConfigService } from './app-config.service.interface';

class AppConfigService implements IAppConfigService {
  private readonly env: NodeJS.ProcessEnv;
  constructor() {
    dotenv.config();
    this.env = process.env;
  }

  getPort(): number {
    const port = parseInt(this.env.APP_PORT ?? '');
    if (!port) {
      throw new Error('config error - missing env.APP_PORT');
    }
    return port;
  }

  getOptions(): NestApplicationOptions | undefined {
    return { cors: true };
  }
}

export const appConfig = new AppConfigService();
