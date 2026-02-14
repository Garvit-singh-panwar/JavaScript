// Arrays is a object / reference type constain collection of items of any data type in js 

let numbers = [1,3,5,7];

console.log();
console.log("Array object ");
console.log();

console.log(numbers );

//  how to add elements in array

// if you want to add element in the beginning we can use unshift 
numbers.unshift(0);
// if you want to add element in the end we can use push 
numbers.push(8);
// if we want to add element at any specific index we can use splice in which we have to give index , deletecount , value 
numbers.splice(4,0,6);

console.log(numbers);

//  if we want to check if a number exist in the array or not we use index of method
// it gives us the index of the value if not exist it gives us -1

// we can also use includes  it gives if the value is present or false if not present 
// for ex
if(numbers.indexOf(6) != -1){
    console.log("present");

}
else{
    console.log("not present");
}

console.log(numbers.includes(4));


// can we also use the same method to find if a value exist in array of object or not 

let courses = [

    {no:1, name : 'garvit'} ,
    {no:2 , name : 'farhan'}

];

console.log(courses);
console.log(courses.indexOf({no:1, name: 'garvit'}));

// this will not work because they both are different objects ,
// for this we use callback functions 
// what are call back function 
// function passed into another function which is invoked in side the outer function to complete some task 


let course = courses.find(function(course){
    return course.name == 'garvit';
});

console.log(course);

// object -> search -> find   -> syntax -> arrayName.find(    predicate function )
// predicate function gives us the condition that on which condition we have to find out something  we also call it callback function 
// it will return us the object


//using arrow function 
let num = courses.find( no => no.no == 1);

console.log(num);


// how to remove value from arrays 

// remove from end 

// ArrayName.pop() is used to remove last element

// remove from beginning 

// ArrayName.shift() is used to remove element form beginning 

// remove from middle

// ArrayName.splice(index , deletecount ) is used to delete element from the middle 


// Emptying an array 

// 1. 
// ArrayName = []  garbage collector will do the rest work 

// but it has problem  if we there is variable exist which also point to the same array  then the array is not deleted 

// 2.  ***
// ArrayName.length = 0;
// here the problem will be solved it removes the array from memory 

// 3. **
// ArrayName.Splice(0 , Arrayname.length);

// Combining and slicing an array 

// let combinedArray = ArrayName1.concat(ArrayName2)


// To get a array from between an array we use slice method 

// ArrayName.slice(startingIndex , EndingIndex ); it gives us the array from the startingIndex to EndingIndex-1 
// if we put starting index 2 and ending index 6 it gives us a new array which was from 2 to 5 index of original array 

 let marks = [10,20,30,40,50,60,70,80];

 let slicedArray = marks.slice(2,6);

//  if we just did ArrayName.slice() it makes a copy of ArrayName 

// we can also combine 2 array using  spread operator ...
// let combinedArray  = [...first , ...second];
// also make copy using it  let copy = ...first; 

marks.forEach(element => {
    console.log(element);
});

// to join every element of arrays we use join method 
// Syntax ArrayName.join('seprator');
// seprator can be a space or any thing 

let joined = marks.join(',');
console.log(joined);

// we can also break using split method 

let message = 'this is my first array';

let splited = message.split(' ');

console.log(splited);

joined = splited.join("_"); // we joined them and we need underscore between them 
console.log(joined);


 
let arr = [
    {id: 1 , name: 'Garvit'},
    {id: 2 , name: 'Aman'},
    {id: 3 , name: 'Farhan'}

]




// arr.sort((employee1 , employee2 ) => {
//      if(employee1.name > employee2.name){
//          return 1 ; Moves the first element after the second.
//        }
//      else if(employee1.name < employee2.name)
//        {
//          return -1 ; Moves the first element before the second.
//        }
//      else 
//        {
//          return 0; Keeps the order the same.
//        }
//       
//   } );


let arraynum = [70,4,50,6,89,12];

arraynum.sort((a,b)=> a-b);
// by default sort function converts array values into string 
// so when we add a predicate function in which we give two values 
// and when we subtract 1 value from 2 if it gives a positive value then a is bigger 
// so it first place b then a 
// if it is negative then b is bigger so
// it first place a then b 
// and if the value is 0 then they both are same 
// so it will do nothing

console.log(arraynum);


// if you want to filter array means 
// if you want only even values from array , odd values from array , only positive values from array 
// we use filter methods 
// Syntax
// arrayName.filter(predicate function )
//  we can take values based on logic written on predicate function 
// 

console.log(arraynum.filter(num => num%2!=0) ); // here we are taking all the odd values from array

// mapping Arrays 
// if we want maps each element of array with something else we use map function 
// means we can change values of array and generate new values based on predicaate function 

console.log(arraynum.map(value=> 'student_NO ' + value));

// how to use maps with objects 

let number2 = [-1,-2,5,9,8];
let filtered = number2.filter(num => num >= 0);

let items5 = filtered.map(val => {return {value: val}});

console.log(items5);

// we can also do function channing means 
// if we want to use multiple operation one by one 
// Means 1 operation then on its result we do 2nd operation one by one we use the channing 

// like in our previous we first filter array then does the map with its result  
// we can do it like 
// let items = numbwer2.filter(num => num>=0 ).map(val => {return {value: val}}); it work the same 
// instead of writing each operation seperate we write it in once  