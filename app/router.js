import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news', function(){
       this.route('article');
   });
  this.route('contact');
  this.route('clubs');
  this.route('admin', function() {
    this.route('contact');
    this.route('news', function() {
      this.route('new');
    });
    this.route('clubs', function() {
      this.route('new');
    });
  });
  this.route('info', function() {
    this.route('pvg');
    this.route('essda');
  });
  this.route('sign-in');
});

export default Router;
