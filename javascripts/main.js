"use strict";
//materialize being initialized
$(document).ready(function() {
    Materialize.updateTextFields();
  });

let firebase = require("./config.js");
let getKey = require("./fbGetter.js");

var fb = Object.keys(getKey);


console.log("firebase: ", fb);
