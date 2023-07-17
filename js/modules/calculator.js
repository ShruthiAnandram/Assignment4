
// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(number1, number2, operation) {

    // CALL THE APPROPRIATE FUNCTION
    switch(operation) {
         case "+" : addNumbers(number1, number2);
                break;
         case "-" : subtractNumbers(number1, number2);
                break;
         case "*" : multiplyNumbers(number1, number2);
                break;
         case "/" : divideNumbers(number1, number2);
                break;
         default : window.alert("Wrong choice of operation. Try again..");
    }
}



// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
function addNumbers(number1, number2) {
    var result;
    result = number1 + number2;
    console.log("The sum of the numbers is " + result);
    return result ;
}

// SUBTRACT FUNCTION
function subtractNumbers(number1, number2) {
    var result;
        if(number1 > number2) {
           result = number1 - number2;
        }
        else {
            result = number2 - number1;
        }
        console.log("The difference of the numbers is " + result);
       return result ;
 }

// MULTIPLY FUNCTION
function multiplyNumbers(number1, number2) {
    var result;
        result = number1 * number2;
        console.log("The product of the numbers is " + result);
       return result ;
}

// DIVIDE FUNCTION
function divideNumbers(number1, number2) {
    var result;
        if(number2 != 0) {
            result = number1 / number2;
            console.log("The quotient of the numbers is " + result);
           return result ;
        }
        else {
            window.alert("The divisor cannot be 0");
        }
      
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {calculate, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers};