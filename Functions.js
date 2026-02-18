/* functions in js
Named(function statement), Anonymous , Arrow , IIFE(Immediately Invoked Function Expression) , callback function , highorder function (first class function/function expression) ,closures,
*/


/* Named functions(paramertized, non paramertized, default parameters, rest parameters)*/
//void Named function with no parameters
function printHello(){
    console.log("hello world");   
}
printHello();

//void Named function with parameters
function printName(Name)
{
    console.log("My name is "+Name);
}
printName("Dibya");

//function with return type and parameters
function add(a,b)
{
    return a+b;
}
console.log(add(5,10));

//function with default parameters
function greet (name="world")
{
    console.log("Hello "+ name);
}
greet();
greet("Dibya");

//function with rest parameters
function sum(...args)
{
    return args.reduce((acc,curr) => {
        return acc+curr
    },0);
}
console.log(sum(10,20,30,40,50));





//Arrow function 
var square = x=>x*x;
console.log(square(2));

var total = (...args)=>args.reduce((acc,curr)=>acc+curr,0);
console.log(total(10,20,30,40,50,100));

var func = x=>y=>x*y;
console.log(func(10)(20));


//IIFE (Immediately Invoked Function Expression):an IIFE is a function that is defined and executed immediately after its creation.
var a=10;
(function()
{
    console.log("a:"+a);
})();





//A Higher-Order Function is a function that either:Takes another function as an argument, or Returns a function as its result.
//also a First-class function = functions can be treated like values. You can assign, pass, return, and store them.

function HOF(total,a,b,c,d)
{
    console.log(total(a,b,c,d));
}
HOF(total,10,20,30,40)


function HOF1(total,a,b,c,d)
{
    return total(10,20,30,40);
}
console.log(HOF1(total,10,20,30,40));


function multiplier(a)
{
    return function (b)
    {
        return a*b;
    }
}
console.log (multiplier(10)(2));


//function stored in array (DS)
var arr = [
    ()=>console.log("array index 1"),
    ()=>console.log("array index 2"),
    (x,y)=>x*y
]
arr[0]();
arr[1]();
console.log(arr[2](2,3));




//A callback function is a function that is passed as an argument to another function, and then executed later inside that function.

function f(a,callback)
{
    callback(a);
}

function callback(a)
{
    console.log(a);
}
f("raj",callback);





/*closures topic (closure = function with its lexical scope objects) */
//setTimeout

function fetchdata(a)
{
    setTimeout(()=>{
        console.log(a);
    },2000);
}
fetchdata("data");

function func1() {

     for (var j = 0;j < 10;j++) {
        setTimeout(() => {
            console.log( " var j:" + j);
        }, 1000 * j);
    }

}
func1();
//output: var j = 0 1 2 3 4 5 6 7 8 9 ❌ 
//output: var j = 10 10 10 10 10 10 10 10 10 10 ✅  
//this is because  When setTimeout stores the function somewhere and attaches timer to it, the function remembers its reference to i, not value of i Bcz i is a var and var is function scoped thus inside the function i is only one. All 10 copies of function point to same reference of i. 

function func2() {

    for (let j = 0;j < 10;j++) {
        setTimeout(() => {
            console.log( " let j:" + j);
        }, 1000 * j);
    }
}
func2();
//output:  let j = 0 1 2 3 4 5 6 7 8 9 ✅
//but in case of j as it is let (blocked scoped) so in each loop j is a different entity and stored in different loc.

function func3()
{   
    for (var i = 1; i <= 5; i++) { 
        function close(i) {  //but a little change here can change the whole working of the code ie:that if i dont take i as argument rather directly access i using closure .
            setTimeout(function () { 
                console.log(i);

                    }, i * 1000); 
            
        } 
        close(i); 
    } 
}
func3();
//now output:1,2,3,4,5 and this is because we are using a function to use setTimeout and passing i as argument not taking i using the closure 




//data hiding and encapsulation

var hide = 10 ;
function hiding(){
    hide++;
}
hiding();
console.log(hide);//here the data is accessible as it hide is in global execution context

function h() {
    var hide = 10;
    function increment() {
        hide++;
        console.log("hide:", hide);
    }
    return increment; // expose increment
};

//console.log(hide); // this will give referenceError as count can't be accessed. So now we are able to achieve hiding of data 


//(increment with function using closure) true function
function h1()
{
    var hide = 10 ;
    return ()=>{
        hide++;
        console.log(hide);
    };
}
var hidden = h1();
hidden();
hidden();
var hidden1 = h1();
hidden1();

//or the same fucntion can be written like this below
var funcHide = function()
{
    var hide = 10;
    function increment()
    {
        hide++;
        console.log(hide);
    }
    return increment;
}
var hidden2 = funcHide();
hidden2();


//// Above 2 code are not good and scalable for say, when you plan to implement decrement counter at a later stage. 
// To address this issue, we use *constructors* 

function counter()
{   
    //constructor function. Good coding would be to capitalize first letter of constructor function. 
    var hide = 10;
    this.incrementCounter = function(){
        hide++;
        console.log(hide);
    }
    this.decrementCounter = function(){
        hide--;
        console.log(hide);
    }
}

var counter1 = new counter();
counter1.incrementCounter();
counter1.decrementCounter();



//also we can Return an object with multiple functions

var funcobj = function objF()
{
    var hide = 10;
    function increment()
    {
        hide++;
        console.log(hide);
    }
    function decrement()
    {
        hide--;
        console.log(hide);
    }
    return {increment,decrement};
}
var obj = funcobj();
obj.increment();
obj.decrement();


//function statement vs function expression

a1(); //-->ouput:a hoisting works here 
//b1(); //-->Type Error
//function statement 
function a1()
{
    console.log("a1");
}
//function expressio 
var b1 = function (){
    console.log("b1");
}
b1();//this will work 


//practice
function abcd(a,b,c)
{
    return a(b,c);
}
var abc = abcd((a,b)=>a*b,10,20);
console.log(abc);


