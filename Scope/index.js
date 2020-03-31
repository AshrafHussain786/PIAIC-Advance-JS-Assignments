// ----------------------------
//  example : 1
/*

var userName = "Ameen ALam";   // Global Scope

function modifyUserName() {
        userName = "Daniyal Nagori"; // Local Scope
    };

function showUserName() {
        alert(userName);        // Local Scope
    };

alert(userName); // display Ameen Alam          // Display Global Variable

modifyUserName();
showUserName();// display Daniyal Nagori        // Display Local Variable

*/

// --------------------------
//  example : 2

/* 
function createUserName() {
    userName = "Ameen Alam";  // Local Scope
}

function modifyUserName() {
    if(userName)
        userName = "Daniyal Nagori";    // Local Scope
};

function showUserName() {
    alert(userName);            // Local Scope
}

createUserName();
showUserName(); // Ameen Alam   // Display Local Variable

modifyUserName();
showUserName(); // Daniyal Nagori // Display Local Variable

 */




// --------------------------
//  example : 3
/* 

function createUserName() {
    var userName = "Ameen Alam";        // Local Scope
}

function showUserName() {
    alert(userName);            // Local Scope
}

createUserName();               // Display Local Variable
showUserName(); // throws error: userName is not defined      // Can't Display Local Scope Variable of another Function

 */





// --------------------------
//  example : 4


/* 
var userName = "Ameen Alam";            // Global Scope

function ShowUserName()
{
    var userName = "Daniyal Nagori";    // Local Scope

    alert(userName); // "Daniyal Nagori"        // // Display Local Variable
}

ShowUserName();

alert(userName); // Ameen Alam          // Display Global Variable

 */



// --------------------------
//  example : 5


/* 
function NoBlockLevelScope(){
    
    if (1 > 0)
    {
        var myVar = 22;         // Block Level Scope

    }

    alert(myVar);
}

NoBlockLevelScope();            // Will Display Block Variable
 */



// --------------------------
//  example : 6


/* 
var age = 100;          // Global Scope
function go(){
 var age = 200;         // Local Scope
 var hair =  'black';   // Local Scope
 console.log(age);
 console.log(hair);
}
go();                   // Will Display Local Variables
console.log(age);       // Will Display Global Variable

// OUTPUT  200 
// OUTPUT  black 
// OUTPUT  100 
 */



// --------------------------
//  example : 7


/* 

if (true) {
   // userName is in the global scope because of the 'var' keyword
   var userName = 'Ameen Alam';                 // Local Scope
   console.log(userName); // output 'Ameen Alam'
   // age is in the local scope because of the 'let' keyword
   let age = 20;                                // Block Level Scope
   console.log(age); // output 20
   // skills is in the local scope because of the 'const' keyword
   const skills = 'JavaScript';                 // Block Level Scope
   console.log(skills); // output 'JavaScript'
}
console.log(userName); // output 'Ameen Alam'   // Will display Local Variable
console.log(age); // Uncaught ReferenceError: age is not defined        // Can't display block level variable
console.log(skills); // Uncaught ReferenceError: skills is not defined  // Can't display block level variable


*/


// --------------------------
