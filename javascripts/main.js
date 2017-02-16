"use strict";

let $ = require("jquery"),
  firebase = require("./config.js"),
  getKey = require("./dbGetter.js"),
  db = require("./dbInteraction.js"),
  api = require("./api.js"),
  // template = require("../templates/cardLayout.hbs"),
  user = require("./user.js");

// user is automatically logged out when first visiting page
user.logOut();
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

function buildMovieObj(movieArrayResults) {
    console.log("the movies will be seen now!!!");
  for (var i = 0; i < movieArrayResults.length; i++){//looping through the length of the array, incrementing after every iteration
    console.log("will this be endless");
    let moviePoster = `<div class="card box col s12">
                       <img src="https://image.tmdb.org/t/p/w500/${movieArrayResults[i].poster_path}">
                       <h4>${movieArrayResults[i].original_title}</h4><span>(${movieArrayResults[i].release_date})</span>
                       <p>${movieArrayResults[i].overview}</p>
                       </div>`;//this variable builds the card up in one variable and then it will be appended to the outputEl
    $("#outputEl").append(moviePoster);//sends the end result of the cards to the section waiting to hold them on the html
    console.log("this is after the movie should have been seen");
  
  }  
}


 db.trackAndAddToFirebase(moviePoster); //needs to be called on button click to add to user's tracked movies




