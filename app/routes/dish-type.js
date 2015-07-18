import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('dish-type');
  },
  setupController: function(controller, model) {
    controller.set('dishTypes', model);
    this._super(controller, model);
  }
});
