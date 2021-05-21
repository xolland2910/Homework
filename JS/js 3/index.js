let firstNumber;

while (Number.isNaN(+firstNumber) || !firstNumber){
    firstNumber = prompt('Enter first number below:', '0');
}

let secondNumber;

while (Number.isNaN(+secondNumber) || secondNumber === '' || secondNumber === null){
    secondNumber = prompt('Enter second number below:', '0');
}

const operators = ['+', '-', '*', '/', ':'];

let operator = prompt("Enter operator:");
while (!operators.includes(operator)){
    operator = prompt("Enter operator:");
}

function calculator(firstNumber, secondNumber, operator){
    switch (operator) {
        case "+" : {
            return firstNumber+secondNumber;
            break;
        }
        case '-' : {
            return firstNumber-secondNumber;
            break;
        }
        case '*' : {
            return firstNumber*secondNumber;
            break;
        }
        case ('/'||':') : {
            return firstNumber/secondNumber;
            break;
        }
    }
}

console.log(calculator(+firstNumber, +secondNumber, operator));