// we can areate object {} braces
//  it has some properties and methods 
// using '.' operator we can access properties of object

const rectangle = {
    length: 1 ,
    breadth : 2,

    draw: function(){
        console.log(`draw`);

    }


};

// we can make a function to create object so we dont have to repeateadly make object for for ex if we want to make 4 reactangle all different so we have to make 4 object so instead of create 4 objects we create a function which makes objects when called so we dont have to write full code repeateadly 

// we can make this in  two ways 
// 1. factory function 
// 2. constructor function 

// factory function -> chamel case notation 
function createRectangle(  ){

    let rectangle = {
        length: 1 ,
        breadth : 2,

        draw: function(){
            console.log(`draw`);

        }   



    }
    return rectangle;
}


// constructor function -> pascal notation  first letter of every letter is capital
// constructor function -> properties/methos  -> Inatialize/define 

function Rectangle(){
    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log("drawing");
    } 
}

// creating object using constructor function 
let rectangleobject = new Rectangle();

// new keyword creates a new object 
//  for this object we call a constructor function 
//  
// function is also a object so this Rectangle function also have a constructor function  
// we can see constructor of object using objectname.constructor();

// Functions are objects 
// for ex objects have some properties and some methods 
// we can access them using . operator 
rectangleobject.length; // we can access this object property 
//  can we also access functions property 
Rectangle.length;   // Rectangle is a function and but it also have properties and methods so functions are objects in javascript 

// for in loop 
// is used to access keys of the object 
// for(let key in rectangle){
        // keys are reflected through keys variable
        // values are reflected through rectangle[key]

//  }

console.log("printing key and values of a object using for in loop");

for(key in rectangleobject){
    console.log(key , rectangle[key]);// bracket is used to access key like '.' notation  key gives the name of the property and rectangle[key] gives the value inside it whether it was a property or a method
}


// for of loop 
// for of loop is used to access values of iterables for ex arrays and maps 


console.log("printing values of a arrays using for of loop");

    let array = [1,2,3,4,5];
    for(value of array){
        console.log(value);
    }

// Obejct cloning 

// using 
// 1. iteration
// 2. assign 
// 3. spread
// 

// how to do it using iteration  
// use did it using for-in loop 

let obj = {
    a : 1 ,
    b : 2 ,
    c : 3 ,
}


let obj2 = {};

for(key in obj ){
    obj2[key] = obj[key];
}

console.log("cloning object using for in ")
console.log(obj);
console.log(obj2);
// we clone the object so if we do any change in obj2 it will not reflect in obj  
// for eg 

console.log(" checking that it change in obj 2 doesn't reflect in obj ")
obj2.c = 4;
 console.log(obj);
 console.log(obj2);



// we can clone object using assign function 
let obj3 = Object.assign({}, obj2);

// here what happens we pass a empty object and a source object in which we copy the keys and values from source object to empty object 

console.log(" cloning using Object.assign function ");
console.log(obj3);

//  Spread operator ...

let obj9 = {    l : 2 ,
                m : 4 ,
                n : 45
           }

let obj10 = {...obj9};
console.log("using spread operator to copy object ");

console.log(obj9);
console.log(obj10);

console.log();
console.log();
console.log("next things ");
console.log();
console.log();
