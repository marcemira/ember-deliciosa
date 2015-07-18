import Ember from 'ember';

export default Ember.Controller.extend({
  dish: null,
  actions: {
    save: function() {
      this.get('dish').save().then(function() {
        alert('Se ha guardado el plato!');
      }).catch(function(e) {
        alert('Hubo un error: ' + JSON.stringify(e));
      });
    }
  }
});
