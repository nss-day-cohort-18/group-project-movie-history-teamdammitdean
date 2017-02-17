"use strict";

console.log("hello");

//the requires needed for this page
let $ = require('jquery'),
    firebase = require("./config.js");


//when user tracks a movie
function trackAndAddToFirebase(movieObject) {
    console.log("hi track movie function");
    return new Promise(function(resolve,reject){
    	$.ajax({
    		url: `https://movie-history-group-proj-dfc09.firebaseio.com/movies.json`,
    		type: "POST",
    		data: JSON.stringify(movieObject),
			dataType: 'json'
    	}).done(function(){
    		resolve();
    	});
    });
}


//to see user's tracked movies--show Unwatched button: shows the list of movies you have added to your "Watch List" 
// upon click, the 'Show Unwatched' button will trigger an event handler function() { function will send an XHr "GET" request to the [database(stored on the FireBase server)] 
// when the ajax request is completed, the server will send the .json data to the outputEl  

// Track filter--BRI 

function getUserMoviesShownOnFirebase(user) {
    return new Promise(function(resolve,reject){
        $.ajax({
            url:`https://movie-history-group-proj-dfc09.firebaseio.com/movies.json?orderBy="userID"&equalTo="${user}"`,
            type: "GET" 
          }).done(function(data){
            console.log("data0000000000",data);
            resolve(data);
          });
      });
}


//to delete a movie from user's tracked movies
function deleteAndRemoveFromTrackedFirebase() {
    console.log("hi delete movie function");
    return new Promise(function(resolve,reject){
    	$.ajax({
    		url: `https://movie-history-group-proj-dfc09.firebaseio.com/movies.json`,
    		type: "DELETE"
    	}).done(function(){
    		resolve();
    	});
    });
}

//how to rate movie user has tracked
function rateTrackedMovie(){

}





module.exports = {
	trackAndAddToFirebase,
	deleteAndRemoveFromTrackedFirebase,
	getUserMoviesShownOnFirebase
};