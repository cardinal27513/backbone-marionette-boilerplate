define([
	// Library
	"app",
	"backbone"
], function(app, Backbone) {

	// Initialize
	var Home = {};

	Home.View = {
	
		/*
		 * Views
		 */
		Index: Backbone.View.extend({
			initialize: function(options) {
				_.extend(this, options);
			},
			render: function() {
				this.$el.append(this.template);
				return this;
			}
		})

	};

	Home.Models = {
	
	};

	Home.Collections = {
	
	};

	return Home;

});
