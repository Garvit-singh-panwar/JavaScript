import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import WindowSizeDisplay from './components/homework';

function App() {

  const [text,setText] =  useState(' ');
  const [name, setName] = useState('Garvit');
  // use Effect syntax:- useEffect(callback function, array of dependency); 

  //variation 1   it is called every when ui render 
  // useEffect(()=>{
  //     console.log("UI rendering done");

  // });

  // variation 2 => it called first time when Ui render  
  // by just passing an array in the other parameter
  // useEffect(()=>{
  //   console.log("UI rendering done");
  // },[]);   


  // variation 3 => it called first time render + whenever dependency changes
  // by just passing the dependency in the array in other parameter here we give text
  // so whenever we change our text is change
  // useEffect( () =>{
  //   console.log("change Observe");
  // }, [text]);

  
  // in this variation 3 we do some other thing 
  // we say that whenevery my name will change run the change observe
  // useEffect(()=>{
  //   console.log("change Observe");
  // },[name]);

  // variation 4 => to handle mounting of a component 
  // let say whenever we change dependency we add event listner 
  // lets say the dependency is text and we changed it 100 times so when we check that we see we put 100 listners on text 
  // is that good practice no
  // it will impact your performance very much 
  // so can i add a logic in which before adding new listner we remove the old one  
  // we do this using syntax let see
  useEffect(()=>{
    console.log("listner added");

    return ()=>{
      console.log("listner removed");
    }

  },[text]); // when  the first time UI render the listner added but the return function will not work 
  //  when we change dependency the return function which havent executed execute first is called then the add event listner is called 
  // so whenever we change dependency the return function of the previous call runs first then the other function

  // dependency means the function call is dependent on this then means whenever we change this thing the function will call 
  // it checks this item every time if this item is  little bit changed it call the function 
  

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
      <WindowSizeDisplay/>
    </div>
  );
}

export default App;
