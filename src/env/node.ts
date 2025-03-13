import { type NodeEnv, ENV } from './shared';
export * from './shared';

export const NODE_ENV = process.env.NODE_ENV ?? (ENV.DEVELOPMENT as NodeEnv);
export const DEPLOY_ENV = (process.env.DEPLOY_ENV ?? ENV.DEVELOPMENT) as NodeEnv;

export const IS_LOCALHOST = false;

export const runImmediate = (callback: () => void) => {
  setImmediate(callback);
};
