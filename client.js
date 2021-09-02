//#region jQuery intro project
//change div background color with jquery,
//and display text from input box on dom with jquery
$( document ).ready( bla );

function bla(){
  $('#say-hello-button').on('click', sayHello);
  $('h2').mouseenter(h2MouseEnter);
  $('h2').mouseleave(h2MouseLeave);
  $('.clicker').on('click', changeTextColor);
}

function h2MouseEnter () {
  $(this).css('background-color', 'red');
}

function h2MouseLeave () {
  $(this).css('background-color', 'white');
}
function sayHello() {
  let userName = $('#name-input').val();
  let message = 'hello ' + userName;
  $('#name-input').val('');

  let outputElement = $('#hello-out');
  outputElement.text(message);  
}

function changeTextColor(){
  $(this).css('color', 'green');
}

// "$" means "Hey, JQuery..."
$( document ).ready( onReady );

function onReady(){
    console.log( `JQ` ); // using backticks, not signle quotes
    // click on a button with an ID, run a function
    $( '#getTextButton' ).on( 'click', getText );
} // end onReady

function showText( textToShow ){
    /// - target an element and put some text in it - ///
    // target an element and hold it in a variable
    let el = $( '#hello' ); // # = id
    el.empty(); // empty target el
    el.append( textToShow ); // append text into el
} // end showText

function getText(){
    // target an element by ID & get its .val()
    let texter = $( '#textIn' ).val(); // getter 
    // empty out the input field
    $( '#textIn' ).val( '' ); // setter
    // console log the value
    showText( `you typed: ${ texter }` );
} // end getText
//#endregion

//#region fizzbuzz function
//FizzOrBuzz function takes in a num and returns 'fizz' if divisible by 3,
//'buzz' if divisible by 5, and 'fizzbuzz' if divisible by both.
//otherwise, it just returns the number
function FizzOrBuzz(num) {
	let isDivisThree = false;
	let isDivisFive = false;

//if num divisible by 3, set the three bool true;
if (num % 3 === 0) {
		isDivisThree = true;
   	} 
//if num divisible by 5, set the five bool true
	if (num % 5 === 0) {
		isDivisFive = true;
	} 

	//actual returns
	if (isDivisThree && isDivisFive) {
		return "FizzBuzz"
	}
	else if (isDivisThree && !isDivisFive) {
		return "Fizz";
	}
  else if (!isDivisThree && isDivisFive) {
		return "Buzz";
	}
	else {
		return num;
	}
}
//#endregion

//#region leap year checker - is it leap year?
//function that returns true if the input year is a leap year, otherwise false.
//Years that are divisible by 4 are leap years, 
//but years that are divisible by 100 are not leap years, 
//but years that are divisible by 400 are leap years.
function IsItLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  else if (year % 100 && year % 400 !== 0) {
    return false;
  }
  else if (year % 400 === 0){
    return true;
  }
  else
    return false;
}
//#endregion

//#region blt ingredient checker
// Write a function that accepts an array of ingredients, and determines whether they make a BLT sandwhich. An array is a sandwhich if the first and last items are both "bread", and the middle contains "bacon", "lettuce" and "tomatoes".
// Example clarifying questions:
// Will I always receive an array of string? Yes.
// Can the sandwhich have additional ingredients? Yes, as long as they are inside the "bread"
// Can the ingredients be in any order? Yes, any order inside the "bread"
// Example test cases:
// ["bread", "bacon", "lettuce", "blue cheese", "tomatoes", "bread"] --> true
// ["bread", "lettuce", "bacon", "tomatoes"] --> false (missing "bread" at end)
// ["bread", "lettuce", "tomatoes", "bacon", "bread"] --> true
// ["bread", "lettuce", "tomatoes", "bacon", "bread", "cheese"] --> false ("cheese" is outside the "bread")


//four test cases that cover all the bases ( I think??)
let actualBLT = ['bread', 'tomato', 'bacon', 'lettuce', 'bread' ]
let fancyBLT = ['bread', 'tomato', 'bacon', 'lettuce', 'mayo', 'avocado', 'bread' ]
let potatoNotBLT = ['bread', 'potato', 'bacon', 'lettuce', 'bread' ]
let noBread = ['bread', 'potato', 'bacon', 'lettuce' ]

function bltSammy(array) {
  for(i=0; i<array.length; i++){
      if( array[0] === 'bread' && array[array.length-1] === 'bread') { //I moved these both here in an &&, since the requirement of needing bread on both sides kind of goes together 
        //if it passes the bread test, assess the insides:
        if(array.includes('lettuce') && array.includes('tomato') && array.includes('bacon')) { //great use of includes! I could be understanding it wrong but I believe you can't feed it multiple things, so I split them up. 
          return true;
        }
        else {
          return false;
        }
      }
      else { //(else, if it doesn't have bread on both sides)
        return false;
      }
    }
  }
//#endregion

//#region V  A  P  O  R  C  O  D  E
//From codewars https://www.codewars.com/kata/5966eeb31b229e44eb00007a

//7 kyu 

//Write a function that converts any sentence into a V A P O R W A V E sentence. 
//a V A P O R W A V E sentence converts all the letters into uppercase,
//and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

//examples:
//"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
function vaporcode(string) {
  let array = string.split('');
  let originalLength = array.length;

  for (i = 0; i < originalLength; i++) {
    if (array[i+1] === " ") {
      if (i+1 === array.length -1) { 
        //do nothing
      } else {  
        array[i] += " ";
      }
    }else if (array[i] !== " " && i !== array.length-1){
      array[i] += "  ";
    }
  }
  if (array[array.length-1] === " ") {
    array.splice(array.length-1, 1);
  }

  return array.join('').toUpperCase();
}
//#endregion

//#region previous multiples of three
//from codewars https://www.codewars.com/kata/61123a6f2446320021db987d

//7 kyu 

//Given a positive integer n: 0 < n < 1e6, 
//remove the last digit until you're left with a number that is a multiple of three.
// Return n if the input is already a multiple of three,
// and return null/nil/None/-1 if no such number exists.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9
const prevMultOfThree = n => {

  while(n > 2 && n % 3 !== 0){
    n = Math.floor(n/10);
  }
  return ((n > 2 && n % 3 === 0) ? n : null);
}
//#endregion

//#region Feast of Many Beasts
//from codewars https://www.codewars.com/kata/5aa736a455f906981800360d

//8 kyu

//All of the animals are having a feast! Each animal is bringing one dish. 
//There is just one rule: the dish must start and end with the same letters as the animal's name. 
//For example, the great blue heron is bringing garlic naan 
//and the chickadee is bringing chocolate cake.

//Write a function feast that takes the animal's name and dish as arguments 
//and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

//Assume that beast and dish are always lowercase strings, 
//and that each has at least two letters. beast and dish may contain hyphens and spaces, 
//but these will not appear at the beginning or end of the string. They will not contain numerals.
function feast(beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1]) {
    return true;
  } else
    return false;
}
//#endregion

//#region Replace With Alphabet Position
//from codewars https://www.codewars.com/kata/546f922b54af40e1e90001da

//In this kata you are required to, given a string, 
//replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

//Example: alphabetPosition("The sunset sets at twelve o' clock.")
//Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  
  //todo - this 'solves' it but so inelegantly :P

  let numArray = [] //this will store each number
  text = text.split(''); //convert string to array
  
  for(const letter of text){ //loop each letter of array
    switch (letter) { //evaluate the letter
        case 'A':  
        case 'a': 
          numArray.push(1);
          break;
        case 'B':
        case 'b':
          numArray.push(2);
          break;
        case 'C':
        case 'c':
          numArray.push(3);
          break;
        case 'D':
        case 'd':
          numArray.push(4);
          break;
        case 'E':
        case 'e':
          numArray.push(5);
          break;
        case 'F':
        case 'f':
          numArray.push(6);
          break;
        case 'G':
        case 'g':
          numArray.push(7);
          break;
        case 'H':
        case 'h':
          numArray.push(8);
          break;
        case 'I':
        case 'i':
          numArray.push(9);
          break;
        case 'J':
        case 'j':
          numArray.push(10);
          break;
        case 'K':
        case 'k':
          numArray.push(11);
          break;
        case 'L':
        case 'l':
          numArray.push(12);
          break;
        case 'M':
        case 'm':
          numArray.push(13);
          break;
        case 'N':
        case 'n':
          numArray.push(14);
          break;
        case 'O':
        case 'o':
          numArray.push(15);
          break;
        case 'P':
        case 'p':
          numArray.push(16);
          break;
        case 'Q':
        case 'q':
          numArray.push(17);
          break;
        case 'R':
        case 'r':
          numArray.push(18);
          break;
        case 'S':
        case 's':
          numArray.push(19);
          break;
        case 'T':
        case 't':
          numArray.push(20);
          break;
        case 'U':
        case 'u':
          numArray.push(21);
          break;
        case 'V':
        case 'v':
          numArray.push(22);
          break;
        case 'W':
        case 'w':
          numArray.push(23);
          break;
        case 'X':
        case 'x':
          numArray.push(24);
          break;
        case 'Y':
        case 'y':
          numArray.push(25);
          break;
        case 'Z':
        case 'z':
          numArray.push(26);
          break;
        default: 
          break;
    }
  }
  return numArray.join(' ');
}
//#endregion

