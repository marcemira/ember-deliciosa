import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.find('dish');
  },
  setupController: function(controller, model) {
    controller.set('dishes', model);
    this._super(controller, model);
  }
});
