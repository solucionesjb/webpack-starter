//Destructuring Arrays
let personsId = [1, 2, 3, 4];
let [, person2, ...persons] = personsId;
//console.log('person1', person1);
console.log('person2', person2);
console.log('person3', persons);
