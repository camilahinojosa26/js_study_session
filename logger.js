// module to logg messages - remote loogging

var URL = "https://seeyalateralligator.io/log"; // http request to this URL

function log (message) {
 console.log(message); // send a http request   // this variables and functions are scope to the module (private)
}

// we need to make it public to call it from the outside or in our main module, in this case app.js

//exports: {},everithing inside exports will be available outside this module

module.exports.log = log;

//to export the URL:

//module.exports.URL = URL;--- to keep it privete we dont do this part fow now.

// if we want to change the name when we call it to thye outside we do:
// module.exports.endPoint = URL;
