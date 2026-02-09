/*in this file we will see various control flow statements like if-else , switch, loops  */

//if else

var a = 10;
if(a>10) console.log("greater than 10");
else if(a<10) console.log("less than 10");
else console.log("equal to 10");

//switch case (value matching)
const fruit = "apple";
switch(fruit){
    case "apple":console.log("red fruit");
    break;
    case "banana":console.log("yellow fruit");
    break;
    case "grapes":console.log("green fruit");
    break;
    default:console.log("unknown fruit");
}




//switch case

//switch case (Multiple cases sharing same code block)
let day = "sunday";
switch(day){
    case "saturday":
    case "sunday":console.log("weekend");
    break;
    default:console.log("weekday");
}
//or
let day1 = 2;
switch(day1) {
  case 1:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}

//switch case (condition matching)
let mark = 50 ;
switch(true){
    case (mark>=90):console.log("topper");break;
    case (mark<90 && mark>70):console.log("average");break;
    default: console.log("need improvement");break;
}

//switch case (function)
function role(r)
{
    switch(r.toLowerCase())
    {
        case "admin": console.log("have all access");
        break;
        case "user": console.log("have limited access");
        break;
        default :console.log("no access");
        break;
    }
}
role("admin");




//loops 
//for loop
for(let i=0;i<5;i++){
    console.log(i);
}

//while loop    
let j=0;
while(j<5){
    console.log(j);
    j++;
}

//do while loop 
let k=6;
do{
    console.log(k);
    k++;
}while(k<5);

//for in loop (used for objects)
let obj = {
    name:"Dibya",
    age:24,
    city:"Bangalore"
}
//using in key can be accessed in for in loop
for(let key in obj){
    console.log(key + " : " + obj[key]);
}

//for of loop (used for arrays)
let arr = [1,2,3,4,5];  
for(let value of arr){
    console.log(value);
}

//foreach loop (used for arrays)
let arr1 = [1,2,3,4,5];
arr1.forEach(function(value){
    console.log(value);
});

//array of objects
let students = [
    {name:"Dibya",age:24,city:"Bangalore"},
    {name:"John",age:22,city:"New York"},
    {name:"Jane",age:25,city:"London"}
];
students.forEach(function(student){
   for(let key in student){
       console.log(key + " : " + student[key]);
   }
   console.log("-------------");
});


