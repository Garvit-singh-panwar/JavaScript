// Write a program that checks if a number (e.g., 29) is prime or not.
function checkPrime(num){
     if (num <= 1) {
        console.log(num + " is not a prime number");
        return;
    }
    for(let i = 2 ; i <=  Math.floor(num/2) ; i++ ){
   
        if(num % i === 0){
            console.log(num + " is not a prime number");
            return;
        }
    }
   console.log(num + " is a prime number");

}

checkPrime(29);
checkPrime(21);
checkPrime(-7);

