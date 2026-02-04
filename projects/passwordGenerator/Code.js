const inputslider = document.querySelector("[data-lengthslider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const upperCaseCheck = document.querySelector("#Uppercase");
const lowerCaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#Number");
const symbolCheck = document.querySelector("#SpecialChar");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// set strength  circle to gray

let SpecialChar = `"!@#$%^&*(){}[]_-+=|:;"<,>.?/`;


// set password length
function handleSlider(){

    inputslider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

    // handle slider background 

    const min = parseInt(inputslider.min);
    const max = parseInt(inputslider.max);
    inputslider.style.backgroundSize = ((passwordLength - min)*100 / (max - min)) + "% 100%";
    
}

function setIndicator(color) {
    indicator.style.setProperty('--indicator-color', color);
}

function getRandomInteger(min,max){
   return Math.floor( Math.random() * (max - min) + min);
}


function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSpecialChar(){
     
    return SpecialChar.charAt(getRandomInteger(0,SpecialChar.length));
}


function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(upperCaseCheck.checked) hasUpper = true;
    if(lowerCaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym)  && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if(
        (hasLower || hasUpper) && 
        (hasNum || hasSym) && 
        passwordLength >= 6
    ){
        setIndicator('#ff0');
    } else{
        setIndicator("#f00");
    }


}


function shufflePassword(shufflepassword){
    // Fisher Yates Method

    for(let  i = shufflepassword.length - 1 ; i > 0 ; i--){
        const j = Math.floor(Math.random() * (i+1 ));
        const temp  = shufflepassword[i];
        shufflepassword[i] = shufflepassword[j];
        shufflepassword[j] = temp;
    }

    let str = "";
    shufflepassword.forEach((el)=>(str += el));
    return str;

}


// navigator.clipboard.writeText(text); // is use to copy text

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(error){
        copyMsg.innerText = "Failed";
    }

    // to make copy vala spam visible

    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },1000);

}


inputslider.addEventListener('input' ,(e)=>{
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener("click" , ()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

// all checkbox follow this to check how many checkbox are checked  
function handleCheckBoxChange(){

    checkCount = 0;


    // it checks how many checkbox are checked if any one of them are checked he increment the checkCount
    allCheckBox.forEach( (checkBox)=>{
        if(checkBox.checked){
            checkCount++;
        }
    } );

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }



}

// here we are adding event listner to everycheckbox

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change' , handleCheckBoxChange);
});

generateBtn.addEventListener('click' , ()=>{

    // if non of the chckbox are selected then no password will generate

    handleCheckBoxChange();

    if(checkCount <= 0) return;

    console.log("started")
    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // console.log("handle slider");
    // lets start the journey to find new password

    password = "";

    // lets put the stuff mentioned by checkboxes 


    let funArr = [];

    
    if(upperCaseCheck.checked){
        funArr.push(generateUpperCase);
    }

    if(lowerCaseCheck.checked){
        funArr.push(generateLowerCase);
    }

    if(numberCheck.checked){
        funArr.push(generateRandomNumber);
    }

    if(symbolCheck.checked){
        funArr.push(generateSpecialChar);
    }

    // compulsary addition

    // let say two checkbox are checked or three are checked so 
    // the length 3 password is compulsory

    
    // console.log("comp addition");

    for(let i = 0 ; i < funArr.length; i++){
        password += funArr[i]();
    }

    // remaining Addition
    
    // console.log("remaining add");

    for(let i = 0 ; i < passwordLength - funArr.length ; i++){
        let randomIndex = getRandomInteger(0,funArr.length);
        password += funArr[randomIndex]();

    }


    
    // console.log("shuffle");

    // shuffle the password
    password = shufflePassword(Array.from(password));

    
    // console.log("show ui");

    // show in UI
    passwordDisplay.value = password;

    // calculate strength

    
    // console.log("strength calc");

    calcStrength();

})
