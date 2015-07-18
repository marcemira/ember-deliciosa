import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('ingredient');
  },
  setupController: function(controller, model) {
    controller.set('ingredient', model);
    this._super(controller, model);
  }
});
