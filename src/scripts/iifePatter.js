//IIFE Pattern
(function () {
    console.log('function1');
    (function () {
        console.log('function2');
    })();
    (function () {
        console.log('function3');
    })();
})();