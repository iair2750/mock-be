import { NestApplicationOptions } from '@nestjs/common';

export interface IAppConfigService {
  getPort: () => number;
  getOptions: () => NestApplicationOptions | undefined;
}
