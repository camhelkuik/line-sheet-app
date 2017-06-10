import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  retailPrice: DS.attr('int'),
  wholesalePrice: DS.attr('int'),
  images: DS.attr('string'),
  leatherColors: DS.attr('string'),
  hardwareColors: DS.attr('string'),
  sizing: DS.attr('string')
});
