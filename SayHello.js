/**
 * SayHello.js
 */

function hello() {
	console.log("hello called");
	var name = document.getElementById('name').value;
	
	sname = 'Hello '+name + '!';
	
	var sayHelloDiv = document.getElementById('hellodiv');
	sayHelloDiv.innerHTML = sname;
}