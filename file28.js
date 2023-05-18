// Primitive vs reference data types.

// Primitive data type

let num1=6;
let num2=num1;
console.log("value is num1 is",num1);
console.log("value is num1 is",num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is",num1);
console.log("value is num1 is",num2);


//Reference data type 

//array

let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after Pushing element to array 1");
console.log("array1",array1);
console.log("array2",array2);