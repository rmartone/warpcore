/// <reference types="vite/client" />
import { type NodeEnv, ENV } from './shared';
export * from './shared';

export const NODE_ENV = (import.meta.env.MODE ?? ENV.DEVELOPMENT) as NodeEnv;
export const DEPLOY_ENV = (import.meta.env.DEPLOY_ENV ?? ENV.DEVELOPMENT) as NodeEnv;

export const IS_LOCALHOST = typeof window !== 'undefined' && window.location?.hostname === 'localhost';

export const runImmediate = (callback: () => void) => {
  requestAnimationFrame(callback);
};
