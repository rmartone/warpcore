export const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
} as const;

export type NodeEnv = (typeof ENV)[keyof typeof ENV];
