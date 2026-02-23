

const Notes = ()=>{

    return(
        <pre>
            {`
            1. The Naming Convention
                React uses its own "Synthetic Events" system. This means standard HTML attributes are renamed to follow JavaScript's naming style:
                
                                Standard HTML || React Version
                                onclick       || onClick
                                ondblclick    || onDoubleClick
                                onchangeon    || Change
                                onmouseenter  || onMouseEnter

             2. Passing vs. Calling
                When you use these props, you are passing a reference to a function. You aren't "calling" the function immediately.

                The Correct Syntax:

                JavaScript
                const ProductDate = (props) => {
                    const clickHandler = () => {
                        console.log("Clicked!");
                    };

                    return (
                        <Card className='product-date' onClick={clickHandler}>
                            {/* ... rest of your code */}
                        </Card>
                    );
                };
                The Common Mistake:
                If you add parentheses—onClick={clickHandler()}—the function will run immediately when the component renders, rather than waiting for the user to click.


                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx

                React renders dom single time 

                what we did 
                const ProductItem = (props)=>{

                    let title = props.title;
                        function clickHandler(){
                            title = "popcorn";
                            console.log("Button Clicked");
                        }
                        return(
                            <Card className='product-item'>
                                <ProductDate date={props.date}/>
                                <div className="product-item_description" >
                                    <h2>{title}</h2>
                                </div>
                                <button onClick={clickHandler}>Add to cart</button>
                            </Card>   
                        )
                }

                here we are updating title on click event but in Ui it is still showing old title why 

                1. The "Static UI" Problem
                    When you use a regular variable (like let title = "Apple"), changing its value doesn't update the screen.

                    Why? React only runs your component function once when it first loads.

                    Result: Even if the variable change in the background, React has no reason to "re-draw" the UI. The UI remains static (frozen).

                2. What is State?
                    State is a special type of variable that React "watches."

                    When a State value changes, it tells React: "Hey! Something changed. Re-render this component immediately!"

                    This is how we make our applications interactive and dynamic.

                3. What is a React Hook?
                    Hooks are Utility Functions provided by React. They allow us to "hook into" React features (like state or lifecycle).

                    Naming Rule: All hooks start with the word use (e.g., useState, useEffect).

                    Importing: You must import them from the React library before using them.

                    JavaScript
                    import React, { useState } from 'react';
                4. How useState Works
                    useState always returns an array with exactly two elements:

                    The current state value: The snapshot of the data right now.

                    The updater function: A function used to change the value and trigger the re-render.

                    Example Breakdown:
                    JavaScript
                    const [title, setTitle] = useState(props.title);
                    title: The variable you use in your JSX (e.g., <h2>{title}</h2>).

                    setTitle: The function you call when you want to change the title (e.g., setTitle("Popcorn")).

                    props.title: The "Initial Value" (only used the very first time the component runs).

                5. The Update Cycle (Re-rendering)
                    When you call the updater function (setTitle):

                    React stores the new value.

                    React executes (re-runs) your component function again.

                    Your code sees the new value in the title variable.

                    React updates the DOM to match the new value.

                Summary Checklist
                [x] Import: import { useState } from 'react';

                [x] Initialize: const [value, setValue] = useState(initialValue);

                [x] Update: Use setValue(newValue); to change the UI.

                [x] Rule: Never update state variables directly (e.g., title = "new" is a no-go!).


            -------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---------------------------------------------

            import { useState } from "react";


            const ProductItem = (props)=>{



            const [title,setTItle] = useState(props.title);

                function clickHandler(){
                    setTItle("popcorn")
                    console.log("Button Clicked");
                }
                return(
                    <Card className='product-item'>
                        <ProductDate date={props.date}/>
                        <div className="product-item_description" >
                            <h2>{title}</h2>
                        </div>
                        <button onClick={clickHandler}>Add to cart</button>
                    </Card>   
                )
            }
            export default ProductItem;

            so why whose button is clicked that one is changing not the others

            because they all are saperate components they all are saperate entity the ones whose button is clicked the event handler of that button is envoked thats why the others does not change

            lets understand that more

            Component Independence
            1. Components are Separate Entities
            When you use a component multiple times (like <ProductItem />), React doesn't just copy-paste the code. It creates a brand new instance for every single one.

            Even if they look the same, they are independent.

            Think of it like a class of students: They all have the same "Identity Card" (the component code), but they are different people. If one student raises their hand, the others don't have to!

            2. Why Only One Changes
            When you click a button in one ProductItem, only that specific item changes.

            Isolated State: Each component instance gets its own private useState "box."

            The Trigger: When you click the button, you are only calling the setTitle function belonging to that specific instance.

            The Re-render: React only re-runs the function for the component that asked for a change. It leaves the other "entities" alone to save performance.

---------------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--------------------------------------

            const [title, setTitle] = useState(props.title); in this title is a const so how would a const value is changed 


            in standard JavaScript, a const cannot be reassigned. If you tried to do title = "New Name", you would get an error.
            Here is the secret to why const works in React:

            1. The "Vanishing" Function
            Every time a state changes, React re-runs your entire component function from top to bottom.

            The First Run: React runs ProductItem(). It creates a const title with the value "Soap". The function finishes and the variables inside it disappear (garbage collected).

            The Update: You call setTitle("Popcorn"). React realizes it needs to update the screen.

            The Second Run: React runs ProductItem() all over again like it’s the first time.

            The New Const: Inside this new execution, a new const title is created. This time, useState hands it the value "Popcorn".

            Summary: You aren't changing the old const. You are creating a brand new const inside a brand new function execution.

            2. Simplified Notes for your Notebook
            Title: Why do we use const with useState?

            Rule of Const: A const variable cannot be changed during a single execution of a function.

            The React Trick: React does not "update" the variable. Instead, it re-executes the whole function.

            Fresh Start: Every time the component re-renders, the function runs again, and a new const is created with the updated value.

            Safety: We use const because we want to make sure we don't accidentally change the value manually (like title = "xyz"). We should only ever change it using the setTitle function.


            -----------------------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------

            if i call setTitle('Popcorn') is that envoke instantly or takes some time

            If you try to console.log(title) immediately after calling setTitle('Popcorn'), you will see the old value, not the new one. Here is why and how it works.

            1. State Updates are "Scheduled" (Async)
            When you call setTitle, React doesn't stop everything to update the variable right that second. Instead, it schedules an update.

            Think of it like leaving a message on a voicemail: You've sent the request, but the person (React) hasn't acted on it yet because they are busy finishing the current task.

            2. The "Batching" Concept
            React waits for all the code inside your event handler (like your clickHandler) to finish running before it starts the re-render. This is called Batching.

            Why does React do this?

            Efficiency: Imagine if you updated five different states in one function. If React re-rendered for every single line, the app would become very slow.

            The "One Render" Rule: React waits until the "script" is done, then performs one single re-render with all the new data.

            3. Your New Notes (Simplified)
            Topic: Is State Update Instant?

            No, it is Asynchronous: Calling setTitle doesn't change the value immediately. It tells React: "Please update this when you have a chance."

            Code Completion: React will finish running every line of code inside your function first.

            The Render Trigger: Only after the function is completely finished does React "wake up" the re-render process to update the screen.

            Why? To save performance. It is faster to update the screen once than to update it 5 times in a row.

            4. A Real-Life Example
            Imagine you are at a restaurant.

            You (the clickHandler) tell the waiter (React), "I want Popcorn."

            You then immediately say, "I want Soda."

            The waiter doesn't run to the kitchen twice. He waits for you to finish talking, then goes to the kitchen once to get both items.

            The "Kitchen" is the browser DOM. React waits for your "order" to be finished before cooking.

--------------------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx----------------------------------------------

           "Lifting State Up" or "Child-to-Parent Communication." You realized that data in React is like a one-way street (top to bottom)
           
           but by passing a function as a prop, we create a "tunnel" for data to travel back up

            1. The Real-Life Example: The Walkie-Talkie 📻

            Imagine a Parent and a Child playing in a park.

            The Problem: The Parent is sitting on a bench (App Component) and the Child is playing far away in the sandpit (ProductForm). The Parent needs to know when the Child finds a "treasure" (New Data).

            The Solution: Before the Child leaves, the Parent gives them a Walkie-Talkie (this is the Function passed via props).

            The Action: When the Child finds a cool rock, they press the button and speak into the Walkie-Talkie (props.newProduct(data)).
            The Result: The Parent hears it on their end and updates their map.

            The Child didn't "go" to the Parent; they just used the tool the Parent gave them to send information back.



            2. Simplified Notes

            Topic: Lifting State Up (Passing Data Upwards)

            1. Standard Flow: Data usually goes Down (Parent  Child) using Props.
            2. Reverse Flow: To send data Up (Child  Parent), we pass a Function as a prop.
            3. The Trigger: The Child component "calls" that function and passes its local data as an argument (the stuff inside the parentheses).
            4. The Execution: Since the function was originally defined in the Parent, the Parent's code runs with the data sent by the Child.


                `


}
        </pre>
    )

}


export default Notes;