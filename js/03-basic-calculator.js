// IMPORT THE MODULE
import { calculate, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "./modules/calculator.js";
function main() {

        // COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
        var number1 = Number(window.prompt("Please enter the first number\n"));
        var number2 = Number(window.prompt("Please enter the second number\n"));
    
        // CHECK TO SEE WHAT OPERATION THEY'RE USING
        var operation = window.prompt("Please enter + or - or * or / ");
        calculate(number1, number2, operation);

}

main();