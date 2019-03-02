// Array 
let persons = [
    { personId: 123, age: 10, name: 'Javier'},
    { personId: 321, age: 20, name: 'Rodriguez'},
    { personId: 231, age: 30, name: 'Olvera'}
];
/*
persons.forEach(p => console.log(p));
let personsFilter = persons.filter(p => p.age > 10);
console.log('Result', personsFilter);

let result = persons.map(p => {
    p.age = p.age * 10;
    return p;
});
console.log(result);

let findPerson = persons.find(p => p.age > 100);
console.log(findPerson);

let everyPerson = persons.every(p => p.age > 100);
console.log(everyPerson);
*/
let functionalPerson = persons
    .filter(p => p.age > 10)
    .map(p => {
        p.age = p.age * 10;
        return p;
    })
    .find(p => p.age > 10);
console.log(functionalPerson);