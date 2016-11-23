import Ember from 'ember';

export default Ember.Route.extend({
     beforeModel() {
          //The /admin section should only be available to admin users
          //These are currently any user with an account
          //In future may be refined so that only certain users can have access to the admin portal(if user accounts are used in the main front-facing section)
          if (this.get('session.isAuthenticated')) {
               this.transitionTo('admin');
          }else{
               this.transitionTo('sign-in');
          }
     }
});
