// ECMA ES6 Herencia
class Engine {
    constructor(){
        this.type = 'Hybrid';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Car extends Engine {
    constructor() {
        super();
    }

    start() {
        return `Car to start ${this.type} ${super.start()}`;
    }
}

let car = new Car();
console.log(car.start());
