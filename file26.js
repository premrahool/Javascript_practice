// Array :- An array is a special variable, which can hold more than one value.
// Order collection of items.
//Any data type store.


// Normal Array 

let fruits=["apple","mango","grapes"];

console.log(fruits);
console.log(fruits[0]);

// number with array 

let number=[1,2,3,4,5];
console.log(number);

// mixed array 

let mixed=[1,2,3,4.5,"string",null,undefined];
console.log(mixed);

//Change fruits in Array by index.

let fruits1=["apple","mango","grapes"];

fruits1[1]="banana";
console.log(fruits1);


//Type check 

console.log(typeof fruits); //object return

console.log(Array.isArray(fruits)); //true return