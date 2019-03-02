var message = '';

function findPerson() {
    message = 'Finding';
    let findFn = function searchKey(){
        message = 'Override';
    };
    findFn();
}

findPerson();
console.log(message);