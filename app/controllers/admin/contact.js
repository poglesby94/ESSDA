import Ember from 'ember';

export default Ember.Controller.extend({
     //Takes the result of the model hook, and resorts the posts into chronological order(newest first)
     sortProperties: ['created:desc'],
     sortedModel: Ember.computed.sort('model', 'sortProperties'),
});
