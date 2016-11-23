import DS from 'ember-data';

export default DS.Model.extend({
     //Records title, content(which is rendered in html) and the date a news article is submitted through the admin portal
  title: DS.attr('string'),
  content: DS.attr('string'),
  created: DS.attr('date')
});
