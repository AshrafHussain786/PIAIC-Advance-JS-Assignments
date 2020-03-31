
// --------------------------
// Example 1

let x = 1;      // Global Variable

if (x === 1) {
  let x = 2;    // Local / Block Variable

  console.log(x); // Will display Local Variable
  // expected output: 2
}

console.log(x);   // Will display Global Variable
// expected output: 1



// --------------------------
// Example 2

let x = 1;    // Global Variable

if (x === 1) {
  let x = 2;  // Local / Block Variable

  console.log(x);   // Will display Local Variable
  // expected output: 2
}

console.log(x);   // Will display Global Variable
// expected output: 1



// --------------------------
// Example 3

var x = 'global';     // Global Variable
let y = 'global';     
console.log(this.x); // "global"    // Will display Global Variable
console.log(this.y); // undefined   // Reason: let does not define at the top level of programs and functions.


// --------------------------
// Example 4

var Thing;      // Global Variable

{
  let privateScope = new WeakMap();
  let counter = 0;

  Thing = function() {
    this.someProperty = 'foo';
    
    privateScope.set(this, {
      hidden: ++counter,
    });
  };

  Thing.prototype.showPublic = function() {
    return this.someProperty;
  };

  Thing.prototype.showPrivate = function() {
    return privateScope.get(this).hidden;
  };
}

console.log(typeof privateScope);
// "undefined"                    // Reason: WeakMap constructor is not defined.

var thing = new Thing();          // New constructor "Thing" is defined relating to "thing" variable.

console.log(thing);
// Thing {someProperty: "foo"}    // Reason: Thing constructor is defined

thing.showPublic();
// "foo"                          // Reason: showPublic function display someProperty of "thing" variable.

thing.showPrivate();
// 1                              // Reason: showPrivate function display value of counter which became 1 due to ++counter.


// --------------------------
// Example 5


if (x) {
    let foo;                    // Local Scope
    let foo; // SyntaxError thrown. // Redeclaration of a variable in the same function will raise a SybtaxError.
  }

// --------------------------
// Example 6

let x = 1;
switch(x) {
  case 0:
    let foo;                  // Local Scope
    break;
    
  case 1:
    let foo; // SyntaxError for redeclaration. // Redeclaration of a variable in the same block / function will raise a SybtaxError.
    break;
}


// --------------------------
// Example 7

let x = 1;

switch(x) {
  case 0: {
    let foo;                // Local Scope
    break;
  }  
  case 1: {
    let foo;                // Redeclaration of a variable in another block / function will not raise a SybtaxError.
    break;
  }
}


// --------------------------
// Example 8

function do_something() {
    console.log(bar); // undefined      // Reason: var define at the top level of programs and functions but it is not initialized yet.
    console.log(foo); // ReferenceError // Reason: let is not define at the top level of programs and functions.
    var bar = 1;
    let foo = 2;
  }


// --------------------------
// Example 9

// prints out 'undefined'
console.log(typeof undeclaredVariable); // Reason: undeclaredVariable is not declared.

// results in a 'ReferenceError'
console.log(typeof i);       // Reason: let is not define at the top level of programs and functions.
let i = 10;


// --------------------------
// Example 10

function test(){
    var foo = 33;
    if(foo) {
       let foo = (foo + 55); // ReferenceError  // Reason: let is not define at the top level of programs and functions.
    }
 }
 test();


// --------------------------
// Example 11

function go(n) {
    // n here is defined!
    console.log(n); // Object {a: [1,2,3]}
  
    for (let n of n.a) { // ReferenceError  // Reason: let is having block scope and it exist only within the block.

      console.log(n);
    }
  }
  
  go({a: [1, 2, 3]});


// --------------------------
// Example 12

var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11  // Reason: var a is redeclared.
  console.log(b);  // 22  // Reason: let b is having block scope and it exist only within the block.
} 

console.log(a); // 11     // Reason: var a is redeclared.
console.log(b); // 2      // Reason: var b is having Global scope and can be access in programs and functions.


// --------------------------
// Example 13

let x = 1;

{
  var x = 2; // SyntaxError for re-declaration  // Reason: x was already declared before the block hence re-declaration of x is created SyntaxError.
}


// --------------------------
// Example 14




// --------------------------
// Example 15




// --------------------------
// Example 16




// --------------------------
// Example 17




// --------------------------
// Example 18




// --------------------------
// Example 19




// --------------------------
// Example 20




// --------------------------
// Example 21




// --------------------------
