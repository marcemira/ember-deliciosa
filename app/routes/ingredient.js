import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('ingredient');
  },
  setupController: function(controller, model) {
    controller.set('ingredients', model);
    this._super(controller, model);
  }
});
