import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('dish');
  },

  setupController: function(controller, model) {
    controler.set('dishes', model);
  }
});
