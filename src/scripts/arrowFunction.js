// Arrow function
let getId1 = function() {
    return 123;
};

let getId2 = () => {
    return 123;
};

let getId3 = (prefix) => {
    return prefix + 123;
};

let getId4 = prefix => prefix + 123;

console.log(getId1());
console.log(getId2());
console.log(getId3(1));
console.log(getId4(1));
