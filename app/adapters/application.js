import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:1337',
  headers: {
    'Content-Type': 'application/vnd.api+json; charset=UTF-8',
    'Accept': 'application/vnd.api+json; charset=UTF-8'
  }
});
