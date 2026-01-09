// functions 

console.log();
console.log();
console.log("functions ");
console.log();

run(); // we can call function before decalaration due to hoisting 
// hoisting is a process of moving function declaration on the top of file this is done automatically by js 

// function declaration 
function run(){
    console.log("running");

}

//Named function assignment

let walk = function walking(){
    console.log("walking ");
}

walk();// in this walking does not work 
// hoisting do not move function assignment to the top so we can not call walk on the top


// anonymous function assignment
let stand = function(){
    console.log("stand");
}

// here we did not name the function thats why we call this anonymous function assignment 
stand();

// function have a special object name arguments when we pass too many parameters to the function it goes into arguments 

function sum(a,b){
    console.log(arguments);
    return a+b; 
}

let args = sum(1,3);

args = sum(1,2,3,4,5,6);


//using arguments we can create a function where we can calculate the sum of values provided by user 

function infSum(){
    let total = 0;

    for(val of arguments){
        total += val;
    }

    return total;
}


console.log(infSum(1,2,3));
console.log(infSum(1,2));
console.log(infSum(1));

// we can also make this using rest operator '...'

// function sum(...args){

// console.log(args); //here we store all the elements an an args array 

// }  if we want to store multiple parameters in the form of array we can use rest operator


//Default parameters 
function intrest(p,r=6,y=9){
    return p*r*y/100;
}// here if we can not pass value of r and y it will run by taking default perameters 

console.log(intrest(100));

// Getter and Setter 

// the function that takes data are called getter 
// ex get function 
// the function that sets data is called setter 
// ex post function 

let user = {

    Firstname : '' ,
    LastName : '',
    // here this is getter
    get fullName(){
        return `${user.Firstname} ${user.LastName}`;
    } ,
    // here this is setter they are properties not a function 
    set fullName(value){
        let name = value.split(' ');
        this.Firstname = name[0];
        // this.LastName = name[1];
        if( name.length > 1 ){
            this.LastName = name[name.length-1]; 
        }
        else{
            this.LastName = '';
        }
    } 



};

// they are properties not a function so dont use brackets 
// is we use brackets it will throw an error
user.fullName = 'Rakesh';

console.log(user);
console.log(user.fullName);



// try and catch and finally 
// there is some error occured in try block catch handles it 
// try {
//     user.fullName = true;
// }
// catch(e){ // this e variable stores the error 
//     alert(e); // here we take the  action what we want to take 
// }



