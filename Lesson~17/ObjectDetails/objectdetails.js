
//Nested Objects//
const person=
{
  firstname : 'Atanu',
  lastname : 'Saha',
  age : 26,
  // nested object
  car:
  {
    car1 : "ford1",
    car2 : "ford2",
    car3 : "bmw"
  },
  
  university : 'aust',

 
};

document.getElementById("demo1").innerHTML= person["age"];
document.getElementById("demo2").innerHTML = person.car.car3;
document.getElementById("demo2").innerHTML = person['car']['car3'];

let x="";

const person1=
{
  firstname : 'Nusrat',
  lastname : 'Joy',
  age : 26,
  // nested object
  car :[
    {
        name : 'panda',
        model : ['bmw','Focus','Mustang'],
    },

    {
        name : 'joytiti',
        model : ["320", "X3", "X5"]

    },


  ],
  
  university : 'aust',

 
};


for(let i in person1.car)
{
   
     x += "<h2>"+ person1.car[i].name + "<h2>";
     for(let j in person1.car[i].model)
     {
        x+= person1.car[i].model[j] +"<br>"
        
     }
}

document.getElementById("demo3").innerHTML=x;
