//ternary operator 
let marks = 11;
console.log("Are marks greater than 10 ?? \n ")
console.log((marks>10)?"YES":"NO")

//CONDITIONAL STATEMENT DONE 
//if else if else 

let age=71

if(age>70)
    {
        console.log("TOO MUCH AGE TO DRIVE NOW")
    }
else if(age>=18 && age <=70)
    {
        console.log("Go AHEAD YOU CAN DRIVE")
    }
else
    {
        console.log("You are a KID- GO STUDYYYYY")
    }

//console.log("Hello world");

//if & if else also done with above. 

//Single line comment

/*
console.log("Hello")
*/ //Multiline comment 

//COMPARISION OPERATOR
console.log(55==9); //false
console.log(55!=9); //true
console.log(55==="55"); //false (Equal & type should be equal as well)
console.log(55!==9); //true (Not equal and type should be diffrent too)
console.log(55!==55);//false
console.log(55!=="55") //true 
console.log(55>9)//true

//Logical Operator 
let b=99;
b=9 //for || operator 
b=101 //for ! operator 
b="hello" // for last else option
if(b>50 && b<=99)
    {
        console.log("Cool");
    }
else if (b==9 || b==11)
    {
        console.log("b is 11 or 9");
    }    
else if(b!=0 && b>1 )
    {
        console.log("b is not zero");
    }
else
    {
        console.log("MAJJA")
    }


//Assignment Operator 

let x=9;
let y=10;

x=y;
console.log(x); //10
x+=5;
console.log(x); //15
x-=5;
console.log(x); //10
x*=2;
console.log(x); //20
x/=2;
console.log(x); //10
x**=2;
console.log(x); //100

//Arithmetic Operator 

let w=5;
console.log(w++); // o/p: 5 val: 6
console.log(w); // o/p: 6 val:6 
console.log(w--); // o/p: 6 val:5
console.log(w); // o/p: 5 val:5
console.log(--w); // o/p: 4 val:4
console.log(++w); // o/p: 5 val:5
console.log(w); // o/p: 5 val:5


//Chapter2 Practice Set

//Ch2Q1

let age1=13;
age1=22 //for checking else condition
if(age1>=10 && age1<=20)
    {
        console.log("Age between 10 and 20");
    }
else 
    console.log("Age not between 10 and 20"); 


/*Run in browser 
    let c = prompt("What is your age ? ")
c = Number.parseInt(c);
if(c>=10 && c<=20)
    {
        console.log("Age between 10 and 20");
    }
else 
    console.log("Age not between 10 and 20"); 
*/

//Ch2Q2

let age2=15;

switch(age2){
    case 18 : console.log("Legal to drink"); break;
    case 15 : console.log("Legal to drink"); break;
    default: console.log("SWITCH DEFAULT")
}


//Ch2Q3

//WAP to check if the number is divisible by two or three ? 
//let x1 = document.getElementById("Enter the number to check divisibility").value;
//let x1 = prompt("Enter number to check divisibility with 2 and 3");//works in browser
let x1=5; 
x1=6;
if(x1%2==0 && x1%3==0)
    console.log("Number %d is divisible by 2 and 3",x1)
else 
    console.log("Not divisible by 2 and 3 ")

//Ch2Q4

x1=8;
if(x1%2==0 || x1%3==0)
    console.log("Number %d is divisible by 2 or 3",x1)
else 
    console.log("Not divisible by 2 and 3 ")


//Ch2Q5
let age3=18;
age3=1; // for not drive case
console.log(age3>=18?"You can drive":"You cannot drive");

//============== FINISHED ============/ 