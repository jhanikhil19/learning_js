let name1="Nikhil"
let name2='Nikhil'//single quotes
console.log(name1.length)
console.log(name1.length)

let sentence="My name is 'Nikhil' Jha"
let sentence1='My name is "Nikhil Jha" and I am learning "JS" '
console.log(sentence)
console.log(sentence1)

nm = "Nik"
let a= "This is ${nm}"
console.log(a)

console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.slice(2,4))
console.log(name1.slice(2))

let name3 = "          Nikhil Bhai "
let newName = name3.replace("Bhai","Bhauu")
console.log(newName)
console.log(name3)
console.log(name1+name2)
let name4 = name1.concat(name2,"Yes")
console.log(name4)

let newName1=name3.trim()
console.log(newName1)
console.log(name3.trim())


console.log(name1[3])

for(let i=0; i<name1.length; i++){
    console.log(name1[i])
}


const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false

console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="

console.log(String.fromCharCode(19, 06, 19, 97));
//The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

/* Can be used on Browser inside a HTML File. 
const worldString = "Hello, world";
console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
*/


const sentence2 = 'The quick brown fox jumps over the lazy dog.';

const word = 'The q';

console.log(`The word "${word}" ${sentence2.includes(word) ? 'is' : 'is not'} in the sentence`); //ternary loop used amazing
// expected output: "The word "fox" is in the sentence"
//includes is CASE SENSITIVE 
//includes do not work without it. 


const str11 = 'Saturday night plans';

console.log(str11.startsWith('Sat'));
// expected output: true

console.log(str11.startsWith('nig', 9));
// expected output: true

console.log(str11.startsWith('Sat', 9));
// expected output: false


//startsWith(searchString)
//startsWith(searchString, position)


console.log(str11.toLowerCase())


let str12 = "Please give Rs 1000";
console.log(str12.slice(15))
console.log(str12.slice(0))//Including index which is mentioned
console.log(str12.slice(7))


let str13 = "qwerty"
console.log(replace(str13[3],"i"))