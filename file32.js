// Array Destructing

const myArray =["value1","value2","value3","value4"];

// let myvar1=myArray[0];
// let myvar2=myArray[0];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar1",myvar2);

let [myvar1,myvar2, ...myNewArray]=myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar1",myvar1);
console.log(myNewArray);