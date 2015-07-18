import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dish', function() {
    this.route('edit');
    this.route('new');
  });
});

export default Router;
