"use strict";

console.log("Testing");

var myNameIs = "Joshua Williams"; 

function sayHello(myNameIs) { 
	console.log("Hello from " + myNameIs);
}
sayHello(myNameIs);

var myName = "Ryan";

function sayHello2() {
	var localName = "Bob"
	return localName;
}

myName = sayHello2()
console.log(myName);

var random = Math.floor((Math.random()*100)+1);

function isOdd(number) {
	
//ternary operator syntax goes (condition) ? then : else
var message = (number % 2 == 0) ? number  + " is even" : number + " is odd";
	console.log(message)
}

isOdd(random);










