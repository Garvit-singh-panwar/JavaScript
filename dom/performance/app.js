
document.body.setAttribute('style','background-color: black; color:#90e58e;');

let txt = document.querySelector('#text');  

let next = document.querySelector("#next");

let lesson = [ // LESSON 1: INTRODUCTION & SPEED
    `<div style="font-family: sans-serif; border-left: 5px solid #00cec9; padding: 20px; background: #f0ffff; line-height: 1.6;">
        <h2 style="color: #008080; margin-top: 0;">🚀 Performance: Is Your Code Fast?</h2>
        <p>Today, we are learning how to make our websites run like a sports car! We will cover:</p>
        <ul style="list-style-type: none; padding: 0;">
            <li>⏱️ <b>Measurement:</b> How to check the speed of your code.</li>
            <li>⚙️ <b>Efficiency:</b> How to write "smart" code that doesn't waste energy.</li>
            <li>🔄 <b>The Event Loop:</b> How JavaScript handles many tasks at once.</li>
        </ul>
        <hr style="border: 0; border-top: 1px solid #00cec9; margin: 15px 0;">
        <h3>How do we measure speed?</h3>
        <p>We use a special tool called <code>performance.now()</code>. It gives us a very accurate timestamp (a "time-stamp" in milliseconds).</p>
        <p><b>The "Stopwatch" Logic:</b></p>
        <ol>
            <li>Start a timer (<code>t1</code>) before your code runs.</li>
            <li>Run your code.</li>
            <li>Stop the timer (<code>t2</code>) after the code finishes.</li>
            <li>Subtract them: <code>Total Time = t2 - t1</code>.</li>
        </ol>
        <p><i>The smaller the number, the faster your code!</i></p>
    </div>`,

    // LESSON 2: REFLOW AND REPAINT
    `<div style="font-family: sans-serif; border-left: 5px solid #d63031; padding: 20px; background: #fff5f5; line-height: 1.6;">
        <h2 style="color: #c0392b; margin-top: 0;">🎨 Reflow and Repaint</h2>
        <p>Updating a website is hard work for your computer. When you add something new, two things happen:</p>
        
        

        <div style="margin-bottom: 15px;">
            <b style="color: #e17055;">1. Reflow (The Math):</b> 
            The browser calculates exactly where the new element goes, how tall it is, and how wide it is. 
        </div>
        <div style="margin-bottom: 15px;">
            <b style="color: #0984e3;">2. Repaint (The Painting):</b> 
            Once the math is done, the browser "paints" the pixels on your screen so you can actually see it.
        </div>

        <p style="background: #fab1a0; padding: 10px; border-radius: 5px;">
            <b>The Slow Way:</b> Adding 100 paragraphs one by one. This causes 100 Reflows and 100 Repaints! It makes the computer very tired.
        </p>
        <p><b>The Fast Way:</b> Build everything "off-screen" first, then add it all at once. This causes only <b>1 Reflow and 1 Repaint</b>.</p>
    </div>`,

    // LESSON 3: DOCUMENT FRAGMENT
    `<div style="font-family: sans-serif; border-left: 5px solid #6c5ce7; padding: 20px; background: #f8f7ff; line-height: 1.6;">
        <h2 style="color: #4834d4; margin-top: 0;">🏗️ Document Fragment</h2>
        <p>Think of a <b>Document Fragment</b> as a "invisible tray." You can put all your elements on this tray first. Since it's invisible, it doesn't cause any Reflow or Repaint yet!</p>
        
        <p>Once your tray is full, you dump everything into the website at once. <b>One single update!</b></p>

        <h4 style="margin-bottom: 5px;">Example: Adding 100 Paragraphs</h4>
        <pre style="background: #2d3436; color: #a29bfe; padding: 15px; border-radius: 5px; overflow-x: auto;">
let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is paragraph #" + i;
    
    // Add to the "tray" (No reflow yet!)
    fragment.appendChild(para);
}

// Add the whole tray to the body (Only 1 Reflow here!)
document.body.appendChild(fragment);
        </pre>
        <p><i>This makes your code super fast and efficient!</i></p>
    </div>`,
    // LESSON 4: SINGLE THREADING
    `<div style="font-family: sans-serif; border-left: 5px solid #fdcb6e; padding: 20px; background: #fffcf0; line-height: 1.6;">
        <h2 style="color: #e67e22; margin-top: 0;">🧵 Lesson 4: JavaScript is Single-Threaded</h2>
        <p>Imagine a chef in a kitchen who only has <b>one hand</b>. He can only chop one vegetable at a time. This is how JavaScript works!</p>
        
        <ul>
            <li><b>Single-Threaded:</b> It can only execute one command at a time.</li>
            <li><b>Run-to-Completion:</b> Once it starts a task, it likes to finish it before jumping to the next line.</li>
        </ul>

        <p style="background: #ffeaa7; padding: 10px; border-radius: 5px;">
            <b>Wait!</b> If it only has one hand, how can it handle clicks and timers? 
            <br><i>Answer: It uses the Browser for help (which we will see in the next lesson).</i>
        </p>
    </div>`,

    // LESSON 5: THE EVENT LOOP
    `<div style="font-family: sans-serif; border-left: 5px solid #0984e3; padding: 20px; background: #f0f7ff; line-height: 1.6;">
        <h2 style="color: #2980b9; margin-top: 0;">🔄 Lesson 5: The Event Loop</h2>
        <p>To handle background tasks, JavaScript uses three main parts:</p>
        
        

        <ol>
            <li><b>The Call Stack:</b> The "To-Do" list. This is where JS keeps track of what it is currently doing.</li>
            <li><b>The Browser (Web APIs):</b> When you add an event (like a click), the Browser watches for it so JS doesn't have to.</li>
            <li><b>The Event Queue:</b> When you click, the task waits in this line.</li>
        </ol>

        <p><b>The Golden Rule:</b> A task in the "Queue" can <u>never</u> enter the "Stack" until the stack is completely empty. The Event Loop is the traffic guard that lets them in!</p>
    </div>`,

    // LESSON 6: SETTIMEOUT()
    `<div style="font-family: sans-serif; border-left: 5px solid #6c5ce7; padding: 20px; background: #f5f3ff; line-height: 1.6;">
        <h2 style="color: #4834d4; margin-top: 0;">⏱️ Lesson 6: setTimeout()</h2>
        <p><code>setTimeout</code> is an asynchronous function. It tells the browser: "Hey, wait for this much time, then put this task in the queue."</p>

        <pre style="background: #2d3436; color: #a29bfe; padding: 15px; border-radius: 5px; overflow-x: auto;">
setTimeout(function() {
    console.log("Hi! I waited.");
}, 3000); // 3000 milliseconds = 3 seconds
        </pre>

        <p><b>Important Note:</b> The time you give (like 3 seconds) is the <b>minimum</b> time. If the Call Stack is busy doing other math or logic, the function might have to wait longer in the queue until the stack is empty!</p>
    </div>`,
    // LESSON 7: THE "ABCD" CODE CHALLENGE
    `<div style="font-family: sans-serif; border-left: 5px solid #00b894; padding: 20px; background: #e6fffb; line-height: 1.6;">
        <h2 style="color: #006266; margin-top: 0;">🧪 Lesson 7: Let's Trace the Code</h2>
        <p>Let's see how the <b>Call Stack</b> and <b>Event Queue</b> work together in real life:</p>
        
        <pre style="background: #2d3436; color: #55efc4; padding: 15px; border-radius: 5px; overflow-x: auto;">
console.log('ABCD'); 

element.addEventListener('click', function() {
    console.log('1234');
});

console.log('XYZ');
        </pre>

        <p><b>What happens?</b></p>
        <ol>
            <li><code>ABCD</code> prints immediately (Stack).</li>
            <li>The <b>Browser</b> starts watching for a click. The code moves on.</li>
            <li><code>XYZ</code> prints immediately (Stack).</li>
            <li><b>If you click:</b> The function <code>1234</code> sits in the <b>Queue</b>. It only enters the Stack and prints 1234 <u>after</u> all other code is finished!</li>
        </ol>
    </div>`,

    // LESSON 8: SUMMARY & RESOURCES
    `<div style="font-family: sans-serif; border-left: 5px solid #ff7675; padding: 20px; background: #fff5f5; line-height: 1.6;">
        <h2 style="color: #d63031; margin-top: 0;">🏁 Final Summary</h2>
        <p>You’ve learned how to make JavaScript powerful and fast! Remember these three points:</p>
        
        

        <ul>
            <li><b>Performance:</b> Use <code>DocumentFragment</code> to avoid making the browser "repaint" the screen 100 times.</li>
            <li><b>Async Power:</b> JavaScript might have only one hand (Single Threaded), but the <b>Event Loop</b> allows it to handle many things at once.</li>
            <li><b>Keep Learning:</b> If you want to see the best video ever made about the Event Loop, search for <b>"Philip Roberts: What the heck is the event loop anyway?"</b> on YouTube.</li>
        </ul>
        <p style="text-align: center; font-weight: bold; color: #d63031;">🎉 You have completed the Performance & Async Lessons! 🎉</p>
    </div>`

 

];

txt.innerHTML =  lesson[0];
let i = 1;
next.addEventListener('click' , ()=>{

    txt.innerHTML = lesson[i];
    i++;
    i = i%lesson.length;
})