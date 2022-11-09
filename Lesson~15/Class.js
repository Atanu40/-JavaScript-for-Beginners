class Person{
   constructor(name,age)
   {
     this.name = name;
     this.age  = age; 
   }

  play(status){
    console.log(`${this.name} is playing ${status}`)
  }

}
// HERE PERSON1 IS A INSTANCE VARIABLE //
const person1 = new Person("Sakib",32);
const person2 = new Person("Sky",30);
console.log(person1.name);
console.log(person1.age);
person1.play("well");

console.log(person2.name);
console.log(person2.age);
person2.play("Well Done");