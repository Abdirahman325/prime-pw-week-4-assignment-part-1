console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  console.log( 'in hello' );
}
 
function returner() {
  console.log( ' in returner' );
  let answer = 'Hello world!';
  return answer;
 }
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

returner();

console.log( 'running returner:', returner());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log( 'running helloName:', helloName('Abdirahman') );
  let answer = ' Hello Abdirahman!';
  return answer;
}
// Remember to call the function to test

console.log( 'running helloName:', helloName());

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  console.log( 'in addNumbers:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log( 'running addNumbers with 9 & 10:', addNumbers(9, 10) );

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdnumber){
console.log( ' in multplyThree:', firstNumber, secondNumber, thirdnumber);
let answer = firstNumber * secondNumber * thirdnumber;
return answer;
}

console.log( ' running multiplyThree with 4 & 8 & 5:', multiplyThree(4, 8, 5));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log( ' in isPositive:', number);
  if ( number > 0 ){
    return true;
  }
    if ( number < 0){
    return false
    }
  }
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

console.log( ' running isPositive:', isPositive(7));
console.log( ' running isPositive:', isPositive(0));
console.log( ' running isPositive:', isPositive(-7));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let wings = [ 'lemon pepper', 'garlic parmaesean', 'buffalo', 'mild']
function getLast( wings ) {
if (wings.length > 0){
  return wings[wings.length - 1];
}
 else {
  return false
 }
  
}
console.log(getLast(wings));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let array1 = ['10', '20', '30', '40']

function find(value, array){
  for( let item of array){
    if (value === item){
      return true;
    }
}
return false;
}
console.log(find('10', array1));
console.log(find('40', array1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
