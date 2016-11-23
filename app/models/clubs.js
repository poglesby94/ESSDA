import DS from 'ember-data';

export default DS.Model.extend({
     //Records for a club consist of name, the address of the website and address of an image for their logo
     //Should be revised to instead use native storage a clubs logo instead of linking to outside website.
  name: DS.attr('string'),
  website: DS.attr('string'),
  logo: DS.attr('string')
});
