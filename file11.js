//undefine  (used only let & var not used const.)
let firstName;
console.log(typeof firstName);
firstName="Harshit";
console.log(typeof firstName,firstName);

//Null 

let myVariable=null;
console.log(myVariable);
myVariable="harshit";
console.log(myVariable,typeof myVariable);
console.log(typeof null);//Bug because it is return object.


//Big Int 

//let myNumber=123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);


let myNumber=BigInt(5467898765432356789765435678976543);
console.log(Number.MAX_SAFE_INTEGER);


let myNumber1= BigInt(12);
let samemyNumber= 123n;
console.log(myNumber1);
console.log(myNumber1+ samemyNumber);
