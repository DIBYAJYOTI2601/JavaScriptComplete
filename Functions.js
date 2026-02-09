/* functions in js
Named , Anonymous , Arrow , IIFE(Immediately Invoked Function Expression)
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


//setTimeout

function fetchdata(a)
{
    setTimeout(()=>{
        console.log(a);
    },2000);
}
fetchdata("data");




