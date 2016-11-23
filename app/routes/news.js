import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          //The /news page delivers all submitted news articles
          //Should introduce pagination as number of news articles increases
          return this.store.findAll('news');
     }
});
