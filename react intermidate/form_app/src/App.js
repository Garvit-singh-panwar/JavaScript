import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {  
  
  // const [firstName , setFirstName] = useState("");
  // const [lastName , setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);

  // function changeFirstHandler( event ){
  //   //event.target.value gives the value of the elemenet 
  //   //event.target gives us the element 
  //   setFirstName(event.target.value);
  // }

  // function changeLastHandler( event ){
  //   //event.target.value gives the value of the elemenet 
  //   //event.target gives us the element  
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "" ,
    comments: "",
  });

  function changeHandler(event) {
    // Destructure name and value from the event target
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Uses the 'name' attribute of the input to update the key
    })); 
  }

  return (
    <div className="App">
      <form>

        <input type='text' 
          placeholder='first name' 
          // onChange={changeFirstHandler}
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
          >
        </input>

        <br/>


        <input type='text' 
          placeholder='last name' 
          // onChange={changeLastHandler}
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
           >
        </input>

        <br/>
        <br/>

        <input type="email"
          placeholder='Enter your email here '
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br/>
        <br/>
        <textarea 
        placeholder='enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />

      </form>

      <pre>
        {`
        
          // we can make  foam data state in which we store all the data of foam and save the data using use state 
          const [foamData , setFoamData] = useState({
            firstName: "",
            lastName: "",
            (and many more data)
          });

          function changeHandler(){
          // use state function to store foam data
              setFoamData( prevFoamData =>{
                              // here we are returning all the data we previously stored in foam data and the data we currently entering 

                              return (
                              ...prevfoamData,
                              [event.target.name] = event.target.value
                              ) 
                              
                              //event.target gives the tag and .name gies us the tag name and .value gives us the value of that tag
                              // tag name must be same as the object key  name of use state 
                              // the key whose value you want to change should be in square brackets [event.target.name] 
                          }
              );
          }


          <input name ="firstName" type="text" onChange={changeHandler} placeholder="enter your first name" />   
          <input name ="lastName" type="text" onChange={changeHandler} placeholder="enter your last name" />

          // when we enter data on this input field the onChange function triggers and call the changeHandler function
          // in which we set our foam data using (setFoamData) and saves the data of every input 
          // name attribute must be same as object keys which we store in useState so when we pass prev data it just change the data of the key whose data we are changing not all the prev data 
          // thats why we first pass the prev data then the new key data in the foamData
          
          
          input -> entervalue -> trigger onchange -> trigger changehandler -> trigger setFoamData -> save prevstate -> change keydata 

          let say in input first name we are entering

          firstname -> enterdata "G" -> trigger onChange -> trigger changeHandler -> trigger setFOamData -> returing prev state and new changed data 
          
          prevstate -> {
            firstName = "" ,
            lastName = ""
          }  -> new state => {
                firstName : "G" ,
                lastName : ""  // this comes from prevstate
            }

            its like we are doing prevState.firstName = "G"; 
          



            ------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx-----------------------------------

Controled Components 
                :-  maintain state inside component 

               < input name="firstName" onClick={clickHandler} placeholder="enter your first name" value ="foamData.firstName" >  
               // here we are storing foamdata.firstName value in firstName thats how we maintain state inside component  
              why we does that because when we type any thing in our input it invokes our state function which re renders the whole UI thats why we are storing the state value in the input  

              // why we does this you will know that later



        `}
      </pre>
    </div>
  );
}

export default App;
