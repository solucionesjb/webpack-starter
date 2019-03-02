function printCards(num1, ...nums) {
    console.log('num1', num1);
    nums.forEach(p => console.log(p));
}

printCards(1, 2, 3);