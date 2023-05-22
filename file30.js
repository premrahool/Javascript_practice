// For loop in Array 

// length Proprties  are most important in Array.

let fruits=["apple","mango","grapes","banana"];

// print index

for(let i=0;i<=fruits.length-1;i++){
    console.log(i);
}

//print name 

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//print name with uppercase 

let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);