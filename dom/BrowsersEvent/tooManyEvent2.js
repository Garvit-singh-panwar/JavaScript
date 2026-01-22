let article = document.createElement('article');

article.addEventListener('click' , (event)=>{
    if(event.target.nodeName === 'SPAN'){
       console.log(event.target.textContent); 
    }
})

for(let i = 0 ; i < 4 ; i++){

    let para = document.createElement('p');
    let span = document.createElement('span');
    para.textContent = "para";
    span.textContent = "span";

    para.appendChild(span);
    article.appendChild(para);

}



document.body.appendChild(article);



