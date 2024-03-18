const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(numberArray) {
  let total = 0;
	for(number of numberArray){
    total += number;
  }
  return total;
};

const multiply = function(numberArray) {
  let total = 1;
	for(number of numberArray){
    total *= number;
  }
  return total;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(number) {
	switch(number){
    case 0:
    case 1:
      return 1;
    default:
      let factorialResult = 1;
      for(let i=number;i>1;i--) {
        factorialResult *= i;
      }
      return factorialResult;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
