const removeFromArray = function(array, valuesToRemove) {
  let newArray = [];
  for (const item of array){
    if(item == valuesToRemove) {
      continue;
    } else {
      newArray.push(item);
    }
  }
  array = newArray;
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
