App.ApplicationController = Ember.Controller.extend({
  // $('.dropdown-toggle').on('click', function(){$('.dropdown-menu').toggleClass('visible')});
// dropDownToggle: function() {
// 	$('.dropdown-toggle').on('click', function(){$('.dropdown-menu').toggleClass('visible')})
// },

// To ensure scroll top on path change
  currentPathChanged: function () {
    window.scrollTo(0, 0);
  }.observes('currentPath')

});