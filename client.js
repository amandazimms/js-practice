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



//my alterations to Jackie's code

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



//jackie's code with my comments
  function bltSammy(array) {
    for(i=0; i<array.length; i++){
        if( array[0] === 'bread') {
            return true; //problem here is that if it has bread as the first element, it returns right away without assessing other stuff
        }
        else if( array.includes('lettuce', 'tomato', 'mayo')); { //small syntax thing - should be no semicolon in this line
            return true; //similar problem - no chance to assess if  the last ingredient is bread
        }
        else if(array.length-1 === 'bread'){ //I think this else is underlined red because of the semicolon a few lines up I mentioned
            console.log('You have yourself a BLT!'); //love these descriptive console logs - VERY helpful when understanding what is going right/wrong with your code. 
        }
        else {
            console.log('This is not a BLT!');
        }
    }
        }  // end bltSammy