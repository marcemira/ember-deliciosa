import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.store.findRecord('dish', params.dish_id);
  },

  setupController: function(controller, model) {
    controller.set('dishes', model);
    this._super(controller, model);
  }

});
