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
    this.route('news', function() {
      this.route('new');
    });
    this.route('clubs', function() {
      this.route('new');
    });
  });
});

export default Router;
