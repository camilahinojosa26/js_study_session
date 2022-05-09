//console.log(module);

//var logger = require("./logger.js");
// its better to safe it in a constant to not rename/ overwrite the value 

const logger = require("./logger.js")

logger = 1;

//console.log(logger);

// { log: [Function: log] } this is what we got an object that has a single method called log that is a function 
// to call this method:
logger.log("this is the message");