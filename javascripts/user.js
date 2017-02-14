"use strict";

let firebase = require("./firebaseConfig"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

firebase.auth().onAuthStateChange( function(user){
	if (user){
		console.log("currentUser logged in", currentUser);

	}else{
		currentUser = null;
		console.log("currentUser is not logged in");
	}
});

function logInGoogle() {
	return firebase.auth().signInWIthPopup(provider);
}

function logOut() {
	return firebase.auth().signOut();
}

function getUser(){
	return currentUser;
}

function setUser(val) {
	currentUser = val;
}

module.exports = {logInGoogle, logOut, getUser, setUser};