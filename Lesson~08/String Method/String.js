
/*All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced. */


//--------- slice() & substring() method ---------//

let x="Atanu , Mahin ,Tonmoy";
console.log(x.slice(8,13));
//parameter is negative//
console.log(x.slice(-21,-16));

console.log(x.substring(8,13));
/* SUNSTRING CAN'T COUNT NEGATIVE */
//console.log(x.substring(-21,-16));

//----------- repalce() method --------------//


let text = "Please visit Microsoft and Microsoft!";
console.log(text.replace('Microsoft','W3School'));
console.log(text);

//------------- toUpperCase() & toLowerCase() method --------------//

let test1="atAnu";
console.log(test1.toUpperCase());

let test2='ATANU';
console.log(test2.toLowerCase());

let test3="HELLO"+" "+"WORLD";
console.log(test3);

let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));

//-------------- trim() method -------------//

let test4="       Atanu Saha";
console.log(test4.trim());

//----------- charAt() ----------//

let test5="Hello";
console.log(test5.charAt(0));

//*******************String search method ******************************//

//------------------ String indexOf() method---------------------------//

let str="Please locate where 'locate' occurs!";
console.log(str.indexOf('locate'));

//------------------ String lastindexOf() method---------------------------//

let str1="Please locate where 'locate' occurs!";
console.log(str.lastIndexOf('locate'));

//****Both methods accept a second parameter as the starting position for the search: */

let str2="Please locate where 'locate' occurs!";
console.log(str2.indexOf('locate',15));

let str3 ="Please locate where 'locate' occurs!";
console.log(str3.lastIndexOf("locate", 15));

//------------------- String search() Method ----------------//
let str4="Please locate where 'locate' occurs!";
console.log(str4.search('locate'));

//-------------------- String match() Method -----------------------//

let str5 = "The rain in SPAIN stays mainly in the plain";
console.log(str5.match(/ain/g));

//------------------ String includes() Method -----------------//

let str6 = "Hello world, welcome to the universe.";
console.log(str6.includes('world')); // It's return true or false //

//------------------- String startsWith() & endsWith() Method -------------------//
let str7 = "Hello world, welcome to the universe.";
console.log(str7.startsWith('Hello'));
console.log(str7.endsWith('universe.'));


const obj=
{
  x:`Atanu`, 
  y:`Saha`,
  result: function()
  {
      let p= `Welcome ${x},${y} in our university`
      return p;
  }, 
};

function dio()
{
  return `Welcome ${x},${y} in our university`;
}