const person=
{
  firstName : "Atanu",
  lastName : "Saha",

  display : function (){
     return this.firstName + " " + this.lastName;
  }

};

console.log(person.display());


//------------------------Explicit Function Binding---------------------//

const person1=
{
   display1 : function()
   {
    return this.firstName + " " + this.lastName;
   }
};

const person2=
{
  firstName : "Atanu",
  lastName : "Saha"
};

console.log(person1.display1.call(person2))