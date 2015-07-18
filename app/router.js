import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('dish', function() {
    this.route('edit');
    this.route('new');
  });
  this.route('ingredient', function() {
    this.route('new');
    this.route('edit');
  });
  this.route('dish-type', function() {
    this.route('new');
    this.route('edit');
  });
});

export default Router;
