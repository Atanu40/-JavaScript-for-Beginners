let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let l = JSON.parse(text);

console.log(l);
console.log(l.employees[0].firstName);
console.log(text);