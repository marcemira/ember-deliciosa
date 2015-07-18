import Ember from 'ember';

export default Ember.Controller.extend({
  ingredient: null,
  actions: {
    save: function() {
      this.get('ingredient').save().then(function() {
        alert('Se ha guardado el ingrediente!');
      }).catch(function(e) {
        alert('Hubo un error: ' + JSON.stringify(e));
      });
    }
  }
});
