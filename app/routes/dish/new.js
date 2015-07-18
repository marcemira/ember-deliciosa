import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('dish');
  },

  setupController: function(controller, model) {
    controller.set('dish', model);
  }

});
