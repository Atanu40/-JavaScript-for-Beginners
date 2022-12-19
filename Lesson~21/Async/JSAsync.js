
function display(text) {
   document.getElementById("demo").innerHTML = text;
}


function myCalculator(x, y, callback) {
   let sum = x + y;
   callback(sum);

}


myCalculator(5, 5, display);



const array = [0, -2, 4, 6, 10, -7, 15, 18];

let result = calculate(array, (x) => x >= 0);

console.log(result);

function calculate(numbers, callback) //  (x) => x >= 0 is callback //
{
   const newArray = [];
   for (let i of numbers) {
      if (callback(i)) {
         newArray.push(i);

      }
   }
   return newArray;

}


function valuefind(value) {
   document.getElementById("demo2").innerHTML = value;
}

setTimeout(function () {
   valuefind("I LOVE MY COUNTRY")
}, 3000);

//------------------------ CALL BACK EXERCISE ---------------------------//
/*const status = true;
let marks=70;

function enroll(callback) {
   console.log("Course enrollment is in progress");
   setTimeout(function () {
      if (status) {
        callback(); 
      }
      else{
         console.log("Payment failed");
      }
   }, 2000);
}

function progress(callback)
{
   console.log("Course On Progress");

   setTimeout(function(){
       if(marks>=70)
       {
         callback();
       }
       else{
         console.log("You could not get enough marks to get certificate");
       }
   },2000);
}

function getCertificate()
{
   console.log("Preparing your certificate");
   setTimeout(function(){
        console.log("Congratulations! you got the certificate");
   },2000);
}



enroll(function()
{
   progress(getCertificate);
});

*/

/*enroll(progress);
progress(getCertificate);*/


//--------------------------- PROMISES --------------------------------------//

const status1 = true;

console.log("Task 1");

const promises = new Promise(function(resolve,reject){
   setTimeout(function(){

      if(status1)
      {
        resolve("Task 2");
     
      }
      else{
        reject("failed");
      }
     
     },2000);
})

promises
     .then(function(value){
         console.log(value);
     })
     .catch(function(err){
       console.log(err);
     })

console.log("Task3");

//------------------- Exercise -----------------------//

const status = true;
let marks=70;

function enroll() {
   console.log("Course enrollment is in progress");
   
   const promises1 = new Promise(function(resolve,reject){
      setTimeout(function() {
         if (status) {
            resolve(); 
         }
         else{
            reject("Payment failed");
         }
      }, 2000);

   })

   return promises1;
 
}

function progress()
{
   console.log("Course On Progress");

   const promises1 = new Promise(function(resolve,reject){
      setTimeout(function(){
         if(marks>=70)
         {
           resolve();
         }
         else{
           reject("You could not get enough marks to get certificate");
         }
      },2000);
   })

   return promises1;
  
}

function getCertificate()
{
   console.log("Preparing your certificate");

   const promises1 = new Promise(function(resolve,reject){
      setTimeout(function(){
         resolve("Congratulations! you got the certificate");
      },2000);
   })

   return promises1;
  
}

/*enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
      console.log(value);
    })
    .catch(function(err){
       console.log(err);
    })

*/

async function course()
{
   try{
      await enroll();
      await progress();
      const message = await getCertificate();
      console.log(message);
   }
   catch(err){
      console.log(err);
   }
  

}

course();

