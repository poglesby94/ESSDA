import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  website: DS.attr('string'),
  logo: DS.attr('string'),
  keyword: DS.attr('string')
});
