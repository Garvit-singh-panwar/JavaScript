document.body.setAttribute('style', 'background-color : black; color : #5fd35d;');

let txt = document.querySelector("#text");
let btn = document.querySelector("#next");



let lesson = [`<div style="font-family: sans-serif; border-left: 5px solid #ff9f43; padding: 15px; background: #fffaf0;">
        <h2 style="color: #d35400;">⏳ Lesson 1: The "Waiting Room"</h2>
        <p>JavaScript usually does things one by one. But sometimes, a task needs to wait. Imagine this code:</p>
        
        <pre style="background: #2d3436; color: #fab1a0; padding: 10px; border-radius: 5px;">
setTimeout(() => {
    console.log('Third 🥉');
}, 0);

console.log('First 🥇');
console.log('Second 🥈');
        </pre>

        <p><b>The Logic:</b> Even if the timer is 0, <code>setTimeout</code> is sent to a "Waiting Room." JavaScript finishes all its current work first. So, "First" and "Second" print immediately, and "Third" prints only after they are done!</p>
        <p><i>Check your console to see the race!</i></p>
    </div>`,

    // LESSON 2: WHAT IS AN API?
    `<div style="font-family: sans-serif; border-left: 5px solid #0984e3; padding: 15px; background: #f0f7ff;">
        <h2 style="color: #2980b9;">🌐 Lesson 2: The Messenger (API)</h2>
        <p><b>API</b> stands for <i>Application Programming Interface</i>. Think of it as a <b>Bank ATM</b>:</p>
        
        
        
        <ul>
            <li><b>You:</b> Want ₹100.</li>
            <li><b>The Bank:</b> Has the money in a big vault.</li>
            <li><b>The ATM (API):</b> You don't go inside the vault. You talk to the ATM. The ATM tells the bank, gets the money, and gives it to you.</li>
        </ul>
        
        <p>In apps, your code (like a Weather App) asks an API for the temperature. The API goes to a far-away server, gets the data, and brings it back to your screen!</p>
    </div>`,

    // LESSON 3: API ACTIONS
    `<div style="font-family: sans-serif; border-left: 5px solid #6c5ce7; padding: 15px; background: #f5f3ff;">
        <h2 style="color: #4834d4;">🛠️ Lesson 3: How to talk to an API</h2>
        <p>When we use an API, we usually do one of these 4 things (HTTP Methods):</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <tr style="background: #eee;">
                <th style="padding: 8px; border: 1px solid #ddd;">Action</th>
                <th style="padding: 8px; border: 1px solid #ddd;">What it means</th>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><b>GET</b></td>
                <td style="padding: 8px; border: 1px solid #ddd;">"Please give me some data" (Like checking your balance)</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><b>POST</b></td>
                <td style="padding: 8px; border: 1px solid #ddd;">"Please save this new data" (Like opening a new account)</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><b>PUT</b></td>
                <td style="padding: 8px; border: 1px solid #ddd;">"Please update my info" (Like changing your address)</td>
            </tr>
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><b>DELETE</b></td>
                <td style="padding: 8px; border: 1px solid #ddd;">"Please remove this" (Like closing an account)</td>
            </tr>
        </table>
    </div>`,
// LESSON 4: WHAT IS A PROMISE?
    `<div style="font-family: sans-serif; border-left: 5px solid #00b894; padding: 15px; background: #e6fffb;">
        <h2 style="color: #006266;">🤝 Lesson 4: What is a Promise?</h2>
        <p>A <b>Promise</b> is exactly what it sounds like! Imagine you order a <b>Pizza</b>:</p>
        
        

        <ul>
            <li><b>The Promise:</b> The shop says, "I will give you a pizza soon."</li>
            <li><b>Synchronous (The Boring Way):</b> You stand at the counter and stare at the oven. You can't do anything else until the pizza is ready.</li>
            <li><b>Asynchronous (The JavaScript Way):</b> You go home, play games, or clean your room. You do other tasks <i>parallelly</i> while the pizza is being made in the background.</li>
        </ul>
        <p>In JS, we use Promises for tasks that take time (like downloading data) so our app doesn't freeze!</p>
    </div>`,

    // LESSON 5: PROMISE STATES (SUCCESS OR FAILURE)
    `<div style="font-family: sans-serif; border-left: 5px solid #e17055; padding: 15px; background: #fff5f0;">
        <h2 style="color: #a29bfe;">🚦 Lesson 5: The 3 Stages of a Promise</h2>
        <p>A promise is always in one of these three states:</p>
        <ol>
            <li><b>Pending:</b> The "Waiting" stage. The pizza is still in the oven.</li>
            <li><b>Resolved (Fulfilled):</b> Success! The pizza arrived and you are happy. We use <code>.then()</code> to handle this.</li>
            <li><b>Rejected:</b> Oh no! The shop ran out of cheese. We use <code>.catch()</code> to handle this error.</li>
        </ol>
        
        <pre style="background: #2d3436; color: #a29bfe; padding: 10px; border-radius: 5px;">
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Pizza is here! 🍕");
    } else {
        reject("No pizza today... 😢");
    }
});
        </pre>
    </div>`,

    // LESSON 6: PROMISE CHAINING (.then)
    `<div style="font-family: sans-serif; border-left: 5px solid #fdcb6e; padding: 15px; background: #fffcf0;">
        <h2 style="color: #e67e22;">🔗 Lesson 6: The "Then" Chain</h2>
        <p>How do we do tasks one after another? We use <b>.then()</b> to chain them together.</p>
        <p>Imagine your friend <b>Vaada1</b> finishes a task. Once he is done, he tells <b>Vaada2</b> to start. This is called Chaining.</p>

        <pre style="background: #2d3436; color: #ffeaa7; padding: 10px; border-radius: 5px;">
vaada1.then(() => {
    console.log("Task 1 Done!");
    return vaada2; // Start the next promise
})
.then((finalResult) => {
    console.log("Task 2 Done: " + finalResult);
});
        </pre>
        <p><b>Why use this?</b> It helps us know exactly when a background task finishes so we can start the next one without getting confused!</p>
    </div>`

 ,
 // LESSON 7: ASYNC & AWAIT
    `<div style="font-family: sans-serif; border-left: 5px solid #6c5ce7; padding: 15px; background: #f8f7ff;">
        <h2 style="color: #4834d4;">🏃 Lesson 7: Async/Await (The Relay Race)</h2>
        <p>If you have 50 promises, writing 50 <code>.then()</code> blocks is messy. <b>Async/Await</b> is a cleaner way to write the same thing.</p>
        
        

        <ul>
            <li><b>Async:</b> This word tells JavaScript: "This function will have some waiting to do."</li>
            <li><b>Await:</b> This tells JavaScript: "Stop and wait here until this specific runner hands over the scroll (the data) before moving to the next line."</li>
        </ul>
        <p>It’s like a <b>Relay Race</b>: Runner 2 cannot start running until Runner 1 finishes and hands them the baton!</p>
    </div>`,

    // LESSON 8: THE FETCH API (GETTING DATA)
    `<div style="font-family: sans-serif; border-left: 5px solid #00cec9; padding: 15px; background: #e0ffff;">
        <h2 style="color: #008080;">📡 Lesson 8: Fetching Data</h2>
        <p>The <b>Fetch API</b> is like a delivery boy that goes to the internet to get data for you. It always takes two steps:</p>
        
        

        <pre style="background: #2d3436; color: #81ecec; padding: 10px; border-radius: 5px;">
async function getPost() {
    // 1. Wait for the delivery boy to return with the package
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    // 2. Unpack the package (Convert it to JSON)
    let data = await response.json();
    
    console.log(data);
}
        </pre>
        <p><b>JSON</b> stands for <i>JavaScript Object Notation</i>. It’s just a simple way to organize data using keys and values (like a dictionary).</p>
    </div>`,

    // LESSON 9: SENDING DATA (POST REQUEST)
    `<div style="font-family: sans-serif; border-left: 5px solid #d63031; padding: 15px; background: #fff5f5;">
        <h2 style="color: #c0392b;">📤 Lesson 9: Sending Data (POST)</h2>
        <p>Usually, <code>fetch</code> just gets data. But if you want to <b>send</b> data (like a new post or your login details), you need to give it an <b>Options Object</b>.</p>
        
        <pre style="background: #2d3436; color: #ff7675; padding: 10px; border-radius: 5px;">
let myData = {
    method: 'POST', // Tell the API we are SENDING
    headers: {
        'Content-type': 'application/json' // Tell the API it's a JSON package
    },
    body: JSON.stringify({ title: 'Hello', userId: 1 }) // The actual data
};

fetch("URL_HERE", myData);
        </pre>
        <p><b>Paid APIs:</b> If you use a "Pro" version of an API, you put your secret password (API Key) inside the <code>headers</code> so the server knows it's you!</p>
    </div>`,  ];

let i = 1;
txt.innerHTML = lesson[0];
btn.addEventListener('click',()=>{
    txt.innerHTML = lesson[i++];
    i = i %lesson.length;
});


setTimeout(()=>{
      console.log('third');
},0);
let sync = ()=>{ 
    console.log('first');
}
sync();
                
console.log("second");

// let meraPromise = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      console.log("I am inside promise");
//    }, 0);
//     resolve(1998);
// });
// meraPromise = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      console.log("I am inside promise");
//    }, 0);
//     reject(new Error('Bhaisahab error Aaa gya'));
// });// its callback function always takes two parameter resolve 

// console.log('pehla');
// A function that simulates a runner finishing their lap
function runLap(runnerName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(runnerName + " finished the lap!");
      resolve();
    }, 1000); // Takes 1 second
  });
}

// THE RALLY RACE FUNCTION
async function startRally() {
  console.log("Race Started!");

  await runLap("Runner 1"); // Code stops here until Runner 1 is done
  await runLap("Runner 2"); // Only starts AFTER Runner 1 finishes
  await runLap("Runner 3"); // Only starts AFTER Runner 2 finishes
  await runLap("Runner 4"); // Only starts AFTER Runner 3 finishes

  console.log("Race Finished! 🚩");
}

// startRally();

async function utility(){
    let content = await fatch('http://jsonplaceholder.typicode.com/posts/1');
    let output = await content.json();
    console.log(output);
}