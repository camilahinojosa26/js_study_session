// notes from video https://www.youtube.com/watch?v=TlB_eWDSMt4
// credits go to programming with Mosh (youtube)

// function sayHello(name) {
//     console.log("Hello " + name);
// }

// // sayHello("Camila");

// ----- GLOBAL OBJECTS JS-------

console.log(); // is a global object we can access anywhere, in any file
setTimeout(); // use it to call a function after a delay
clearTimeout(); // 
setInterval(); // use it to repeatedly call a func after a given delay
clearInterval(); // to stop a function that is being called several times

// to avoid variable and functions in the global scope we need modularity (different building blocks)

// in node every file is a module. the variables and functions I define in that file are scope to that module
// they are NOT available outside that module

require() // what we use to load a module. the argument this funct takes is the name or path of the module we want to logg
// we us require("./logger.js") ./ to indicate the current folder and then we add the name of the module
// ("./subFoloder/logger.js")
// ("..logger.js") to use the relative path to the target module 

// it is better to store the result in a constant

const logger = require("./logger")

// if we put in the terminal jshint nameofthefile.js we'll get the type of mistake we are making (thisd did not work i need to find more about it)

// 31:55