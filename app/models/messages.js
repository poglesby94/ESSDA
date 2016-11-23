import DS from 'ember-data';

export default DS.Model.extend({
     //Records the details of a message submitted through the contact us form
     //Could be revised to have a field recording if a record has been read or is still unread after being submitted
  email: DS.attr('string'),
  name: DS.attr('string'),
  topic: DS.attr('string'),
  content: DS.attr('string'),
  created: DS.attr('date')
});
