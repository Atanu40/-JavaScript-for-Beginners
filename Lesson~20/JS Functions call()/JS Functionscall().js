const person =
{
    fullName: function (city,age) {
       return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + age;
    }
};

const person1 =
{
    firstName: "Atanu",
    lastName: "Saha"
};

const person2 =
{
    firstName: "Anup",
    lastName: "Saha"
};

console.log(person.fullName.call(person1,'Narayanganj',26));
console.log(person.fullName.apply(person2,['Narayanganj',26]));