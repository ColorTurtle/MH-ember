App.ApplicationController = Ember.Controller.extend({
// To ensure scroll top on path change
  currentPathChanged: function () {
    window.scrollTo(0, 0);
  }.observes('currentPath')

});