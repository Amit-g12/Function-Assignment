//Question1
//Create one function with zero parameter having a console statement;

function Hello() {
    console.log("Classmate");
    
}
Hello();

//Question2
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".

function addition(a,b) {
    result = a + b;
    console.log(result);
    
}
addition(3,4);

//Question3
//Create one arrow function.

const oneArror = (() => {
    console.log("Hi");
})

oneArrow();


//Question4.
//Print output: 

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();

//Question5.
//Print output: 

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//Question6.
//Print output

var x = 21;
a();
b();
console.log(a);
a = function() { 
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


//Question7.
//Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    let result = 1;
    if (n == 0 || n == 1){
      return result;
    }
    else
    {
        for(var i = n; i >= 1; i--)
        {
            result = result * i;
        }
        return result;
    }  
}
let n = 4;
result = factorial(n)
console.log("The factorial of " + n + " is " + result);