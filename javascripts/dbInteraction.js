"use strict";

console.log("hello");

//the requires needed for this page
let $ = require('jquery');
    // template = require("../templates/cardLayout.hbs");     

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
    searchAPI(searchResult).then(function(movieRetrieved) {
        console.log("movieRetrieved2", movieRetrieved);
        });
}

// how we search the movie database and return results based on the user's search input
function searchAPI(searchResult) {
    console.log("searching the api for: ", searchResult);
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: `https://api.themoviedb.org/3/search/movie?api_key=56696d263700546dd8f63b84a5e3d534&query=${searchResult}`,//this url will grab the user's search result
            type:'GET',
             // data: JSON.parse(searchResult),
          //     dataType: 'json'
        }).done(function (searchResult) {
            console.log("movieRetrieved1", searchResult);
            resolve(searchResult);
        });
    });
}
// how we search the users list of movies
function searchFirebase() {
    //
}

function addToFirebase() {
    //create the movie object here so that you can attach the user uid to the movie
}

function addToUnwatched() {

}

function rateMovie() {

}

module.exports = {
    EnterSearch,
    loadSearchedMoviesToDOM,
    searchAPI
};