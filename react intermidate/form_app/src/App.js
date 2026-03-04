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
    isVisible: true,
    mode: "online-mode",
    fevCar: "scorpio" ,
  });


  function changeHandler(event) {
    // Destructure name and value from the event target
    const { name, value , checked , type} = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]  :  type === "checkbox" ? checked : value  , // Uses the 'name' attribute of the input to update the key
    })); 
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the entire form ka data .............");
    console.log(formData);


  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input type='text' 
          placeholder='first name' 
          // onChange={changeFirstHandler}
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
          >
        </input>

        <br/>
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

        <br/>
        <br/>

        <input 
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}/>

        <label htmlFor='isVisible'> Am I visible ?</label>

        <br/>
        <br/>

        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="online-mode"
        id='online-mode'
        checked = {formData.mode === "online-mode"}
        />
        <label htmlFor='online-mode'> Online mode</label>
       
        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="offline-mode"
        id='offline-mode'
        checked = {formData.mode === "offline-mode"}
        />
        
        <label htmlFor='offline-mode'> Offline mode</label>

        <br/>
        <br/>

        <select 
        onChange={changeHandler}
        name='fevCar'
        id='fevCar'
        value={formData.fevCar}
        >
          <option value="scorpio">scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="defender">Defender</option>
          <option value="siyara">siyara</option>
        </select>
        <br/>
        <br/>
        <button type='submit'>Submit</button>

      </form>

      <pre>
        {`
        
        📝 React Form Handling: Simplified Notes
        1. The "All-in-One" Form State
          Instead of creating a separate useState for every single input, we store everything in one Object.
          The Setup:
          JavaScript
          const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: ""
          });

        2. The Change Handler (The "Update Engine")
          This single function handles every input field in your form.
          The Code:
          JavaScript
          function changeHandler(event) {
            // 1. Get the 'name' and 'value' from the input box
            const { name, value } = event.target;

            setFormData((prevFormData) => {
              return {
                ...prevFormData, // 2. Copy the existing data (Don't delete previous entries!)
                [name]: value    // 3. Update only the specific field being typed in
              };
            });
          }
          Why the [name] has square brackets?

          1.This is "Computed Property Name."

          2. It tells JavaScript: "Look at the string inside the name attribute of the input, and use that as the key."

          3. Daily Life Example: Imagine a post office with many mailboxes. Instead of having a different key for 
          every box, you have one master key (changeHandler) that looks at the label on the box (name) and puts the
          letter (value) in the correct slot.


        3. Controlled Components
          A Controlled Component is an input where React is the "Boss." The input doesn't just show what you type; it
          shows exactly what is in the State.
          The Syntax:
          JavaScript
          <input 
            name="firstName" 
            onChange={changeHandler} 
            value={formData.firstName} // This link makes it "Controlled"
          />
          The Logic Flow:

          1. Type "A" in the input.

          2. onChange triggers.

          3. changeHandler updates the State to "A".

          4. Component Re-renders.

          5. Input displays "A" because its value is tied to the State.

          Why do we do this?

          > Single Source of Truth: Your UI and your Data are always perfectly synced.

          > Easy Reset: If you want to clear the form, you just do setFormData({ firstName: "" }). Because the input 
          follows the state, it will empty itself instantly.


          💡 Summary Table
          Term	Simple Meaning
          ...prevData	"Keep everything I wrote in the other boxes."
          [name]	"Find the box that matches the input's name."
          value={state}	"The input box must always show what the State says."


        ------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------

      📝 Handling Checkboxes & Mixed Inputs
        When your form has text boxes and checkboxes, you need a way to tell React: "If it's a checkbox, look at the 
        tick mark; otherwise, look at the text."
        1. The Smarter Change Handler
        We use Destructuring to grab all the tools we need from the input field (event.target) and a Ternary Operator
        (the ? : shortcut) to decide what to save.
        The Code:

        2. Why do we need this? (Real-Life Example)
        Imagine you are filling out a physical form for a Gym Membership:

        Name Field: You write your name (Value).

        Terms & Conditions: You just put a tick mark in a box (Checked).

        In code, a checkbox doesn't have a "value" like "John"—it's either True (checked) or False (unchecked). This 
        logic ensures your state doesn't get confused between words and tick marks.

        3. The Controlled Checkbox
        For text inputs, we use value={...}. But for checkboxes, we use checked={...} to keep it synced with React.
        The Syntax:

        ✅ Important Corrections for your Notes:

        Destructuring Choice: You correctly added type and checked to the destructuring. This is best practice 
        because it makes the code very clean.

        The "Check" Logic: Your logic type === "checkbox" ? checked : value is perfect. It’s like a filter that 
        directs the right data to the right place.

        State Mapping: In your HTML/JSX, always ensure the name attribute (isVisible) matches the key in your 
        useState object exactly. If they don't match, the "master key" [name] won't find the right box to update.


        
        function changeHandler(event) {
          const { name, value , checked , type} = event.target;  // here we are deconstruct it 

          setFormData((prevData) => ({
            ...prevData,
            [name]  :  type === "checkbox" ? checked : value  , // here we are putting value in the name or key 
            // we are checking if there type is checkbox we set the value true and false (checked) if not then set
                there value
          })); 
        }

        ---------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---------------------------------

      📝 Handling Radio Buttons & Select Dropdowns
        1. Radio Buttons (The "Pick Only One" Choice)
        Radio buttons are unique because multiple inputs share the same name, but have different values.

        The Code:

        💡 Daily Life Example:
        Think of a Fan Regulator. You have levels 1, 2, and 3. You can only click one at a time. When you click "3",
        the "1" and "2" buttons automatically pop out. The checked={formData.mode === "Value"} part is what tells 
        React which button should look "pressed."

        2. Select Dropdowns (The "List" Choice)
        Dropdowns use the <select> tag. The name and value are placed on the select tag itself, not the individual 
        options.

        The Code:

        3. Why the same changeHandler still works
        Because we used const { name, value, type, checked } = event.target; earlier, it handles these perfectly:

        For Radio Buttons: The type is "radio" (not "checkbox"), so it uses value.

        For Dropdowns: The type is "select-one", so it also uses value.

        📊 Master Summary Table
        ✅ One Final Pro-Tip for your Notes:
        When using Radio buttons, always make sure the value in your HTML matches the string you expect in your 
        useState exactly. If you write value="online" in HTML but check for formData.mode === "Online" (capital O) in 
        your state, it won't work!

        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="online-mode"
        id='online-mode'
        checked = {formData.mode === "online-mode"}  // if our foam data is online it get checked
        />
        <label htmlFor='online-mode'> Online mode</label>
        
        <input 
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="offline-mode"
        id='offline-mode'
        checked = {formData.mode === "offline-mode"} // if our foam data is offline it get checked
        />
        
        <label htmlFor='offline-mode'> Offline mode</label>
          
        ----------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------

        
        Handling a form submission in React is like being a traffic controller: you have to stop the browser's default behavior first, then decide where the data should go (like an API or a database).
        Here is the simplest, most optimized way to handle it.

        🚀 The 3-Step Submission Process
        1. The onSubmit Event
        Instead of putting a click handler on a button, you put the onSubmit handler on the <form> tag itself. This ensures the form submits whether the user clicks the "Submit" button or just hits the Enter key.

        2. event.preventDefault()
        By default, HTML forms try to refresh the page when submitted. In React, we want to stay on the page, so this line of code is mandatory.

        3. Gathering the Data
        Since you are already using "Controlled Components" (state), your data is already sitting in your React state variables, ready to be sent.

        💻 Code Example: The Complete Flow
        JavaScript
        import { useState } from 'react';
        function MyForm() {
          const [name, setName] = useState("");
          const [role, setRole] = useState("Developer");

          const handleSubmit = (e) => {
            // Step 1: Stop the page from refreshing
            e.preventDefault();

            // Step 2: Create a data object (optional but clean)
            const formData = { name, role };

            // Step 3: Do something with it (e.g., Send to API)
            console.log("Form Submitted Successfully:", formData);
            alert('Hello formData.name, your role is formData.role');  
          };

          return (
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter Name"
                required 
              />

              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>

              <button type="submit">Submit Form</button>
            </form>
          );
        }

        💡 Pro Beginner Tips

        Button Type: Always ensure your submit button has type="submit". If it's just type="button", the form won't trigger the onSubmit event when the Enter key is pressed.
        Loading States: It’s a "best practice" to disable the submit button after it's clicked so the user doesn't accidentally send the data twice.

        JavaScript

        const [isSubmitting, setIsSubmitting] = useState(false);// ... inside handleSubmit ...
        setIsSubmitting(true);

        Validation: You can use the standard HTML required attribute on your inputs, or write a simple if (!name) return; check inside your handleSubmit function before sending the data.

        
        `}
      </pre>
    </div>
  );
}

export default App;
