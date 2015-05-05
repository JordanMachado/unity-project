

// should create module for preloading
var $ =  require('jquery');
var App = require('./app/App');
var Resources = require('Resources');

window.DEBUG = true;

var main = {
	initialize:function() {
		$(document).ready(main.onReady);

	},
	onReady:function() {
		Resources.load(function(){
			App.start({container:'#App'})
			console.log(Resources)
		
		});

	}
}

main.initialize();