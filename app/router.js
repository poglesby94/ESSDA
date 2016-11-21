import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news');
  this.route('contact');
  this.route('admin', function() {
    this.route('contact');
  });
});

export default Router;
