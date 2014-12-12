/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'locomotivecms-cab',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    contentSecurityPolicy: {
      // See Content Security Policy Reference (`http://content-security-policy.com`).
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build, e.g. `'with-controller': true`.
      }
    },

    APP: {
      // Here you can pass flags or options to your application instance when it is created.
    },
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'style-src': "'self' 'unsafe-inline'"
    };

    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.rootElement = '#ember-testing';

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'production') {
    // ...
  }

  return ENV;
};