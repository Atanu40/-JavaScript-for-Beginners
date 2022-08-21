const cars = ["Saab", "Volvo", "BMW"];
document.getElementById('demo').innerHTML = cars;

const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Mango";
document.getElementById('demo').innerHTML = fruits.length;
console.log(fruits[fruits.length - 1]);


const subject = ["Bangla", "English", "Math", "ICT"]
subject.push("Chemistry");
subject[subject.length] = "Physics";
console.log(subject)

//---------------------------------Looping Array Elements---------------------------------//

let text = "<ul>";
for (let i = 0; i < subject.length; i++) {
    // console.log(subject[i]);
    text += "<li>" + subject[i] + "</li>"
}
text += "</ul>";
document.getElementById('demo').innerHTML = text;

//---------------------------Use the Array.forEach() function-----------------------//

let text1 = "<ul>";
subject.forEach(main);
text1 += "</ul>";
function main(value) {
    text1 += "<li>" + value + "</li>"
}
document.getElementById('demo1').innerHTML = text1;
console.log(Array.isArray(subject));

//------------------------ Converting Arrays to Strings ---------------------//

const student = ["Arnob", "Badhon", "Ahanaf", "Samia", "Joti", "Vudai Shimanto", "Alim"];
let u = student.toString();

//---------------------- JavaScript Array pop() & push() -----------------------//

let pus = student.pop();
let po = student.push("Shawly");

//---------------------- JavaScript Array shift() & unshift() ------------------//

student.shift();
student.unshift("Mahin opu bhai", "Tonmoy Bhaia");

//------------------------ Merging (Concatenating) Arrays -------------------//

const neta = ["Atanu Bhaia"]
let mer = student.concat(neta);

const model = ["MISTI"];
let mer1 = student.concat(neta, model);

console.log(student.toString());
console.log(typeof (u));
console.log(pus);
console.log(po);
//console.log(student.length);
console.log(student);
console.log(mer);
console.log(mer1);

//----------------------- SORT() & reverse() METHOD-------------------//

const player = ["Messi", "Neymer", "Ronaldo", "Ronaldinho", "Zico", "Adriano"];

let sort = player.sort();
console.log(sort);

let rev = player.reverse();
console.log(rev);

//-------------------------Using  Sort() method by compare function --------------------//
// This compare function is used  for number type data //
const points = [45, 3, 35, 10, 87, 63, 75.56, 98, 410, 45];
points.sort(function (a, b) { return a - b }); // <--- This is use for sort (a-b)//
//points.sort(function(a,b){return b-a}); // <--- This is use for reverse_sort (b-a) //
//points.sort(function(a,b){return 0.5-Math.random()}); //<--This is use to get random sort//
let max = Math.max.apply(null, points); // <-- It's return the maximum value //
let min = Math.min.apply(null, points); // <-- It's return the minimum value //
console.log(points);
console.log(max);
console.log(min);

//-------------------------------- Sorting Object Arrays ----------------------//
const players = [

    {
        Name: "Messi",
        age: 32

    },

    {
        Name: "Neymer",
        age: 28,
    },

    {
        Name: "Ronaldo",
        age: 34
    },



];

players.sort(function (a, b) { return a.age - b.age });

for (let i = 0; i < players.length; i++) {
    console.log(players[i].age);
}

players.sort(function (a, b) { return a.Name.toLowerCase() - b.Name.toLowerCase() });

for (let i = 0; i < players.length; i++) {
    console.log(players[i].Name);
}

//------------------------ JavaScript Array Iteration ------------------------//

player.forEach(itaration);

function itaration(value, index, array) {
    console.log(value);
}

//----------------------- JavaScript Array map() ---------------------------//

const numbers1 = [45, 4, 9, 16, 25];
numbers1.map(mapitaration);

function mapitaration(value, index, array) {
    console.log(value * 2);
}

//-------------------------------JavaScript Array filter()---------------------//

let x = numbers1.filter(filteriteration);
console.log(x);

function filteriteration(value, index, array) {

    return value > 18;
}

//------------------------------JavaScript Array reduce() & reduceRight()----------------------//

let sum = numbers1.reduceRight(myFunction);
//let sum = numbers1.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
    return value;
}


/*---------------------------- JavaScript Array every()---------------//
        The every() method check if all array values pass a test.

        This example check if all array values are larger than 18:*/

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
console.log(allOver18);

function myFunction(value, index, array) {
    return value > 18;
}        

/*                   JavaScript Array some()
                The some() method check if some array values pass a test.

               This example check if some array values are larger than 18: */

let allOver = numbers.some(myFunction);
console.log(allOver);

/*---------------------------- JavaScript Array find() -----------------------------
The find() method returns the value of the first array element that passes a test function.

This example finds (returns the value of) the first element that is larger than 18: */

let first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}

//------------------------------ JavaScript Array findIndex() ------------------------

let findindex=numbers.findIndex(myFunction1);
console.log(findindex);

function myFunction1(value,index,array){
    return value > 18;
}

//console.log(Math.PI);