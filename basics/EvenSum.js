// Calculate the sum of even numbers between 1 and 100.
function EvenSum(num){
    let sum = 0;
  
    for(let i = 2 ; i <= num ; i+=2){
        sum+= i;
    }
    return sum;
}

console.log(EvenSum(100));

