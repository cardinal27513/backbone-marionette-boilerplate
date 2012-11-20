define([
  // Libraries.
  "jquery",
  "lodash",
	"backbone",
  // Plugins.
  "plugins/backbone.marionette"
],

function($, _, Backbone) {

  // Provide a global location to place configuration settings and module
  // creation.
  var App = new Backbone.Marionette.Application({
    // The root path to run the application.
    root: "/"
  });

	App.addRegions({
		main:			'#main'
	});

	return App;

});
