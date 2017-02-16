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

//just putting below function right here for now, will probably need to go in main.js
// var userInput = document.getElementBytId("searchbar");
// userInput.addEventListener("keyup", EnterSearch);

function EnterSearch(event) {
    console.log("event", event);
  if (event.keyCode === 13){
  var searchResult = document.getElementById("searchbar").value;
  console.log("searchResult", searchResult);
  loadSearchedMoviesToDOM(searchResult); //does this go here??
  }
}

function loadSearchedMoviesToDOM(searchResult) {
    console.log("searchResult", searchResult);
    api.searchAPI(searchResult).then(function(movieRetrieved) {
        console.log("movieRetrieved", movieRetrieved.results[0].title); //***HAIL MARY

        console.log("movieRetrieved", movieRetrieved.results[0].title); 
        

var printMoviesToDom = movieRetrieved; 
        for (var i = 0; i < printMoviesToDom.results.length; i++) {
        console.log("printMoviesToDom.results.length",printMoviesToDom.results.length);
        document.getElementById("outputEl").innerHTML += movieRetrieved.results[i].title + "<br>" + movieRetrieved.results[i].poster_path;        
};

})







