/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'locomotivecms-cab',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build, e.g. `'with-controller': true`.
      }
    },

    APP: {
      // Here you can pass flags or options to your application instance when it is created.
    }
  };

  if (environment === 'development') {
    // === Application ===

    // --- Logging ---

    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // === Common ===

    // Testem prefers this
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // === Application ===

    ENV.APP.rootElement = '#ember-testing';

    // --- Logging ---

    // Keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'production') {
    // ...
  }

  return ENV;
};