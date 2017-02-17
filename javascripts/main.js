"use strict";

let $ = require("jquery"),
  firebase = require("./config.js"),
  getKey = require("./dbGetter.js"),
  db = require("./dbInteraction.js"),
  api = require("./api.js"),
  // template = require("../templates/cardLayout.hbs"),
  user = require("./user");


// user is automatically logged out when first visiting page
user.logOut();
// Runs enter search function when pressing the enter button
$("#searchbar").on("keyup", EnterSearch);
     // template = require("../templates/cardLayout.hbs");

//materialize being initialized
// $(document).ready(function() {
//     Materialize.updateTextFields();
//   });


//I need to have an ajax request to the api to get the movieData.json (or whatever its called) 

// Adding event listeners to login
$("#auth-btn").click(function(){
  console.log("clicked auth signin button");
  user.logInGoogle()
  .then(function(results){
    console.log("result from login", results.user.uid);
    user.setUser(results.user.uid);
    // loadMoviesToDOM(); 
  });
});
// Adding event listeners to logout
$("#logout").click(function(){
  console.log("clicked log out");
  user.logOut();
  // loadMoviesToDOM();
});

// search bar and enter key pressed
// $("#searchbar").keyup(function(event){
//   if (event.which == 13) {
//     var searchResult = document.getElementById("searchbar").value;
//     console.log("user search result", searchResult);
//     // loadMoviesToDOM(searchResult);
//   }
// });


// var userInput = document.getElementBytId("searchbar");
// userInput.addEventListener("keyup", EnterSearch);

function EnterSearch(event) {
    // console.log("event", event);
  if (event.keyCode === 13){
  var searchResult = document.getElementById("searchbar").value;
  console.log("searchResult", searchResult);
  loadSearchedMoviesToDOM(searchResult); //does this go here??
  }
}

function loadSearchedMoviesToDOM(searchResult) {//this function takes the searchResults as a param
    // console.log("searchResult", searchResult);
    api.searchAPI(searchResult).then(function(movieRetrieved) {//the searchResults are passed to the searchAPI function, bringing back the array of movie results, which is now called movieRetrieved
        console.log("movieRetrieved2", movieRetrieved.results);//testing the movie results here
        var movieArrayResults = movieRetrieved.results;//storing the results in a variable, this make it easier to start at the level of info we need to build the card
        console.log("hopefully an array of movies. ", movieArrayResults[0]);//testing the info in the first of the movie results
        buildMovieObj(movieArrayResults);//sending the movie results to the card building function 
        });
}

// <ul class="collapsible popout" data-collapsible="accordion">

let moviePoster;


function buildMovieObj(movieArrayResults) {
  console.log("movieArrayResults000000000", movieArrayResults);
  var movieCards = document.getElementById("outputEl");
  var n = 1;
  var newDiv = document.createElement("DIV");
  newDiv.classList.add("row");
    console.log("the movies will be seen now!!!");
  for (var i = 0; i < movieArrayResults.length; i++){//looping through the length of the array, incrementing after every iteration
    console.log("will this be endless");
    moviePoster = `<div class="col m4 movieCard" id="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}"><br>
                       <img class="center-align movieImg" width="275px" height="275px" alt="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}" src="https://image.tmdb.org/t/p/w500/${movieArrayResults[i].poster_path}">

                       <p class="movieTitle">${movieArrayResults[i].original_title}</p>
                       <span class="releaseDate">(${movieArrayResults[i].release_date})</span>
                       <button class="movieAddBtn" id="${movieArrayResults[i].id}">Add</button>
                       <br>
                       <button class="movieDeleteBtn" id="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}">Delete</button>
                       <p>${movieArrayResults[i].overview}</p>
                       </div>`;//this variable builds the card up in one variable and then it will be appended to the outputEl
    newDiv.innerHTML += moviePoster;
    movieCards.appendChild(newDiv);
    if ( i === (n *3) - 1){
      newDiv = document.createElement("DIV");
      newDiv.classList.add("row");
      n++;
    }                   
    // $("#outputEl").append(moviePoster);//sends the end result of the cards to the section waiting to hold them on the html
    console.log("this is after the movie should have been seen");
  
  }  
}

//helper
function buildMovieObject(data) {
  let currentUser = user.getUser();
  console.log("currentUser", currentUser);
  let movieObject = {
    title: data.original_title,
    id: data.id,
    releaseDate: data.release_date,
    image: "https://image.tmdb.org/t/p/w500" + data.poster_path,
    userID: currentUser
  };
  db.trackAndAddToFirebase(movieObject);
console.log("movieObject", movieObject);
}




//eventListeners for add/ delete buttons


// Add selected movie to db
$(document).on("click", ".movieAddBtn", function(event) {
  console.log("this.id", this.id);
  var movieID = this.id;
  api.getMovie(movieID)
  .then((data)=>{
    console.log("data", data);
    buildMovieObject(data);
  });
});

//Delete selected movie from db
$(document).on("click", ".movieDeleteBtn", function(event) {
  console.log("hi delete function");
  console.log("this.id", this.id);
  var movieID = this.id;
  db.deleteAndRemoveFromTrackedFirebase(movieID);
  // let movieID = $(this).data("delete-id");

  .then((data)=>{
    console.log("data", data);
    buildMovieObject(data);
  });
});


// Remove song then reload the DOM w/out new song
// $(document).on("click", ".delete-btn", function () {
//   console.log("clicked delete song", $(this).data("delete-id"));
//   let songID = $(this).data("delete-id");
//   db.deleteAndRemoveFromTrackedFirebase();
//   .then(function(){
//      loadSongsToDOM();
//   });
// });





// // go get the song from database and then populate the form for editing.
// $(document).on("click", ".edit-btn", function() {
//   console.log("click edit song");
//   let songID = $(this).data("edit-id");
//   db.getSong(songID)
//   .then(function(song){
//     return templates.songForm(song, songID);
//   })
//   .then(function(finishedForm){
//     $(".uiContainer--wrapper").html(finishedForm);
//   });
// });


// //Save edited song to FB then reload DOM with updated song data
// $(document).on("click", ".save_edit_btn", function() {
//   let songObj = buildSongObj(),
//     songID = $(this).attr("id");
//     db.editSong(songObj, songID)
//     .then(function(data){
//       loadSongsToDOM();
//     });
// });


// // Remove song then reload the DOM w/out new song
// $(document).on("click", ".delete-btn", function () {
//   console.log("clicked delete song", $(this).data("delete-id"));
//   let songID = $(this).data("delete-id");
//   db.deleteSong(songID)
//   .then(function(){
//      loadSongsToDOM();
//   });
// });


