require([

	// Libraries
	"jquery",

  // Application.
  "app",

  // Main Router.
  "router"
],

function($, App, Router) {

	/* Leverage jQuery's document ready method to start the application
	 * as soon as the DOM is ready
	 */
	$(document).ready(function() {

		App.start();
		App.router = new Router();
		Backbone.history.start({ pushState: true });
		
		$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
			// Get the absolute anchor href.
			var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
			// Get the absolute root.
			var root = location.protocol + "//" + location.host + App.root;

			// Ensure the root is part of the anchor href, meaning it's relative.
			if (href.prop.slice(0, root.length) === root) {
				// Stop the default event to ensure the link will not cause a page
				// refresh.
				evt.preventDefault();

				// `Backbone.history.navigate` is sufficient for all Routers and will
				// trigger the correct events. The Router's internal `navigate` method
				// calls this anyways.  The fragment is sliced from the root.
				Backbone.history.navigate(href.attr, true);
			}
		});

	});

});
