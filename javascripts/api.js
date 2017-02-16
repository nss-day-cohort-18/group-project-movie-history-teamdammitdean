"use strict";

let $ = require("jquery");

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
            console.log("movieRetrieved", searchResult);
            resolve(searchResult);
        });
    });
}

module.exports = {
	searchAPI
};