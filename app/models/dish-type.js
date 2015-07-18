import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),

  dishes: DS.hasMany('dish', { async: true, inverse: 'dishType' })

});
