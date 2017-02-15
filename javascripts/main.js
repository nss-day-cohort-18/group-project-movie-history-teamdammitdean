"use strict";

let $ = require("jquery"),
  firebase = require("./config.js"),
  getKey = require("./dbGetter.js"),
  db = require("./dbInteraction.js"),
  template = require("../templates/cardLayout.hbs"),
  user = require("./user");

// user is automatically logged out when first visiting page
user.logOut();

$("#searchbar").on("keyup", db.EnterSearch);
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





