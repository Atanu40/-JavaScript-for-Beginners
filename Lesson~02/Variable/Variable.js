
// variable Redeclared//
/* var can be redeclared  */ 
var student1="TONMOY";
var student1="Atanu";

document.getElementById('demo').innerHTML=student1;

/* let can not be redeclared  
   but let can be reassign
*/
let teacher1="fotka sakib";
//let teacher1='module mam';
teacher1="Eity" // we can reassign//
document.getElementById('demo2').innerHTML=teacher1;

/* 
  Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

  ES6 introduced two important new JavaScript keywords: let and const.

  These two keywords provide Block Scope in JavaScript.

*/

var x = 10;

// This is called block scope //
{
var x = 2;
// Here x is 2
document.getElementById('demo3').innerHTML=x;
}
document.getElementById('demo4').innerHTML=x;


let y = 10;

// This is called block scope //
{
let y = 2;
// Here x is 2
document.getElementById('demo5').innerHTML=y;
}
document.getElementById('demo6').innerHTML=y;

/*var z = 2;    // Allowed
let z = 3;    // Not allowed

{
    let z = 2;    // Allowed
    let z = 3     // Not allowed
}
    
{
    let z = 2;    // Allowed
    var z = 3     // Not allowed
}*/

// Hoisting //

Atanu=5;
var Atanu;

/*Apon = 10;
let Apon; *///Using a let variable before it is declared will result in a ReferenceError:


/* 
 Variables defined with const cannot be Redeclared.

 Variables defined with const cannot be Reassigned.

 Variables defined with const have Block Scope.

*/

const pi=3.14;
//pi=3.15; // This will also give an error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Saa", "Volvo", "BMW"];
// You can change an element:
// cars[0] = "Toyota"; // ERROR

