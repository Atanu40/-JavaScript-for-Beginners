//document.getElementById("demo").innerHTML=Boolean(10>9);
document.getElementById("demo").innerHTML=10>9;

// Everything With a "Value" is True AND//
//Everything Without a "Value" is False

document.getElementById("demo1").innerHTML=
"100 is " + Boolean(100) +"<br>" +
"-15 is "+ Boolean(-15) +"<br>"+
"0 is "+Boolean(0) +"<br>"+
"-0 is "+Boolean(0) 

//The Boolean value of NaN is false:

let x = 10 / "Hallo";
console.log(Boolean(x));

let m = true;
let n = new Boolean(true);
//When using the == operator, x and y are equal:
console.log(m==n);
//When using the === operator, x and y are not equal:
console.log(m===n);