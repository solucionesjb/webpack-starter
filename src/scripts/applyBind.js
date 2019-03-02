// This
let o = {
    personId: 10,
    getId: function(title, action) {
        return `${title} - ${this.personId}\n - ${action}`;
    },
    getId2: function() {
        return `${this.personId}`;
    }
};

let newPerson = {
    personId: 20
};

console.log(o.getId.apply(newPerson, ['Hola', 'mundo']));
let newFn = o.getId.bind(newPerson, 'Hola', 'mundo');
console.log(newFn());
let newFn2 = o.getId2.bind(newPerson);
console.log(newFn2());