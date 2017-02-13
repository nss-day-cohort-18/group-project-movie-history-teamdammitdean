"use strict";

// API key we are using
// Authenticates users for the firebase
// Our firebase URL address , we can make calls 
function getKey() {
	return {
		apiKey: "",
		authDomain: "",
		databaseURL: ""
	};
}

// Makes function accessible to other js files
module.exports = getKey;


//////// 	This file is to be kept private		///////////