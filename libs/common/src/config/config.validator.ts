import { ConfigModuleOptions } from '@nestjs/config';
import { validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { EnvironmentValuable } from '@libs/common/config/environment-valuable';
export const validate: ConfigModuleOptions['validate'] = (config) => {
  const env = plainToInstance(EnvironmentValuable, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(env, { skipMissingProperties: false });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return env;
};
