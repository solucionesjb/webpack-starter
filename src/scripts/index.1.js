//IIFE Pattern
/*let app = (function () {
    let personId = 123;

    return function (num) {
        return personId + num;
    };
})();

console.log(app(20)); */

function sumaIva(change) {
    return function(amount) {
        return change * amount;
    };
};

let iva = sumaIva(0.16);
console.log(iva(20));
console.log(iva(30));
console.log(iva(50));
console.log(iva);

