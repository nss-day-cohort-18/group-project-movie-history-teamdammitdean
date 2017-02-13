"use strict";

// API key we are using
// Authenticates users for the firebase
// Our firebase URL address , we can make calls 
function getKey() {
	return {
		apiKey: "AIzaSyDJ-P7PbkEX_MVgVob00hPKzKJ03laRiUA",
		authDomain: "movie-history-70b20.firebaseapp.com",
		databaseURL: "https://movie-history-70b20.firebaseio.com"
	};
}

// Makes function accessible to other js files
module.exports = getKey;


//////// 	This file is to be kept private		///////////