/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

var divs = document.getElementsByTagName('divs');

function arrayFrom(arrayLikeObject) {
    var divsArr = [].slice.call(arrayLikeObject);
    return divsArr;
}

var converted = arrayFrom(divs);
converted.reduce;

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {
    var sum = 0;
    var nums = [].slice.call(arguments);

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sum += nums[i];
        }
    }
    return sum;
}

sumEvenArguments(1, 2, 6); // 8

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function add(a, b) {
    return a + b;
}

function invokeMax(fn, num) {
    var counter = 0;
    return function () {
        counter++;
        if (counter > num) {
            return 'Maxed Out!';
        }
        return fn.apply(this, arguments);
    };
}

//var addOnlyThreeTimes = invokeMax(add,3);
//addOnlyThreeTimes(1,2) // 3

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/
function doMath(a, b, c) {
    return this.firstName + ' adds ' + (a + b + c);
}

function once(fn, thisArg) {
    var invoked = false;

    return function () {
        if (!invoked) {
            invoked = true;
            return fn.apply(thisArg, arguments);
        }
    };
}

var instructor = { firstName: 'Elie' };

var doMathOnce = once(doMath, instructor);
doMathOnce(1, 2, 3); // "Elie adds 6"

// BONUSES!

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function addFourNumbers(a, b, c, d) {
    return a + b + c + d;
}

function firstNameFavoriteColor(favoriteColor) {
    return this.firstName + "'s favorite color is " + favoriteColor;
}

var person = {
    firstName: 'Elie',
};

function bind(fn, thisArg) {
    var args = [].slice.call(arguments, 2);

    return function () {
        var args2 = [].slice.call(arguments);
        return fn.apply(thisArg, args.concat(args2));
    };
}

//var bindFn = bind(firstNameFavoriteColor, person);
//bindFn('green'); // "Elie's favorite color is green"

bind(addFourNumbers, this, 1, 4)(2, 3); // 10

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"
    
    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function subtractFourNumbers(a, b, c, d) {
    return a - b - c - d;
}

function personSubtract(a, b, c) {
    return this.firstName + ' subtracts ' + (a - b - c);
}

var person = {
    firstName: 'Elie',
};

function flip(fn, thisArg) {
    var args = [].slice.call(arguments, 2);
    return function () {
        var args2 = [].slice.call(arguments);
        var all = args.concat(args2).slice(0, fn.length).reverse();
        return fn.apply(thisArg, all);
    };
}

var flipFn = flip(personSubtract, person);
flipFn(3, 2, 1); // "Elie subtracts -4"

//flip(subtractFourNumbers, this, 1)(2, 3, 4); // -2
