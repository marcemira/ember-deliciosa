import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name: DS.attr('string'),

  description: DS.attr('string'),

  price: DS.attr('number'),

  dishType: DS.belongsTo('dish-type', { async: true, inverse: 'dishes' }),

  ingredients: DS.hasMany('ingredient', { async: true, inverse: 'dishes' }),

  ingredientList: Ember.computed('ingredients', function () {

    return this.get('ingredients').map(function(ing) { return ing.get('name'); }).join(', ');

  })

});
