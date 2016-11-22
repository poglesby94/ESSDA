import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('int'),
  name: DS.attr('string'),
  club: DS.belongsTo('clubs')
});
