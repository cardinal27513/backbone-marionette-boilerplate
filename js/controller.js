/*
 * Controller, a collection of methods that correspond to routes and
 * are called by the application router
 */
define([
	"app"
], function(app) {

	return {

		/*
		 * Sample homepage
		 */
		index: function() {
			require([
				// Modules
				"modules/home",
				// Templates
				"text!templates/home/index.html"
			], function(Home, template) {
				// Place the index into our main view
				app.main.show(new Home.View.Index({
					template: template
				}));
			});
		}

	};

});
