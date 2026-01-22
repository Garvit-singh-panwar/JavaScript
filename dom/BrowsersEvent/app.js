let text = document.querySelector("#text");

text.textContent += "BROWSER EVENTS HERE BROUSER DO SOMETHING ON YOUR ACTIONS " ;


let btn = document.querySelector("#next");

const lessons = [

`1. WHAT ARE EVENTS  <br>
2. HOW TO RESPOND TO THESE EVENTS <br>
3. HOW DATA IS STORED IN THESE EVENTS <br>
4. HOW TO STOP EVENTS <br>
5. LIFE CYCLE OF AN EVENT` ,

`BROWSER EVENT IS LIKE BROWSER IS DOING SOME ANNOUNCEMENT <br>
1. LIKE DOM CONTENT LOODED <br>
2. SOMEBODY DOUBBLE CLICKED
 <br>
<br>

IF YOU WANT TO CHECK GO ON CONSOLE AND TYPE
monitorEvents(document); <br>
and do something on your webpage like move corser and click it will show all the events on the console `
,

` if i want to turn off all the event that occur we can use method unMonitorEvent(); </br>`
,

` let say we have a form and we click on submit button we have a attribute action
</br> which tells what action this button will perform </br>

note: - interface in javascript is like a blueprint like calsses in c++ or java

// EVENTTARGET </br>
// :- Interface implemented by object that can recive events & may have listners for them </br>
it has three method </br>
1. addEventListner</br>
2. removeEventListner()</br>
3. dispatchEvent() </br></br>

we already know that</br>
dom is a tree like structure a hararchy </br>
</br>
in html document we have some  character --converted--> tags --converted--> tokens --converted--> nodes --converted--> dom </br></br>

node inherit eventtarget</br>
jo bhi method or properties event target k pass hogi vo node k pass bhi hogi </br> </br>

Element inherit from node</br>
element have property of both node and eventtarget </br></br>

top level entity dadaji is eventtarget then node then element
`
,

`1. addEventListner() 
</br>
it renpond on event or it listens to the event
</br>
Syntax</br>
<eventTarget>.addEventListner( <event To listen for> , <function to run when event happen >);
</br>

we need three things to  to apply event listner 
</br>
1. eventTarget -> component on which we have to apply event on  ex document , paragraph , videoelement , image 
</br>
2. event type -> on taking what action the event run
</br> 
3.  function -> it is the thing what we have to do 
`
, 

`
for example </br>
<button id = "bgRed" > click to red and double click to black </button></br>
click on this button it will turn the background into red 
and 

`, 
`RemoveEventListner()</br>
 
to remove event listner we need a same object function which was passed in add event listner 
</br></br>
ex if we do it like this 
content.addEventListner('click' , ()=>{console.log("hi")});
</br> 
content.removeEventListner('click' , ()=>{
  console.log("hi")});
  </br>
then this remove will not work because the function in addEventListner and RemoveEventListner is not same 
they both are  different functions / object 
</br></br>

if we do it like this </br>
function hi(){</br>
console.log('hi');</br>
}</br></br>

content.addEventListner('click' , hi);</br>
content.removeEventListner('click',hi);</br>
then this will work because the function / object used in the add eventListner and remove EventListner is same </br>
`
,
`browsers sents the event </br></br>
Phases of an event 
<ol>
<li>Capturing phase</li>
<li>AtTarget</li>
<li>bubbling</li>
</ol>

lets say we add a listener in a paragraph  in capturing phase we find where our paragraph in our html document </br></br>

when we reach at paragraph this is our at target phase 
</br></br>

after finding out  we go back thats our bubbling phase
</br></br>
by default event listner execute in bubbling phase
</br></br>
let say i want  to change this and i want to  execute it in my capturing phase 
</br></br>
so what can i do is we can add a true in the third argument
addEventListner('click',function , true);
`,
`The event object :-
</br></br>
when an event occurs , addeventListner function got an event object and this object contain a lot of information about that event 
</br></br>
if you want to know what inside event object you can pass the argument in function of add event listner 
</br><like this:- 
</br>
content.addEventListner('click',(event)=>{console.log(event)});

`,
`The Defalt Action 
</br>
for ex anchor default action is open link </br>
if i want to prevent default bheaviour i can use the preventdefault method  
</br>for ex 
</br>

<a href="https://www.facebook.com">facebook</a>
</br>
`,
`AVOID MULTIPLE EVENTS:-

here what we are doing 
<br/>
we are accessing multiple element using parent element 
<br/>

first i add event listner to each and every paragraph and made individual function for every function
<br/>
but it takes a lot of memory 
<br/> 
to save this i made a single function and add it in the argument of listner function of each paragraph
<br/> so that it will become a little optmized 
<br/><br/>

then to make it more optmized i add eventlistner in parent object 
<br/> so instead of making 100 individaul event listner i made 1 
<br/> but i lost the individuality of paragraph any where i click on div it will run the function

<br/><br/>
to regain individuality i used event.target property it will return me the element where i click <br/><br/>
thats how insteat of making multiple event listner i made only one

remove every thing using remove button given below

`,
` now what if i want to add or do something on clicking a individual child element
<br/>
to do that we can use a property event.target.nodename  

<br/> every element have there individual node name we compare the node name if user clicked that 
<br/> using if( event.target.nodeName === "ElementNodeName"){<br/>
execute function which we want to execute
<br/>
} when a user do some action on that specific child element of that  parent element that function will execute

`
];



// 2. Create a counter to track the current index
let currentIndex = 0;

btn.addEventListener('click', () => {
  // 3. Update the text content
  text.innerHTML = lessons[currentIndex];

  // 4. Increment the counter
  currentIndex++;
  

  let red = document.querySelector('#bgRed');

  if(red){
    red.addEventListener('click' , ()=>{
      document.body.style.backgroundColor = 'red';
    })
    red.addEventListener("dblclick", ()=>{
      document.body.style.backgroundColor = 'black';
    })
  }


  let fb = document.querySelector('a');
  if(fb){
      fb.addEventListener('click',function(evnt){
        evnt.preventDefault();
        console.log('maza aaya accha laga');
      });
  }

  if (currentIndex === 11) {
        let script = document.createElement('script');
        script.src = "./tooManyEvent.js";
        text.appendChild(script);
  }
  if (currentIndex === 12) {
        let script = document.createElement('script');
        script.src = "./tooManyEvent2.js";
        text.appendChild(script);
  }

  // 5. Reset to 0 if we reach the end of the list (Optional)
  if (currentIndex >= lessons.length) {
    currentIndex = 0; 
  }
});



 
 


