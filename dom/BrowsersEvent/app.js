let text = document.querySelector("#text");

text.textContent += "BROWSER EVENTS HERE BROUSER DO SOMETHING ON YOUR ACTIONS " ;


let btn = document.querySelector("#next");

const lessons = [

// LESSON 1: INTRODUCTION TO EVENTS
    `<div style="font-family: sans-serif; border-left: 5px solid #00cec9; padding: 20px; background: #f0ffff; line-height: 1.6;">
        <h2 style="color: #008080; margin-top: 0;">🎉 Lesson 1: What are Events?</h2>
        <p>Imagine your browser is a town crier. Whenever something happens, it shouts an announcement! These announcements are called <b>Events</b>.</p>
        <p>In this module, we will learn:</p>
        <ul style="list-style-type: none; padding: 0;">
            <li>👂 <b>What</b> events are (The announcements).</li>
            <li>⚡ <b>How</b> to respond when they happen.</li>
            <li>📦 <b>Where</b> the event data is stored.</li>
            <li>🛑 <b>How</b> to stop an event from happening.</li>
        </ul>
    </div>`,

    // LESSON 2: TYPES OF ANNOUNCEMENTS
    `<div style="font-family: sans-serif; border-left: 5px solid #fdcb6e; padding: 20px; background: #fffcf0; line-height: 1.6;">
        <h2 style="color: #e67e22; margin-top: 0;">📢 Lesson 2: Browser Announcements</h2>
        <p>Events happen all the time. Here are some common ones:</p>
        <ul>
            <li><b>Click:</b> Someone clicked a button.</li>
            <li><b>Double Click:</b> Someone clicked twice quickly!</li>
            <li><b>DOMContentLoaded:</b> The website has finished loading its "skeleton."</li>
        </ul>
        <div style="background: #ffeaa7; padding: 10px; border-radius: 5px; margin-top: 10px;">
            <p><b>🕵️ Spy on your Browser:</b></p>
            <p>Open your <b>Console</b> (F12) and type:</p>
            <code>monitorEvents(document);</code>
            <p>Now, move your mouse or click anywhere. You will see every single announcement the browser is making!</p>
        </div>
    </div>`,

    // LESSON 3: TURNING OFF THE SPY
    `<div style="font-family: sans-serif; border-left: 5px solid #d63031; padding: 20px; background: #fff5f5; line-height: 1.6;">
        <h2 style="color: #c0392b; margin-top: 0;">🔕 Lesson 3: Stopping the Noise</h2>
        <p>If you used <code>monitorEvents</code>, your console is probably very crowded right now! To tell the browser to stop spying and stay quiet, use this command:</p>
        
        <pre style="background: #2d3436; color: #ff7675; padding: 15px; border-radius: 5px; overflow-x: auto;">
unmonitorEvents(document);
        </pre>
        
        <p>This "un-monitors" the target and stops the flood of messages in your console.</p>
    </div>`,// LESSON 4: THE FAMILY TREE (EVENT TARGET)
    `<div style="font-family: sans-serif; border-left: 5px solid #6c5ce7; padding: 20px; background: #f8f7ff; line-height: 1.6;">
        <h2 style="color: #4834d4; margin-top: 0;">🌳 Lesson 4: The Family Tree (Inheritance)</h2>
        <p>In JavaScript, elements follow a "Family Tree" hierarchy. Think of it like this:</p>
        
        

        <ul>
            <li><b>EventTarget (The Grandfather):</b> He is the top boss. He knows how to listen to events.</li>
            <li><b>Node (The Father):</b> He inherits everything from the Grandfather.</li>
            <li><b>Element (The Child):</b> He inherits from both! This is why a simple <code>&lt;div&gt;</code> can listen to clicks.</li>
        </ul>
        <p><b>The 3 Secret Powers of the Grandfather:</b></p>
        <ol>
            <li><code>addEventListener()</code> - Start listening.</li>
            <li><code>removeEventListener()</code> - Stop listening.</li>
            <li><code>dispatchEvent()</code> - Manually trigger an event.</li>
        </ol>
    </div>`,

    // LESSON 5: HOW TO ADD A LISTENER
    `<div style="font-family: sans-serif; border-left: 5px solid #00b894; padding: 20px; background: #e6fffb; line-height: 1.6;">
        <h2 style="color: #006266; margin-top: 0;">👂 Lesson 5: How to Listen</h2>
        <p>To make an element respond to you, you need three things:</p>
        
        <pre style="background: #2d3436; color: #55efc4; padding: 10px; border-radius: 5px;">
target.addEventListener(type, function);
        </pre>

        <ol>
            <li><b>Target:</b> Who are we watching? (e.g., a button or a picture).</li>
            <li><b>Type:</b> What action are we waiting for? (e.g., 'click', 'scroll').</li>
            <li><b>Function:</b> What should we do when it happens? (The action).</li>
        </ol>
        <p><i>Think of it like setting an alarm: You tell the clock (Target) to ring (Function) at 7 AM (Type).</i></p>
    </div>`,

    // LESSON 6: THE REMOVE TRAP
    `<div style="font-family: sans-serif; border-left: 5px solid #fd79a8; padding: 20px; background: #fff0f5; line-height: 1.6;">
        <h2 style="color: #d63031; margin-top: 0;">🛑 Lesson 6: The "Remove" Trap</h2>
        <p>To stop listening to an event, the "Function" must be <b>exactly</b> the same. Imagine trying to cancel a gym membership, but using a different name—it won't work!</p>
        
        <p><b>❌ This fails:</b> (The functions look the same but are different "objects" in memory)</p>
        <code style="display:block; background:#000; padding:5px;">btn.addEventListener('click', () => { console.log('Hi'); });<br>
        btn.removeEventListener('click', () => { console.log('Hi'); });</code>

        <p><b>✅ This works:</b> (We gave the function a name so we can point to it later)</p>
        <code style="display:block; background:#000; padding:5px;">function sayHi() { console.log('Hi'); }<br>
        btn.addEventListener('click', sayHi);<br>
        btn.removeEventListener('click', sayHi);</code>
        
        <div id="bgRed" style="margin-top:15px; padding:10px; background:#eee; border:1px solid #ccc; cursor:pointer; text-align:center;">
            <b>Interactive:</b> Click me to turn background Red! (Double click for Black)
        </div>
    </div>`, // LESSON 7: THE 3 PHASES (CAPTURING & BUBBLING)
    `<div style="font-family: sans-serif; border-left: 5px solid #0984e3; padding: 20px; background: #f0f7ff; line-height: 1.6;">
        <h2 style="color: #2980b9; margin-top: 0;">🎢 Lesson 7: The 3 Phases of an Event</h2>
        <p>When you click a button, the browser doesn't just see the button immediately. It goes through a journey:</p>
        
        

        <ol>
            <li><b>Capturing Phase:</b> The browser starts at the top (HTML) and "hunts down" to find where you clicked.</li>
            <li><b>At Target Phase:</b> You have arrived! The browser is now at the exact element you clicked.</li>
            <li><b>Bubbling Phase:</b> The event "bubbles" back up to the top, like air bubbles in water.</li>
        </ol>
        <p><b>Secret Trick:</b> By default, events run in the <b>Bubbling</b> phase. If you want it to run during the <b>Capturing</b> phase instead, add <code>true</code> as the 3rd argument:</p>
        <code style="background:#dfe6e9; padding:5px;">target.addEventListener('click', func, <b>true</b>);</code>
    </div>`,

    // LESSON 8: THE EVENT OBJECT (THE DATA BOX)
    `<div style="font-family: sans-serif; border-left: 5px solid #a29bfe; padding: 20px; background: #f3f0ff; line-height: 1.6;">
        <h2 style="color: #6c5ce7; margin-top: 0;">📦 Lesson 8: The Event Object</h2>
        <p>When an event happens, JavaScript creates a "Data Box" called the <b>Event Object</b>. It contains all the secrets about that event!</p>
        
        <p>To see inside the box, just pass it into your function as an argument:</p>
        <pre style="background: #2d3436; color: #a29bfe; padding: 10px; border-radius: 5px;">
content.addEventListener('click', (event) => {
    console.log(event); // This prints the secret data box!
});
        </pre>
        <p>Inside, you can find things like: Where exactly was the mouse? Which key was pressed? Which element was touched?</p>
    </div>`,

    // LESSON 9: PREVENT DEFAULT (STOPPING THE BRAKES)
    `<div style="font-family: sans-serif; border-left: 5px solid #fab1a0; padding: 20px; background: #fffaf0; line-height: 1.6;">
        <h2 style="color: #d35400; margin-top: 0;">🚫 Lesson 9: Stopping Default Actions</h2>
        <p>Some elements have "Built-in Habits" (Default Actions). For example, a link <code>&lt;a&gt;</code> always wants to open a webpage. But what if we want to stop it?</p>
        
        <p>We use <code>event.preventDefault()</code> to tell the browser: "Don't do your usual habit!"</p>

        <div style="background: #eee; padding: 15px; border-radius: 10px; text-align: center;">
            <a href="https://www.facebook.com" style="color: blue; font-weight: bold;">Click me (Facebook Link)</a>
            <p><small>Check the console! I won't let you leave this page.</small></p>
        </div>
        
        <p><b>Usage:</b> This is very useful for checking if a Form is filled out correctly before the page refreshes!</p>
    </div>`,// LESSON 10: EVENT DELEGATION (SAVING MEMORY)
    `<div style="font-family: sans-serif; border-left: 5px solid #00b894; padding: 20px; background: #e6fffb; line-height: 1.6;">
        <h2 style="color: #006266; margin-top: 0;">🧠 Lesson 10: Event Delegation</h2>
        <p>Imagine you have 100 paragraphs. If you give every single one its own listener, your computer will run out of memory and get very slow!</p>
        
        

        <p><b>The Smart Way:</b> Instead of 100 listeners, we add <b>ONE</b> listener to the "Parent" (like a <code>&lt;div&gt;</code>). Because of <b>Bubbling</b>, when you click a paragraph, the event travels up to the Parent, and the Parent handles it for everyone!</p>
        
        <p style="background: #55efc4; padding: 10px; border-radius: 5px;">
            <b>Benefits:</b> Uses less memory, makes your code faster, and is much easier to manage.
        </p>
    </div>`,

    // LESSON 11: TARGET & NODENAME (THE FILTER)
    `<div style="font-family: sans-serif; border-left: 5px solid #0984e3; padding: 20px; background: #f0f7ff; line-height: 1.6;">
        <h2 style="color: #2980b9; margin-top: 0;">🎯 Lesson 11: Target & NodeName</h2>
        <p>Wait! If we put the listener on the Parent, how do we know <i>which</i> specific child was clicked? We use <code>event.target</code>.</p>

        <p>But there is a catch: What if the user clicks the space <i>between</i> paragraphs? We only want to act if they click a <b>SPAN</b> or a <b>P</b>.</p>

        <pre style="background: #2d3436; color: #74b9ff; padding: 15px; border-radius: 5px; overflow-x: auto;">
parent.addEventListener('click', (event) => {
    // We check the "NodeName" (The tag name in CAPS)
    if (event.target.nodeName === 'SPAN') {
        console.log("You clicked a Span!");
    }
});
        </pre>
        <p><b>Important:</b> <code>nodeName</code> always returns the tag in <b>UPPERCASE</b> (like "DIV", "P", or "SPAN").</p>
        <p style="text-align: center; font-weight: bold; color: #2980b9;">🎉 Congratulations! You have finished the Events Module! 🎉</p>
    </div>`
];



// 2. Create a counter to track the current index
let currentIndex = 0;

btn.addEventListener('click', () => {
    // 3. Update the text content
    text.innerHTML = lessons[currentIndex];

    // --- LOGIC CHECKS FOR SPECIFIC LESSONS ---

    // Lesson 6 is at Index 5 (0,1,2,3,4,5)
    // We check for #bgRed immediately after setting innerHTML
    let red = document.querySelector('#bgRed');
    if(red) {
        red.addEventListener('click', () => {
            document.body.style.backgroundColor = 'red';
        });
        red.addEventListener("dblclick", () => {
            document.body.style.backgroundColor = 'black';
        });
    } else {
        // Reset background if we move away from the red button lesson
        document.body.style.backgroundColor = 'black';
    }

    // Lesson 9 is at Index 8 (The Facebook link)
    let fb = document.querySelector('a');
    if(fb) {
        fb.addEventListener('click', function(evnt) {
            evnt.preventDefault();
            console.log('maza aaya accha laga');
        });
    }

    // Load External Scripts for the final lessons
    // Lesson 10 is Index 9
    if (currentIndex === 9) {
        let script = document.createElement('script');
        script.src = "./tooManyEvent.js";
        text.appendChild(script);
    }
    // Lesson 11 is Index 10
    if (currentIndex === 10) {
        let script = document.createElement('script');
        script.src = "./tooManyEvent2.js";
        text.appendChild(script);
    }

    // --- UPDATE COUNTER FOR NEXT CLICK ---
    currentIndex++;

    // 5. Reset to 0 if we reach the end of the list
    if (currentIndex >= lessons.length) {
        currentIndex = 0; 
    }
});


 
 


