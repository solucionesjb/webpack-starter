// This
let o = {
    personId: 10,
    getId: function() {
        return this.personId;
    }
};

let newPerson = {
    personId: 10 + o.personId
};

console.log(o.getId.call(newPerson));