//trim()
//toUpperCase()
//toLowerCase()
//slice

let firstName="   harshit    ";

console.log(firstName.length);
firstName = firstName.trim();// "harshit"
console.log(firstName)
console.log(firstName.length);

//toUpperCase()
firstName=firstName.toUpperCase();
console.log(firstName);

//toLowerCase()

firstName=firstName.toLowerCase();
console.log(firstName);

//Slice
  //Slice are particular element search to index 
  //start index
  //end index 

  let newstring=firstName.slice(0,4); //hars
  console.log(newstring);


  