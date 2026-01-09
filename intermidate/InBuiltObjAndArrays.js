//  MAth object is used for mathmetical calculations 
// you can search on mdn  
// ex
Math.random();  // is used to generate random number 
Math.PI;  // gives us the value of pi 
Math.round(1.2); // it sound of your number like in this it make it 1 
Math.max(1,2); // gives you the max number given in the paramters 

// String object in javascript the string comes in both premitive and object type 

let name = "garvit"; // this is how we made premitive type of string 
let lastName = new String("panwar");  // this is how we create object type of string 


console.log(typeof name);
console.log(typeof lastName );

// we can treat premitive string like object 
// when we use . notation javascript internally treat it as  a string object  

console.log(name.includes("ga"));
console.log(name.length );
// console.log(name.indexof('v'));

//  Date and time object

// used to store date and time 

let date = new Date(); // we are creating a new date object 

let date2   = new Date('june 20 1998 7:15');

let date3 = new Date(1998 , 6 , 20 , 7); // year , month 0-11 , date , hour ;


console.log(date);
console.log(date2);
console.log(date3);

// we can use there setter function to set things  
// ex  date.setFullYear(year);  and many more see in mdn 


// when we use some function to set values we call them setter
// when we use some functions to recive some values we call them getter 




