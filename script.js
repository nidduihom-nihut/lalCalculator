/* console.log("Hello")


// two slash is used for comment purpose....


var b = "Mohiuddin Tuhin"

console.log(b);


document.getElementById('tag').innerHTML = "Hey Mohiuddin Tuhin How are you doing";


/*
// var a = prompt('What is your age?');

// document.getElementById('age').innerHTML = a;
/*

var num1 = 10;

//Increment num1 by 1
// num1++;

// Decrement num1 by 1

num1--;

console.log(num1)

*/
// function

/*function greetings() {
    var name = prompt("What is your name?");
    var age = prompt("What is your age?");
    var result = 'Hello ' + name + ' And you are ' + age;  //String Concatenation
    console.log(result);
}

greetings()

*/



// How do arguments works in function?
// How do we add two numbers together in function ?

/*
function sumOp(num1, num2) {
    var ans = num1 + num2;
    console.log(ans);
}

sumOp(50, 66)



*/

// While Looopsssss

/*
var num = 1

while (num < 100) {
    num += 1;
    console.log(num);
}

*/


//For Loops

/*
for (let index = 0; index < 100; index++) {
    console.log(index)
}

*/

// Datatypes in Javascripts


let yourAge = 18; // number
let yourName = 'Tuhin' //string
let name = {first: 'Mohiuddin', last: 'Tuhin'}; //object
let truth = false; //boolean
let groceries = ['apple', 'orange', 'bannnana']; //Array
let random; //undefined
let nothing = null; //value null


//////////////////////////////////////////////////
//string in JavaScript (common methods)

let fruit = 'Aeroplane,apple,orange,card';
let moreFruits = 'bannna\napple';          //new line



console.log(fruit.length)               //length
console.log(fruit.indexOf('n'));         //kono kisu aseh kina taar index num show korbeh
console.log(fruit.slice(2));         ///// two index theka kaitta fellbe
console.log(fruit.replace('ban', '123'));   //replace function ban keh 123 diya replace koiraa dibeh...
console.log(fruit.toUpperCase(fruit));     //Uppercase koiraaa dibeh lekha
console.log(fruit.toLowerCase(fruit));   //Lowercas koira dibo
console.log(fruit.charAt(2));             //Get a charecter by index
console.log(fruit[0]);                    //get a charecter
console.log(fruit.split(''));           //spliting in it every single charecterr
console.log(fruit.split(','));          //prottek word ke comma dara divide korbe

/////////////////////////////////////////////////




// Array is Javascript

let veg = ['banana', 'apple', 'orange', 'pineapples'];             //same


 //   alert(veg[0]); // Access value at index 2

veg[0] = 'pear';
veg[2] = 'java'



// Looping through array ///////////

for (let index = 0; index < veg.length; index++) {
    console.log(veg[1]);
}




// Array Common Methods
console.log('to string', veg.toString());    //Array ke string aa rupantor korbeh
console.log(veg.join('-'))         // It will join everything with hiphen
console.log(veg, veg.pop(), veg)      //adaa first aa array kamon silo ta print korbeh tarpor pop function last arr pinapple dlte korbe tarpor  abar final print diyaa dekhabe
console.log(veg.push('blackberries'), veg)     //appending something on the list
veg[veg.length]       //length


//////////////////////////////
veg[4] = 'bannana';////////// adding element with index
console.log(veg)////////////
///////////////////////////


///////////////////////////////////////////////////
let fish = ['Hilsha', 'Chingri', 'Rui', 'Poaaa'];//////////////////
let allGroccerie = veg.concat(fish);////////////////////

console.log(allGroccerie) //////////////////////Concating veg with fish
console.log(allGroccerie.slice(1, 4));

console.log(allGroccerie.reverse());   ///Reversing an array
console.log(allGroccerie.sort());

let sNumbers = [5, 49, 3, 89, 41, 76, 8, 56, 87, 12, 10]

console.log(sNumbers.sort())











// Amraa aktaa empty array niteh pari and aktaa for loop niteh pari jetaa array rr vitore jinish add korbo.


let abc = [];

for (let index = 0; index < 100; index++) {
    abc.push(index);
}

console.log(abc)
console.log(abc.length)



// ///////////////      objects in JavaScript

let student = {
    fName: 'Mohiuddin',
    lName: 'Tuhin',
}

student.fName = 'Hawlader'

console.log(student.fName)     //This is how to change value





/*

typeof 45;





var num1 = 10;
var num2 = 20;

var sum, sub;

sum = num1 + num2
sumM = num1 - num2

document.write("<h1>" + "= "+  +sum+ +"<br>" +"</h1>")

document.write("= "+sumM)


*/






var num1 = prompt("Enter first number?");
var num2 = prompt("Enter second number?");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);



var add = num1+num2;
var sub = num1-num2;
var mult = num1*num2;
var div = num1/num2;


document.getElementById("add1").innerHTML = add;
document.getElementById("sub1").innerHTML = sub;
document.getElementById("mult1").innerHTML = mult;
document.getElementById("div1").innerHTML = div;




