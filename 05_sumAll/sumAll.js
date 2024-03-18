const sumAll = function(num1, num2) {
  //Check for negative or non-numbers and return 'ERROR'
  if(typeof num1 != "number" || typeof num2 != "number"){
    return 'ERROR';
  }
  if(num1 < 0 || num2 < 0) {
    return 'ERROR';
  }

  //Assign biggest and smallest numbers
  let biggestNum, smallestNum;
  if(num1>num2){
    biggestNum = num1;
    smallestNum = num2;
  } else {
    biggestNum = num2;
    smallestNum = num1;
  }
  //make a loop that creates an array between the biggest and smallest numbers
  let arrayOfAllNumbers = [];
  for (let i = biggestNum; i>=smallestNum; i--) {
    arrayOfAllNumbers.push(i);
  }
  //Make a loop that adds together all the numbers of the array
  let sumOfNumbers = 0;
  for(number of arrayOfAllNumbers){
    sumOfNumbers += number;
  }
  return sumOfNumbers;
};

// Do not edit below this line
module.exports = sumAll;
