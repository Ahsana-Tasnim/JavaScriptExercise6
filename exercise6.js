/**
 * Ahsana Tasnim
   Exercise 6
 */

//Step 1
let instructors = ['Carter', 'Cusack', 'Murray', 'Ryan', 'Pieroni'];
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Step 2
console.log(`The 3rd position item is: ${instructors[2]}`);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 3
instructors[3] = 'Burchill';
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 4
instructors.shift();
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 5
console.log(`Names of the instructors are: `);
for(let i = 0; i < instructors.length; i++){
    console.log(instructors[i]);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 6
instructors.unshift('Murphy');
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 7
instructors.push('Croney');
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 8
instructors.sort();
console.log(instructors);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');


//Step 9
console.log(`Names of all the instructors are: `);
for(let i = 0; i < instructors.length; i++){
    console.log(instructors[i]);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Step 10
let instructorsCopy = instructors.slice(2,5);
console.log(instructorsCopy);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Step 11
instructorsCopy.pop();
console.log(instructorsCopy);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

//Step 12
instructorsCopy.forEach(instructor => {
    console.log(instructor);
});