1-What is JavaScript?
-JavaScript (JS) is a high-level, interpreted programming language
-synchronous, single-threaded language


2:what do you mean by thread of execution
-The single, ordered sequence of instructions that the JavaScript engine processes at a time, managed through the call stack, and coordinated with the event loop and task queues to handle both synchronous and asynchronous operations.


3:what is execution component ?
-Everything in JS happens inside the execution context.consider it as a container.
-In the container the first component is memory component and the 2nd one is code component
Memory component has all the variables and functions in key value pairs. It is also called Variable environment.


4:important terms(call stack,heap,Event loop ,Task queue)
-Call Stack: Tracks function calls and their execution order.
-Heap: Memory space for storing objects.
-Event Loop: Oversees the execution, moving tasks from queues to the stack when it’s free.
-Task Queues: Hold asynchronous tasks (macro-tasks like setTimeout, micro-tasks like promises).



5:how js executes code ?
-When a JS program is ran, a global execution context is created.
-The execution context is created in two phases.
a:Memory creation phase - JS will allocate memory to variables and functions.
b:Code execution phase
eg:
    var n = 2;
    function square(num) {
    var ans = num \* num;
    return ans;
    }
    var square2 = square(n);
    var square4 = square(4);
-------------------*********------------------------------
 A: 1->Memory Creation Phase (Global Context)
    Variables (n, square2, square4) → allocated with undefined.
    Functions (square) → full function code stored.
    call stack:

    2->Code Execution Phase (Global Context)
    n = 2 → assigns value.
    Function declaration already handled.
    Encounters square(n) → for function a new execution context is created

    3->Function Execution Context (for square2 = square(n))
    Memory Phase: num, ans → undefined.
    Execution Phase:
    num = 2 -> assigns value. 
    ans = num * num = 4 
    return ans → returns 4 to caller.
    Context destroyed after return.

    5->Same process repeats for square(4) → returns 16.

    6->Call Stack
    Keeps track of execution contexts (Global + Function).
    Pushes new context when function is called, pops when returned.
    Ensures correct order of execution.

    VISUALIZATION:-
    -Start: [Global]

    -square(n) called:
    [ square() ]
    [ Global ]

    -square(n) returns:
    [ Global ]

    -square(4) called:
    [ square() ]
    [ Global ]

    -square(4) returns:
    [ Global ]

    -End:
    (empty)

    7->End
    After all code runs, global execution context is destroyed.
 -------------------*********---------------------------------



6:primitive data types vs non primitive ?
->Primitive = Call by Value, Immutable, Stored directly in stack.
->Non-Primitive = Call by Reference, Mutable, Stored in heap.


6.1:What is a falsy and truthy value ?
->A falsy value is a value that JavaScript treats as false and when js treates as true it is called truthy value
->there are 7 falsy values ie: 0 , -0, ""(empty string),null,NaN(not a number),undefined


6.2:diference between undefined and not-defined ?
->undefined: it is a value assigned to a variable when it is delared but not assigned any value.
->not-defined: when the variable is called which is not declared at all then it called not-defined.




7:heap memory vs stack memory ?
-Stack holds primitive values and function execution contexts.(Fast, temporary storage for execution flow.)
-Heap holds objects and reference types.( Flexible, long-term storage for dynamic data.)



8:what is hoisting ?
-Hoisting is a concept which enables us to extract values of variables and functions even before
initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation
phase) of the Execution Context.



9:what is scooping and func vs bocked sope ?
-Scoping: The rules that determine where a variable is visible and accessible in your code.
-Function Scope: Variables are accessible only within the function they are declared in (characteristic of var).
-Block Scope: Variables are accessible only within the nearest set of curly braces { } like if, for, or while (characteristic of let and const).



10:var vs let vs const ?
-var: A legacy declaration that is function-scoped and initialized as undefined when hoisted.
-let: A modern declaration that is block-scoped and allows value re-assignment.
-const: A modern declaration that is block-scoped and prevents value re-assignment.



11:why hoisting doesnt works for let and const ?
-hoisting does happen for let and const, but it works differently than var.When let and const are hoisted, they are not initialized. They are placed in the Temporal Dead Zone.
*Temporal Dead Zone (TDZ): The state where a variable exists in memory but cannot be accessed until the code execution reaches its declaration.
-so  During the "Creation Phase" of the Execution Context, the engine allocates memory for all variables. var is given the value undefined immediately, but let/const are left uninitialized until the "Execution Phase" reaches the actual line of code.




12:difference between == and ====
->==(loose Equality):compares value only not type("3"==3 is true)
->===(strict Equality):compares both value and type("3" === 3 is false)


13:What is a Global object / window in browser ?
-The global object is automatically created when JavaScript starts running.
-In browsers, it’s called window. In Node.js, it’s called global.
-it holds built-in functions (alert, setTimeout, etc.) and any variables declared in the global scope.


14:what is a Global Execution Context (GEC)
-Whenever JS code runs, the engine creates an execution context.The very first one is the Global Execution Context.
-It has two parts:
    Memory (Variable Environment) → stores variables and functions.
    Code (Thread of Execution) → runs the actual code line by line.
-Even an empty file creates a GEC.



15:What is Lexical environment ?
-A lexical environment is the structure that holds variable/function declarations and references.
-It consists of:
    Environment Record → actual variables/functions in that current execution context.
    Outer Lexical Environment Reference → link to parent scope.(parent execution context)
-in short Lexical Environment = local memory + lexical env of its parent
-This is what enables scope chains and closures.


16:what is scope chains?
-When you reference a variable, JS first looks in the current scope.If not found, it moves outward step by step through the lexical environments until it reaches the global scope.This chain of linked environments is called the scope chain.
-eg:
    function outer() {
    let a = 10;
    function inner() {
        console.log(a); // found in outer scope
    }
    inner();
    }
    outer();
    //Here, inner() doesn’t have a, so it looks outward into outer()’s scope.



17:what is closure ?
-A function that remembers the variables from the scope/parent where it was created, even after that scope has finished executing.(lexical scope + fucntion / Function bundled along with it's lexical scope is closure)
-eg:
    function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
    }
    let counter = makeCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2
    //The inner function keeps access to count via closure, even though makeCounter() has already returned.


17.1:Advantages and Disadvantages of clousure ?
Advantages:
-module design pattern: it allows us to encapsulate related functionality into a single module or file
eg: 
    const Auth = (function(){
        const user = null;
        function login(user,passoword)
        {
            this.user=user;
        }
        function logout()
        {
            this.user = null;
        }
        function userInfo()
        {
            return this.user;
        } 
        return {
            login,
            logout,
            userInfo
        }
    })();
    Auth.login("joe","joe123");
    console.log(Auth.userinfo);


-curring: Transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.
eg:
    // Normal function function add(a, b, c) { return a + b + c; }
    function curryAdd(a) {
    return function(b) {
        return function(c) {
        return a + b + c;
        };
    };
    }
    //curried fucntion 
    let add1 = curryAdd(1);       // fix 'a' as 1
    let add1and2 = add1(2);       // fix 'b' as 2
    console.log(add1and2(3));     // 6
    console.log(add1and2(10));    // 13

-memoization //to be explained later 
-setTimeout

Disadvantages:
    Over consumption of memory
    Memory Leak
    Freeze browse



18:what is "this" Keyword
-Special keyword automatically created in every execution context .
-At the global level in browsers, this === window. Inside objects, this refers to the object itself.


19:Types of error ?
-ReferenceError → variable not found / TDZ.
    eg:*Uncaught ReferenceError: x is not defined → variable never declared.
       *Uncaught ReferenceError: cannot access 'a' before initialization → let/const in TDZ.

-SyntaxError → invalid code, stops execution immediately.
    eg:*Identifier 'a' has already been declared → redeclaring let variable.
       *Missing initializer in const declaration → const declared without value.

-TypeError → wrong type usage (like reassigning const).
    eg:*Assignment to constant variable → trying to reassign a const.



20:What is shadowing ?
-When a variable declared in an inner scope (like inside a function or block) has the same name as a variable in an outer scope, the inner one shadows (hides) the outer one within that scope.
eg:
    let a = 10;
    function test() {
    let a = 20; // shadows outer 'a'
    console.log(a); // 20
    }
    test();
    console.log(a); // 10
    //here a(global) is showdowed by a(test)


20.1: what is illegal shadowing ?
-When you try to shadow a variable declared with let or const using var in the same scope, it causes an error.


21:

