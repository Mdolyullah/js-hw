// text-change
function textChange(){
document.getElementById('h2').innerHTML="Hello world";

}
// text-change
function textChange1(){
document.getElementById('h3').innerHTML="Hello world";

}
// text-change
function textChange2(){
document.getElementById('h4').innerHTML="Hello world";

}
// text-change
function textChange3(){
document.getElementById('h5').innerHTML="Hello world";

}
// text-change
function textChange4(){
document.getElementById('h6').innerHTML="Hello world";

}
// text-change
function textChange5(){
document.getElementById('h7').innerHTML="Hello world";

}
// text-change
function textChange6(){
document.getElementById('h8').innerHTML="Hello world";

}
// text-change
function textChange7(){
document.getElementById('h9').innerHTML="Hello world";

}
// text-change
function textChange8(){
document.getElementById('h10').innerHTML="Hello world";

}
// text-change
function textChange9(){
document.getElementById('h11').innerHTML="Hello world";

}
// show date
function showDate(){
	document.getElementById('d_h2').innerHTML =Date();
}

// bulb on/off 
function bulbOn(){
	document.getElementById('img').src ="images/bulbon.gif";
}
function bulbOff(){
	document.getElementById('img').src ="images/bulboff.gif";
}

// fontchange
function fontChange(){
	document.getElementById('f_h2').style.fontSize ="60px";
}
// show / hide
function show(){
	document.getElementById('c_h2').style.display ="show";
}
function hide(){
	document.getElementById('c_h2').style.display ="none";
}

// dwrite
function writeOutput(){
	document.write('Hellow world');
}
// walert
function wAlert(){
	window.alert("Hello world");
}
// clog
function cLog(){
	console.log("Hello world");
}
// variable
let number1, number2
number1 = 10;
number2 = 20;

number1 += number2;
function vOutput(){
	document.getElementById('v_h2').innerHTML=number1;
}
// variable assigned
let x;
x = 6;
function vOutput1(){
	document.getElementById("v_assigned").innerHTML = x;
}
// variable algebra
function vOutput2(){
	document.getElementById("v_algebra").innerHTML=(5 + 6) * 10;
}
// variable ass1
function vOutput3(){
	let x, y;
	x = 5;
	y = 6;
	document.getElementById("v_assign").innerHTML = x + y;
}
// variable ass2
function vOutput4(){
	document.getElementById("v_ex").innerHTML = 5 * 10;
}
// variable ass3
function vOutput5(){
	var x;
	x = 5;
	document.getElementById("v_value").innerHTML = x * 10;
}
// variable ass4
function vOutput6(){
	let x, y;
	x = 5 + 6;
	y = x * 10;
document.getElementById("v_key").innerHTML = y;
}
// variable ass5

// Change heading:
document.getElementById("myH").innerHTML = "JavaScript Comments";
// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";

// variable ass6
function vOutput7(){
	let carName = "Volvo";
document.getElementById("v_car").innerHTML = carName;
}

// variable ass7
function vOutput8(){
	let x = 5 + 2 + 3;
document.getElementById("v_add").innerHTML = x;
}
// variable ass8
function vOutput9(){
	let x = "John" + " " + "Doe";
document.getElementById("v_add1").innerHTML = x;
}
// variable ass9
function vOutput10(){
	let x = "5" + 2 + 3;
document.getElementById("v_add2").innerHTML = x;
}
// variable ass10
function vOutput11(){
	let $$$ = 2;
	let $myMoney = 5;
	document.getElementById("v_names").innerHTML = $$$ + $myMoney;
}
// variable ass11
function vOutput12(){
	let _x = 2;
	let _100 = 5;
	document.getElementById("v_under").innerHTML =  _x + _100;
}

// variable ass12

function vOutput13(){
	// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("v_array").innerHTML = cars;
}

// variable ass13
function vOutput14(){
	try {
  	const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Toyota", "Volvo", "Audi"];
}
	catch (err) {
  	document.getElementById("v_array1").innerHTML = err;
}
}

// variable ass14
function vOutput15(){
	let x = 10;
	x += 5;
document.getElementById("v_adda").innerHTML = "Value of x is: " + x;
}
// variable ass15
function vOutput16(){
	function myFunction(p1, p2) {
  	return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("v_fuction").innerHTML = result;
}
// variable ass16
function vOutput17(){
	// Create an object:
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Display some data from the object:
document.getElementById("v_obj").innerHTML =
person.firstName + " is " + person.age + " years old.";
}

// variable ass17
	function vOutput18(){
	let text = "John Doe";  // String written inside quotes
document.getElementById("v_stn").innerHTML = text;
}
// variable ass18
function vOutput19(){
	let carName1 = "Volvo XC60"; // Double quotes
	let carName2 = 'Volvo XC60'; // Single quotes

document.getElementById("v_string").innerHTML =
	carName1 + " " + carName2;
}
// variable ass19
	function vOutput20(){
	let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("v_len").innerHTML = text.length;
}
// variable ass20
function vOutput21(){
	let x = 3.14;
let y = 3;
document.getElementById("v_number").innerHTML = x + "<br>" + y;
}