
1:what is Asynchronous Programming?
-Asynchronous programming → Tasks can start, then “pause” while waiting (e.g., for a network response), and meanwhile other code continues to run. When the async task finishes, its result is handled later via a callback, promise, or async/await.



2:If JS can write async code even though it is a synchronous language ?
-JavaScript is single‑threaded and synchronous by design, but it gets asynchronous power from the environment (like browsers or Node.js), which provide APIs such as setTimeout, fetch, or file I/O. These APIs handle tasks in the background and, through the event loop, push results back into JavaScript when the call stack is free — that’s how JS can write and run async code even though the language itself is synchronous.



3:Give a complete overview of power of Browser ?
-Browser has JS Engine which has Call Stack which has Global execution context, local execution context etc, but apart from that Browser have many other superpowers that helps JS to perform async tasks.
-Browser have web api inside window which are as follows :
    1->Local storage space:(sync)
    2->setTimeout(Timer) :(async)
    3->Location(place to enter URL):(sync)
    4->Fetch(built-in function for making network requests asynchronously in JavaScript.):(async)
    5->console(console.log()):(sync)
    6->DOM apis:(sync)
    7->Bluetooth access:(async)
    8->Geolocation access :(async)
-All the above web apis are accessed by the call stack using the window (global object), and the executions of all these 




4:what is Call Stack  ?
-The place where JavaScript executes synchronous code, one function at a time. If the stack is busy, nothing else runs.

4.1:what is Callback Queue (Task Queue) ? 
-Holds asynchronous tasks like setTimeout, DOM events, or fetch callbacks. The event loop moves them into the call stack when it’s empty.

4.2:what is Microtask Queue ?  
-Special queue for promises (.then, catch, finally) and mutation observers. Microtasks always run before tasks from the callback queue once the stack is clear.
-Microtask queues of borwser window: 
    Promise-based APIs (like fetch, Response.json(), etc.) → their .then, .catch, .finally callbacks are scheduled in the microtask queue.
    MutationObserver → a DOM API that watches for changes in the DOM, its callbacks are also microtasks.

4.3:Event Loop  
-The mechanism that constantly checks:
    Is the call stack empty?
    If yes, process all microtasks.
    Then move one task from the callback queue into the stack.
    This cycle repeats endlessly.




5:how the event loop works ? with a eg:
-eg:
    console.log("Start");
    setTimeout(function cbT() { 
    console.log("CB Timeout"); 
    }, 5000);
    fetch("https://api.netflix.com").then(function cbF() { 
    console.log("CB Netflix"); 
    });
    console.log("End"); 

    -output: Start
             end
             CB Netflix
             CB Timeout

    -Explanation:    
    Call Stack begins: 
        ->console.log("Start") runs immediately → prints Start.
    setTimeout:
        ->The browser’s Timer Web API starts a 5‑second countdown.
        ->After 5 seconds, the callback cbT is placed into the Callback Queue (Task Queue).
    fetch: 
        ->The browser’s Fetch Web API starts a network request.
        ->After ~2 seconds, the response is ready.
        ->The .then(cbF) callback is scheduled in the Microtask Queue (because promises always go there).

    All synchronous code runs in the Call Stack first.
        ->Finally, console.log("End") executes → prints End.
    Event Loop kicks in:
        ->Once the call stack is empty, the event loop checks the Microtask Queue first.
        ->cbF runs → prints CB Netflix.
        ->Then, after 5 seconds total, the event loop moves cbT from the Callback Queue into the stack → prints CB Timeout.




6:What is a JRE ?
->A JavaScript runtime environment is the environment where JS code executes.
->runtime = engine + environment (APIs, queues, event loop).


7:how a js code is executed in js engine?
-When you run JS code, the engine processes it in three phases:
-a:Parsing:
    Code is read and broken into tokens.
    Syntax checked.
    Abstract Syntax Tree (AST) created.
-b:Compilation
    Modern engines use JIT (Just-In-Time) compilation.
    AST is converted into bytecode or machine code.
    Optimizations applied (inline caching, hidden classes, etc.).
-c:Execution
    ->Needs 2 components ie. Memory heap(place where all memory is stored) and Call Stack(Machine code runs in the call stack.). There is also a garbage collector. It uses an algo called Mark and Sweep.
    ->Async tasks handled via event loop, callback queue, and microtask queue



8:Explain how google V8 engine works ?
-Java script code->parser to get converted into an Abstract Syntax Tree (AST) -> Interpreter: Ignition ie:(AST is turned into bytecode)  -> (Optimization (using Compiler: TurboFan)) -> Deoptimization (if needed):{If assumptions break (like variable types change), the engine falls back to less optimized code.}



9:What is callback Hell ?
-When multiple asynchronous operations depend on each other, callbacks get deeply nested, making the code hard to read and maintain.Also known as Pyramid of Doom
-Eg:  
    getUser(userId, (user) => {
        getOrders(user, (orders) => {
            processOrders(orders, (processed) => {
                sendEmail(processed, (confirmation) => {
                    console.log("Order Processed:", confirmation);
                });
            });
        });
    });


10:Inversion of Control ?
-When we pass a function as a callback, basically we are dependant on our parent 
function that it is his responsibility to run that function. This is called `inversion of 
control` because we are dependant on that function. What if parent function stopped 
working, what if it was developed by another programmer or callback runs two times or never 
run at all. 
-eg:
    api.createOrder(cart, function () { 
        api.proceedToPayment(); 
    }); 


11:How to overcome Pyramid of doom/callback hell ?
->this can be done using promises`
->promises: A Promise is an object representing the eventual completion or failure of an asynchronous operation

