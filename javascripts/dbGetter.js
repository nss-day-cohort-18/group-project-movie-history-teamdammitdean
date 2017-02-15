"use strict";//This file must be ignored. We don't want anyone to have our keys.

// API key we are using
// Authenticates users for the firebase
// Our firebase URL address , we can make calls 
function getKey() {
	return {
		apiKey: "AIzaSyAyUnXNmHbM9S5PGYamDa8QjCiNh_EfLrM",
		authDomain: "movie-history-group-proj-dfc09.firebaseapp.com",
		databaseURL: "https://movie-history-group-proj-dfc09.firebaseio.com"
	};
}

function movieAPIKey() {
	return {
		apiKey: 
	};
}

// Makes function accessible to other js files
module.exports = {getKey, movieAPIKey};


//////// 	This file is to be kept private		///////////