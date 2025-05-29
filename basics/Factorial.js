// Write code to find the factorial of a number using a loop.

function factorial( n){

    let fact = 1;
    if(n===0 || n === 1){
        return 1;
    }

    for(let i = 2 ; i <= n ; i++ ){
        fact *= i;

    }

    return fact;

}

console.log(factorial(5)); // Output: 120