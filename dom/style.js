// we can change in CSS using js 
// we have many property to change style 

// .style
// .CssText
// .setAttribute
// .className
// .classlist

let h3 = document.querySelector('h3');

h3.style.color = 'red';// here we can set only one property 

h3.style.cssText = ' color: green; background-color: yellow; font-size: 4em;'; // using CSS TEXT we can set multiple property and remove previous properties

h3.setAttribute("style","background-color: white; color:red; ");// it removes previous style and add new styles which are given in the parameters using set attribute we can also add className IdName and many more things 
h3.setAttribute('Id','firstElement'); //like this

h3.setAttribute('className', 'firstClass random o1class ');

let classes = h3.className; // it gives all the className of that element 
// we can do operations on them like split them , find the length and many more we can add more class in that using its splited array or also remove classes from it 

console.log(classes);

// but instead of className i will use classList because it will give me an object of classes with iterable class names 
// className provides a single string of classes 
// and class list provides a object of classes or array of classes 

// in which we can add class using add() method 
// we can remove class Name using remove method
// checks a element present or not using contains method 
// we also have toggle method 





