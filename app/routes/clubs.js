import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          //Every club in the system should be available in the list shown on /clubs
          return this.store.findAll('clubs');
     }
});
