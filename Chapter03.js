//Functions in JS

function binodFunction(a,b){
    let c = a+b; 
    return c;
}

console.log(binodFunction(10,15))

//do while loop
let d=0;
do{
    console.log(" Serial No. %d", ++d)
}while(d<10)

//while loop
let e=0
while(e!=10){
    console.log("Round Number %d",++e)
}

//for in loop
let obj = {
    abc: 90,
    bcd: 22,
    asd: 88,
    sad: 12 
}
//for above obj ---- for in loop 
for(let g in obj){
    console.log("Marks of " + g + " are " + obj[g])
}

//for above obj ---- for of loop 
for( let h of "abc"){
    console.log("Marks of abc is " + h)
}

//for loop
for(let f=0; f<=10; f++)
{
    console.log("value of f is %d",f)
}

//Chapter 3 : Practice Set

let obj1={
    harry: 98,
    rohan: 70,
    aakash: 7
}
//ch3Q1 - using for loop

for(let i=0; i<Object.keys(obj1).length; i++)
    {
        console.log("Marks of "+Object.keys(obj1)[i]+" are "+obj1[Object.keys(obj1)[i]])
    }

console.log("FOR LOOP OVER")    

//ch3Q2 - using for in loop
for(let i in obj1) {
    console.log("Marks of " + i + " are " + obj1[i] )
}

//ch3Q3
//let correctNumber = 55
//let n = 0;
//while(correctNumber!=n){
//    n = prompt("Enter your guess number");  
//    console.log("Try Again")
//}
//console.log("correct number  %d  and your number MATCHED !!! ", correctNumber )


//ch3Q4
//function that find mean of 5 numbers
function mean(q,w,r,t,y){
    let mm = ((q+w+r+t+y)/5);
    return mm;
}

console.log(mean(10,20,30,40,50));
console.log(mean(20,20,20,20,20));
