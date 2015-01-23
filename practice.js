//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}

// PROBLEM 1
// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.
// Code Here
var inner = outer();

// Once you do that, invoke inner.
// Code Here
var result = inner();



// PROBLEM 2
var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

// Above you're given a callFriend function that returns another function.
// Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
// Code Here
var inner = callFriend();
var result = inner("435-215-9248");
console.log(result);



// PROBLEM 3
// Write a function called makeCounter that makes the following code work properly.
// Code here
var makeCounter = function() {
  var i = 1;
  return function() {
    return i++;
  }
};

var count = makeCounter();
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log(count()); // 4



// PROBLEM 4
// Write a function that accepts another function as it's only argument and returns a new function
// (which invokes the original function that was passed in) that can only ever be executed once.
// Once completed, add a second arguments that allows the function to be invoked N number of times.
// After the function has been called N number of times, console.log('STAHHP');
// Code here
var outerFn = function(func, nTimes) {
  var count = 0;  
  return function() {
    if (count >= nTimes) {
      console.log('STAHHP');
      return
    }
    count++;
    return func();
  }
};

var timesToLoop = 5;
var innerFn = outerFn(function(){
  alert("Not there yet - try again");
}, timesToLoop);

for (var i = 0; i <= timesToLoop; i++) {
  if (innerFn()) {
    console.log(innerFn());
  }
}
