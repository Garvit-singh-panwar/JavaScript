// Check if a string (e.g., "madam") is a palindrome.

function checkPalindrome(str){
    str = str.toLowerCase();
    let l = 0 ; 
    let r = str.length-1;

    while(l<r){
        if(str[l]!= str[r]){
            console.log(`${str} is not a palindrome`);
            return;
        }
        l++;
        r--;
    }

   console.log(str +" is a Palindrome");
}

checkPalindrome("DAD");