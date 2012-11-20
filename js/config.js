// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // Libraries.
    jquery:			"libs/jquery",
    lodash:			"libs/lodash",
    backbone:		"libs/backbone"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.marionette": ["backbone"]
  },

  // Cache busting for development
  urlArgs: "_=" +  (new Date()).getTime()

});
