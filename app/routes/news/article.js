import Ember from 'ember';

export default Ember.Route.extend({
     model(params) {
          //Takes the id supplied in the route and returns the corresponding news record 
          return this.store.findRecord('news', params.article_id);
     }
});
