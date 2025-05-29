// Count how many vowels are in the string "Hello World".

function countVowels(str){
    let vowelCount = 0 ;
    for(let i = 0 ; i < str.length ; i++){
        switch(str[i]){
           case 'a': case 'A':
            case 'e': case 'E':
            case 'i': case 'I':
            case 'o': case 'O':
            case 'u': case 'U':
                vowelCount++;
                break;
        }

    }

    console.log(vowelCount);
    // we can also return vowelcount
}

countVowels("helloWorld");