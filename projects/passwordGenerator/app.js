//all  the code and logic given by me 


let rangeVal = document.querySelector("#range-value");

let strengthpower = document.querySelector("#strength_power");

let GeneratedPassword = document.querySelector("#password");

let slider = document.querySelector("#password-range");

GeneratedPassword.value = "PASSWORD";

const UperCase = document.querySelector("#uperCase");

const lowrCase = document.querySelector('#lowerCase');

const num = document.querySelector("#number");

const specialChar = document.querySelector("#specialC");

rangeVal.textContent = slider.value;
slider.addEventListener('click' , ()=>{
rangeVal.textContent = slider.value;
});


let generateBtn = document.querySelector("#generate");


generateBtn.addEventListener('click' , ()=>{


    let range = parseInt(rangeVal.textContent);

    let selectedOption = [];

    // unique number to identify which checkbox is checked 
    // the quailty of this four numbers is sum of them as one element two element or three or four element all are unique
    for(let i = 0 ; i < 4 ; i++ ){
        switch(i){
            case 0:
                if(UperCase.checked){
                    selectedOption.push(1);
                } 
                break;
            case 1:
                if(lowrCase.checked){
                    selectedOption.push(2);
                } 
                break;
            case 2:
                if(num.checked){
                    selectedOption.push(4);
                } 
                break;
            case 3:
                if(specialChar.checked){
                    selectedOption.push(8);
                } 
                break;
        }


    };

    let allowed = 0;

    // taking sum of the numbers so that we will find out who are checked
    for(let i = 0 ; i < selectedOption.length ; i++){
        allowed += selectedOption[i]; 
    }
    console.log(allowed)

    let i = 0 ;


    

    switch(allowed){
        case 0:{
            GeneratedPassword.value = "ERROR SELECT OPTIONS";

            strengthpower.classList.remove("white" , "green" , "yellow");
            strengthpower.classList.add("red");

            break;
        }
        // for all char 
        case 15:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = Math.floor(Math.random()*93) + 33;
                
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "red" , "yellow");
            strengthpower.classList.add("green");

            break;
        }
        
        // for all char except special characters
        case 7:{
            
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    // Range: 48 (0) to 122 (z)
                    newChar = Math.floor(Math.random() * 75) + 48; 
                } while (
                    (newChar > 57 && newChar < 65) || // The gap between 9 and A
                    (newChar > 90 && newChar < 97)    // The gap between Z and a
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);

                i++;
            }

            strengthpower.classList.remove("white" , "yellow" , "red");
            strengthpower.classList.add("green");

            break;
            
        } 
        // all char except numbers 
        case 11:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    // Range: 48 (0) to 122 (z)
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    newChar >= 48 && newChar <= 57 
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "yellow" , "red");
            strengthpower.classList.add("green");


            break;

        } 
        // all char except lowercase
        case 13:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    newChar >= 97 && newChar <= 122 
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }

            strengthpower.classList.remove("white" , "yellow" , "red");
            strengthpower.classList.add("green");

            break;
        }
        // all char except uppercase
        case 14:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    newChar >= 65 && newChar <= 90 
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "yellow" , "red");
            strengthpower.classList.add("green");

            break;
            
        }
        // lowercase or symbols 
        case 10:{            
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    // ! uppercase
                    newChar >= 65 && newChar <= 90 || // for !numbers
                    newChar >= 48 && newChar <= 57 
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");


            break;

        }
        // only number and lowercase
        case 6:{
                GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random() * 75) + 48;  
                } while (
                    // ! uppercase 
                    (newChar >= 65 && newChar <= 90 )
                    || // ! special chars
                    (newChar > 57 && newChar < 65) 
                    || 
                    (newChar > 90 && newChar < 97)    
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");

            break;
            
        }
        // uppercase or symbols 
        case 9:{            
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    // for !lowercase
                    newChar >= 97 && newChar <= 122  || // for !numbers
                    newChar >= 48 && newChar <= 57 
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");

            break;

        }
        // only number and uppercase
        case 5:{
                GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random() * 75) + 48;  
                } while (
                    // for ! lowercase
                    (newChar >= 97 && newChar <= 122)
                    || // for ! special chars
                    (newChar > 57 && newChar < 65) 
                    || 
                    (newChar > 90 && newChar < 97)    
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");

            break;
            
        }
        // for only num and special chars
        case 12:{
             GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random() * 75) + 48;  
                } while (
                    // for ! lowercase
                    (newChar >= 97 && newChar <= 122)
                    || // ! uppercase 
                    (newChar >= 65 && newChar <= 90 )    
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");

            break;

        }

        // only uppercase and lowercase
        case 3:{
            
                GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random() * 57) + 65;  
                } while ( 
                    (newChar > 90 && newChar < 97)    
                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "red");
            strengthpower.classList.add("yellow");

            break;

        }
        //only uppercase

        case 1:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = Math.floor(Math.random()*26) + 65;

                GeneratedPassword.value += String.fromCodePoint(newChar);
                i++;
            }

            strengthpower.classList.remove("white" , "green" , "yellow");
            strengthpower.classList.add("red");

            break;


        }

        // only lowercase

        case 2:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = Math.floor(Math.random()*26) + 97;

                GeneratedPassword.value += String.fromCodePoint(newChar);
                i++;
            
            }

            strengthpower.classList.remove("white" , "green" , "yellow");
            strengthpower.classList.add("red");

            break;
        }

        // only number

        case 4:{
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = Math.floor(Math.random()*9) + 48;

                GeneratedPassword.value += String.fromCodePoint(newChar);
                i++;
            }
            strengthpower.classList.remove("white" , "green" , "yellow");
            strengthpower.classList.add("red");

            break;
        }
        // only symbols
        case 8:{            
            GeneratedPassword.value = "";

            while(i != range){

                let newChar = 0;
                do {
                    newChar = Math.floor(Math.random()*93) + 33; 
                } while (
                    // ! uppercase
                    newChar >= 65 && newChar <= 90 || // for !numbers
                    newChar >= 48 && newChar <= 57 || //for ! lowercase
                    newChar >= 97 && newChar <= 122

                );
                GeneratedPassword.value += String.fromCodePoint(newChar);
                
                i++;
            }

            strengthpower.classList.remove("white" , "green" , "yellow");
            strengthpower.classList.add("red");

            break;

        }

    }
    

    console.log(selectedOption);
})
