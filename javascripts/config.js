"use strict";

// Sets path to firebase in node_modules
// fb - makes specific js file's functions available
// fbData - stores data from fbGetter.js & initializes it to use in dot notation
let firebase = require("firebase/app"),
	fb = require("./fbGetter.js"),
	fbData = fb();
	movieAPI = require("./fbGetter"),
	moviedata = movieAPI();

// Need these to manipulate firebase
require("firebase/auth");
require("firebase/database");

// Takes info from fbData ( fb() ) and
// stores it into new config object
var config = {
	apiKey: fbData.apiKey,
	authDomain: fbData.authDomain,
	databaseURL: fbData.databaseURL
};

// Allows us to interact with firebase
firebase.initializeApp(config);

// Re-export firebase because we added initializeApp method 
module.exports = firebase;