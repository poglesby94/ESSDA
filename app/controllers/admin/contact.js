import Ember from 'ember';

export default Ember.Controller.extend({
     sortProperties: ['created:desc'],
     sortedModel: Ember.computed.sort('model', 'sortProperties'),
});
