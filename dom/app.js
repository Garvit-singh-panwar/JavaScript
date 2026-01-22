
// 3  imp topics 
// window  , dom , bom 

// 
//     WINDOW
// window is a global object we can access it any where it is created by browser it represents a browser window 
// dom bom and js core functionalities lies under this 
// it is a top level antity 
// here it provides a way to control the browsers window 
//     



// DOM (DOCUMENT OBJECT MODEL )
// Dom stands for document object model 
// all the html code converts into js object called document 
// and we call this full model a document object model 
// here webpage converted into object 


// 
// BOM (BROWSER OBJECT MODEL)
// it allows js to talk to browser about matters other than content of page 
// like contact , history , errors 
// here js communicate with browser but not about content 




// type document in console it gives your full html document 
// type document.body it gives the body of your html document 



// dom is a tree like structure a hararchy 


// in html document we have some  character --converted--> tags --converted--> tokens --converted--> nodes --converted--> dom 


// document.getElementById("Idname"); // return you the element with given id name 

// document.getElementByTagName("TagName");  returns you all the element with same tag Name 

// documnent.getElementByClassName("ClassName"); returns all the element with same tag name 



// document.querySelector("Selector");
// using "#IdName"  we can select id 
// using ".ClassName" we can select class 
// using "tagname" we can Select tag 
// using query we can select a single object the single element is the first element whether its a tag or a class 
// but if we use querySelectorAll we can access multiple object  of same class or sametagname 




// updating  Existing Content  

// we can update using some properties 
// 1. innerHtml
// 2. OuterHtml
// 3. textContent
// 4. innerText

// innerHtml  
// we can get or set html content using this property 
// means retrive or gets an element / all its decendents
// set an element html content
// Example





let data = document.querySelector('h1').innerHTML;
console.log(data);

// 
//  now we can see the html content inside h1 in our consol

// we can also do some changes using innerHtml 


document.querySelector('body').innerHTML += '<p> new added content using innerHTML </p>';

// OuterHTML

// using outerHTML we can get or set the html element itself the innerhtml gives us the what inside the element but outerHtml gives the element itself we can change the element 



// Inner text or text content 

// it gets or sets our textual content only  

let text = document.querySelector('body').innerText;

console.log(text);

text = document.querySelector('body').textContent;

console.log(text);

// what if we want to add or create new element 
// we can do this using CreateELement() method

// let newChild = document.createElement('span');

// here we created element but how can we add 

// we can add using .appendChild method in element

// let para = document.querySelector('.para');
// para.appendChild(newChild); //  here we add new element in a element whose class is para

// console.log(para); 

// how to create a new textNode 

let newChild = document.createElement('span'); // here we cereated the new element

newChild.textContent = 'this is new textNode '; // then we add text in it 

let para = document.querySelector('.para'); // then we add this in our html element 
para.appendChild(newChild); 
console.log(para); 

// the disadventage of append child method is it always adds element in the end          

// to add element in any position we use method insertAdjacentElement()
// it has to be called with 2 argurments 
// 1. position   // beforebegin  , afterbegin , beforeEnd , afterEnd 
// 2. HTML text/content to be inserted 



// position in html tags ex 

/* 
position beforeBegin
<p>
position AfterBegin
    <div>
    </div>
position BeforeEnd
</p>
position AfterEnd

*/

let content = document.querySelector('h1');
console.log(content);

let beforeBGN = document.createElement('h3');
beforeBGN.textContent = 'Position before begin';

content.insertAdjacentElement('beforeBegin',beforeBGN);


let afterBGN = document.createElement('p');
afterBGN.textContent = 'Position after begin';

content.insertAdjacentElement('afterBegin',afterBGN);


let beforeEND = document.createElement('p');
beforeEND.textContent = 'Position before end';

content.insertAdjacentElement('beforeend',beforeEND);


let AfterEND = document.createElement('h3');
AfterEND.textContent = 'Position after end';

content.insertAdjacentElement('afterend',AfterEND);

// we can also find parent using its child 
// by using property parent  syntax childelement.parentElement;

let child = document.querySelector('h3');

let parent = child.parentElement;
console.log(parent);

// we can also remove element using removeChild method 

// parent.removeChild(child);









