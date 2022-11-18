function Person(fastname,lastname,age)
{
  this.fastname = fastname,
  this.lastname = lastname,
  this.age = age
}

const Atanu = new Person('Atanu','Saha',26);
console.log(Atanu.fastname);

// Constructor function for Person objects
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create 2 Person objects
  const myFather = new Person1("John", "Doe", 50, "blue");
  const myMother = new Person1("Sally", "Rally", 48, "green");
  
  // Add a name method to first object
  myFather.name = function() {
    return this.firstName + " " + this.lastName;
  };
  
  // Display full name
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.name(); 