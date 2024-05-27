/*Question 1
Create an array named fruits that contains the following string
elements: "apple", "banana", "mango", "orange".*/
var fruits = ["apple", "banana", "mango", "orange"]; // declared array as fruits and assigned values as apple banana mango and orange
console.log(fruits);
/*Question 2
Declare an array named numbers that can contain only number
elements and initialize it with the values 10, 20, 30, and 40.*/
var numbers = [10, 20, 30, 40]; // declared array as numbers and assigned values as 10 20 30 and 40
console.log(numbers);
/*Question 3
Access the third element of the fruits array and assign it to a
variable named thirdFruit.*/
var thirdFruit = fruits[2]; // third element of array assigned to variable thirdFruit 
console.log(thirdFruit);
/*Question 4
Change the second element of the numbers array to 25.*/
numbers[1] = 25; // changed the second element of the array
console.log(numbers);
/* Question 5
Add the element "grape" to the end of the fruits array using the
method.*/
fruits.push("graps"); // push method adds element to the end of array
console.log(fruits);
/* Question 6
Remove the last element from the fruits array using the
method and assign it to a variable named lastFruit.*/
var lastFruit = fruits.pop(); // pop method removes last element of array and return removed element
console.log(lastFruit);
/* Question 7
Remove the first element from the fruits array using the
method and assign it to a variable named firstFruit.*/
var firstFruit = fruits.shift(); // shift method removes first element from array and return removed element
console.log(firstFruit);
/* Question 8
Add the element "kiwi" to the beginning of the fruits array
using the method.*/
fruits.unshift("kiwi"); // unshift method adds element to the beginning of array
console.log(fruits);
/* Question 9
Remove 2 elements from the fruits array starting from index 1
using the method.*/
fruits.splice(1, 2);
console.log(fruits);
/*Question 10
Insert the elements "pineapple" and "pear" at index 2 of the
fruits array using the method. */
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
/* Question 11
Create a new array named citrusFruits that contains the first
two elements of the fruits array using the method.*/
var citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
/* Question 12
Create a new array named lastTwoFruits that contains the last
two elements of the fruits array using the method.
*/
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
