import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dishes');
  this.route('ingredients');
  this.route('dishTypes');
});

export default Router;
