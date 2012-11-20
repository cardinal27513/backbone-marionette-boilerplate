define([
	"controller",
	"plugins/backbone.marionette"
],

function(controller) {

	'use strict';

  // Defining the application router, you can attach sub routers here.
  return Backbone.Marionette.AppRouter.extend({
    
		appRoutes: {
			// Application routes
			"*default":										"index",
    },

		// Our controller to handle the routes
		controller: controller

  });

});
