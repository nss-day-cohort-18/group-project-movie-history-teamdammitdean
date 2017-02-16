"use strict";

console.log("hello");

//the requires needed for this page
let $ = require('jquery'),
    firebase = require("./config.js");


//when user tracks a movie
function trackAndAddToFirebase(buildMovieObj) {
    console.log("hi track movie function");
    return new Promise(function(resolve,reject){
    	$.ajax({
    		url: `https://movie-history-group-proj-dfc09.firebaseio.com/movies.json`,
    		type: "POST",
    		data: JSON.stringify(buildMovieObj),
			dataType: 'json'
    	}).done(function(){
    		resolve();
    	});
    });
}

//to see user's tracked movies--show tracked filter
// function getUserMoviesShownOnFirebase(user) {
// 	return new Promise(function(resolve,reject){
// 		$.ajax({
//     		url:`https://movie-history-group-proj-dfc09.firebaseio.com/movies.json?orderBy="uid"$equalTo="${}`,
//     		type: 
//   		}).done(function(){
//     		resolve();
//   		});
//   	});
// }


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
	deleteAndRemoveFromTrackedFirebase
	// getUserMoviesShownOnFirebase
};