// ECMA ES6 Class
class Person {
    constructor(id, name = ':D') {
        this.id = id;
        this.name = name;
    }
    
    identify(suffix) {
        return `${this.id} person ${suffix} ${this.name}`;
    }
}

let person = new Person();
console.log(person);
let result = person.identify('Hola');
console.log(result);