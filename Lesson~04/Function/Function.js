function sleep(person,time)//-----> this is called parameter //
{
   //console.log(person + "" +" is sleeping from at "+ time);
   let x= person + "" +" is sleeping from at "+ time;
   return x;
  // console.log("Atanu");
  /* HERE x is local variable */

}

console.log(sleep('Atanu','10 am'));//---> this is called argument //
console.log(sleep('Faisal','12 am'));
console.log(sleep('Opu','9 am'));
