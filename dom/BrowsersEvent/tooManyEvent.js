let myDiv = document.createElement('div');


// function clkPara(event){
//      console.log("I have clicked on para");
// }

// 3.
// myDiv.addEventListener('click' , (event)=>{
//     console.log("clicked on para");
// }); // but there is one issue previously we can individually access every para but now what is happening any where i click on div this will execute 
// we lost the indivisuality of paragraph now we are accessing a whole div to execute event

// here the work of phases come 
// 4. 
// what issue we we facing we lost the individuality of paragraph 
// here we have the target property 
// target property returns the element where the event occurs
// so if i click on paragraph it will return 
myDiv.addEventListener('click' , (event)=>{
    console.log('para ' + event.target.textContent);
})
// i am accessing paragraph using div



for(let i = 0 ; i < 100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para "+ i ;

    // 1.
    // para.addEventListener('click' , (event)=>{
    //     console.log("I have clicked on para");
    // });
    // instead of creating same function for every event i can create only one function so the code become a little optmized

    // 2.
    // para.addEventListener('click' , clkPara); // we can make it more optmized by adding event listner to div not to every para
    // instead of creating eventlisten we can create 1 becuase we are doing the same thing 

    myDiv.appendChild(para);
  
}



document.body.appendChild(myDiv);
let butn = document.createElement('button');
butn.textContent = "remove";

butn.addEventListener('click', (event)=>{
    myDiv.remove();
    butn.remove();
});

document.body.appendChild(butn);