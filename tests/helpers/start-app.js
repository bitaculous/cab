import Ember from 'ember';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = Ember.merge({}, config.APP);

  // Use defaults, but you can override.
  attributes = Ember.merge(attributes, attrs);

  Ember.run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  return App;
}