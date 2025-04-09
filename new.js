//JAVASCRIPT RANDOM
//Math.random()  returns a random number

let jen = Math.floor(Math.random() * 200);
console.log(jen);

document.getElementById('demo').innerHTML =
Math.floor(Math.random() * 10);

// returns a random integer from 0-200
let fnt = Math.floor(Math.random() * 200) + 1;
console.log(fnt);

// let randomNmber = Math.floor(Math.random() * 10) + 1;

// let userGuess = prompt('guess a number between 1 and 10');
 
// userGuess = Number(userGuess);

// if(userGuess === randomNumber) { 
// alert('congrats');
// }

// else{
//     alert("loser" + randomNumber);
// }


//JAVASCRIPT BOOLEANS
//the boolean() function is used to find out if an expresssion or variable is true

let sign = 10 > 9;
console.log(sign);

let leg = 10 > 100;
console.log(leg);

//everything without a value is false


//JAVASCRIPT COMPARISION
//comparisions operators are used in logical statements to determine equality or difference between variables and values 

//JAVASCRIPT SWITCH STATEMENT
//the switch statement is used to perform different actions based on different conditions

switch(new  Date().getDay()){
    case 0:
        day = 'Sunday'
        break;
        case 1:
            day = "Monday";
            break;
          case 2:
             day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";

}
document.getElementById("demo").textContent = "Today is " + day;

let weather = 'rainy'

switch(weather){
    case 'sunny':
        console.log('it is a bright and beautiful day');
        break;

        case "rainy":
            console.log("Don't forget your umbrella!");
            break;

          case "cloudy":
            console.log("Looks like it might rain later. ");
            break;

          case "snowy":
            console.log("Time to build a snowman!");
            break;
}
let text; 
switch(new Date().getDay()){
   default:
    text = 'Looking forward to the weekend';
    break;
    case 6: text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
document.getElementById('demo3').textContent = text;

//JAVASCRIPT FOR LOOP
const cars = [
    'bmw',  'Fiat', 'Volvo', 'Toyota', 'Honda'
]
let textt = ''
for(let i = 0;  i < cars.length; i++){
    textt += cars[i] + '<br>';
}
document.getElementById('demo4').innerHTML = textt;

//

let sum = ''
for(let i = 0; i < 5; i++ ){
    sum += `the number is ${i} ` +  '<br>'

}
document.getElementById('demo5').innerHTML = sum;

//
const fruits = ['apple', 'bannana', 'orange', 'mango', 'grapes']
let texttt = ''
for(let i = 0; i < fruits.length; i++){
    texttt +=  fruits[i] + '<br>'
}
document.getElementById('demo6').innerHTML = texttt;

// FOR IN LOOP
const cat = {
    name: "Whiskers",
    color: "gray",
    age: 2
};
for(let key in cat){
    console.log(key + ':' + cat[key]);
}








