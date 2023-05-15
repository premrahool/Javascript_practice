//Array Push PoP

let fruits=["apple","mango","Grapes"];
console.log(fruits);

//Push :- It is add in array last element of index.

fruits.push("banana");
console.log(fruits);

//PoP :- It is removed in last elemwnt Array 
// and it is return to array.
fruits.pop();
console.log(fruits);

console.log(fruits.pop()); //Grapes.

// Using Variable in PoP

let poppedFruit=fruits.pop();
console.log(fruits);
console.log("popped fruits is",poppedFruit);


// unshift & Shift

//unshift:- It is add in first element.


let fruits1=["apple","mango","Grapes"];
fruits1.unshift("banana");
console.log(fruits1);


//shift:- Remove first elemnt  same as pop 

let removedFruit=fruits1.shift();
console.log(fruits1);
console.log("popped fruits is", removedFruit);
