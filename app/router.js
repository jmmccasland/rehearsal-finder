import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this;

  this.route('rehearsalspaces', function () {
    this.route('detail', { path: '/:id' });
  });

  this.route('user-dashboard');
});

export default Router;
