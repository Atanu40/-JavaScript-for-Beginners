const car=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text="";

for(let i=0;i<car.length;i++)
{
    //console.log(car[i]);
    text+=car[i]+"<br>";
    document.getElementById("demo").innerHTML=text;
}

//ANOTHER APPROACH //

let j=0;
for(;j<car.length;)
{
    console.log(car[j]);

    j++;
}

//-------------------------- for in -------------------------------//

//The JavaScript for in statement loops through the properties of an Object://

const person=
{
    fname:'Atanu',
    lname:'saha',
    age:26
};

let text1="";

for(let x in person)
{
   text1+=person[x]+"<br>";
   document.getElementById("demo1").innerHTML=text1;
}

//------------------------- for of --------------------------------//
/* 
  The JavaScript for of statement loops through the values of an iterable object.

  It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

*/

const versityName = "Aust";
let text2="";

for(let y of versityName)
{
    text2 +=y;
    document.getElementById("demo2").innerHTML=text2;
}

let text3 = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) 
  { 
    break;
  }
  text3 += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text3;


