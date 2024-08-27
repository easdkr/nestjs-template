import { IsIn, IsString } from 'class-validator';

export const NodeEnvironment = ['development', 'production', 'test', 'local'] as const;
export type NodeEnvironment = (typeof NodeEnvironment)[number];

export class EnvironmentValuable {
  @IsIn(NodeEnvironment)
  NODE_ENV: NodeEnvironment;

  @IsString()
  DATABASE_URL: string;
}
