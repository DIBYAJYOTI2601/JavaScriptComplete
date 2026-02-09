/*this fle give info about hoisting in js and let var and const in js. and we have also given the code snippet for hoisting in js and let var and const in js. and we have also given the output for the code snippet for hoisting in js and let var and const in js.*/


//hoisting in js->below is the code snippet for hoisting in js where we are trying to access the variable a before its declaration and initialization. and as a result we will get undefined because of hoisting in js. and we are also trying to call the function printName before its declaration and initialization. and as a result we will get the output "My name is Dibya" because of hoisting in js.

console.log("Hello world "+ a);
var a = 5;
printName();
function printName(){
    console.log("My name is Dibya");
};
console.log("Hello world "+ a);



//let var and const

//var is function scoped and it is hoisted to the top of the function. and it can be re-declared and re-assigned. and it can be accessed before its declaration and initialization. and it will give undefined because of hoisting in js. and it is not block scoped.
function TestVar(){
    console.log("Value of x inside function: "+x);
    {
        var x = 10;
    }
    console.log("Value of x after block: "+x);
}
TestVar();

//let/const is block scoped and it is not hoisted to the top of the block and it cannot be accessed before its declaration and initialization. and it will give ReferenceError because of temporal dead zone in js. and it is block scoped.
function TestLet(){
    //console.log("Value of y inside function: "+y); //ReferenceError: Cannot access 'y' before initialization
    let y = 20;
    // {
    //     let y = 30;
    // }   //this will also give because it is blocked scope and cant be accessed outside the block.
    console.log("Value of y after declaration: "+y);
    
}
TestLet();



