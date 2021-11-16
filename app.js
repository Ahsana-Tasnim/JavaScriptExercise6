/* 
   Ahsana Tasnim
   JavaScriptProgrammingExercise6
   Arrays
*/
//Bracket Literal
let cars = ["Wrangler", "Forester", "Defender", "Land Cruiser"];
//Array Construction
let makes = new Array("Jeep", "Sabaru", "Land Rover", "Toyota");

let add = 'y';

let myNumbers = [];

while (add == 'y'){
    let number = prompt('Add a number to the array');

    if(number != ' ' && !isNaN(number)){
        myNumbers.push(number);
    }

    add = prompt('Continue to add numbers to my array?', 'y');
}