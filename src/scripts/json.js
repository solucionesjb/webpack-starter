// JSON
let persona = [{
    id: 1,
    edad: 36
},
{
    id: 2,
    edad: 35
}];

console.log(JSON.stringify(persona));

let obj = `[{"id":1,"edad":36},{"id":2,"edad":35}]`;
console.log(JSON.parse(obj));
