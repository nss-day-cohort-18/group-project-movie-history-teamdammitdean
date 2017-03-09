// "use strict";

// let $ = require('jquery');

// $.rating.init();

// function buildMovieObj(movieArrayResults) {
//   var movieCards = document.getElementById("outputEl");
//   var n = 1;
//   var newDiv = document.createElement("DIV");
//   newDiv.classList.add("row");
//     console.log("the movies will be seen now!!!");
//   for (var i = 0; i < movieArrayResults.length; i++){//looping through the length of the array, incrementing after every iteration
//     // console.log("will this be endless");
//     let moviePoster = `<div class="col m4 movieCard" id="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}"><br>
//                        <img class="center-align movieImg" width="200px" height="275px" alt="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}" src="https://image.tmdb.org/t/p/w500/${movieArrayResults[i].poster_path}">

//                        <p class="movieTitle">${movieArrayResults[i].original_title}</p>
//                        <span class="releaseDate">(${movieArrayResults[i].release_date})</span>
//                        <button class="movieAddBtn" id="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}">Add</button>
//                        <br>
//                        <button class="movieDeleteBtn" id="${movieArrayResults[i].original_title}${movieArrayResults[i].release_date}">Delete</button>
//                        <p>${movieArrayResults[i].overview}</p>
//                        </div>
//                        <div id="1" class="ratenode nomal"></div>
//                        <div id="2" class="ratenode nomal"></div>
//                        <div id="3" class="ratenode nomal"></div>
//                        <div id="4" class="ratenode nomal"></div>
//                        <div id="5" class="ratenode nomal"></div>`;//this variable builds the card up in one variable and then it will be appended to the outputEl
//     newDiv.innerHTML += moviePoster;
//     movieCards.appendChild(newDiv);
//     if ( i === (n *3) - 1){//after every third movie card, start a new row for the next three results 
//       newDiv = document.createElement("DIV");
//       newDiv.classList.add("row");
//       n++;
//     }                   
//     // $("#outputEl").append(moviePoster);//sends the end result of the cards to the section waiting to hold them on the html
//     console.log("this is after the movie should have been seen");
//   }  
// }

// module.exports = {buildMovieObj};