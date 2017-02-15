"use strict";

let firebase = require("./config"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;

// getting Ids of login/logout from dom
var logoutBtn = document.getElementById('logout');
var signInBtn = document.getElementById('auth-btn'); 

// function for hide/show login/logout buttons
firebase.auth().onAuthStateChanged(function(user){
  if (user){
    currentUser = user.uid;
    console.log("currentUser logged in", currentUser);
    logoutBtn.classList.remove('is-hidden');
    signInBtn.classList.add('is-hidden');
  } else {
    currentUser = null;
    console.log("currentUser not logged in");
    alert("sign in to search movies");
    logoutBtn.classList.add('is-hidden');
    signInBtn.classList.remove('is-hidden');
  }
});

function logInGoogle() {
	return firebase.auth().signInWithPopup(provider);
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