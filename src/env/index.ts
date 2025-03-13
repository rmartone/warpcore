const envModule = await (typeof process !== 'undefined' && process.versions?.node
  ? import('./node')
  : import('./browser'));

export const { ENV, NODE_ENV, DEPLOY_ENV, IS_LOCALHOST, runImmediate } = envModule;

export const IS_DEV_DEPLOY = DEPLOY_ENV !== ENV.PRODUCTION;
export const IS_DEV_BUILD = NODE_ENV === ENV.DEVELOPMENT;
