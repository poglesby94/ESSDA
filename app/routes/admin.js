import Ember from 'ember';

export default Ember.Route.extend({
     beforeModel() {
          if (this.get('session.isAuthenticated')) {
               this.transitionTo('admin');
          }else{
               this.transitionTo('sign-in');
          }
     }
});
