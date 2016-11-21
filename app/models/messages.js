import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  topic: DS.attr('string'),
  content: DS.attr('string'),
  created: DS.attr('date')
});
