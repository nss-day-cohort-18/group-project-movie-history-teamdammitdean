"use strict";

let firebase = require("./config.js");
let getKey = require("./fbGetter.js");

var fb = Object.keys(getKey);


console.log("firebase: ", fb);
