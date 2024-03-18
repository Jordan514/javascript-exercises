const removeFromArray = function(array, ...valuesToRemove) {
  // let newArray = [];
  // for (const item of array){

  //   for(const valueToRemove of valuesToRemove) {
  //     if(item == valueToRemove) {
  //       continue;
  //     } else {
  //       newArray.push(item);
  //     }
  //   }

  // }
  // return newArray;

  // let newArray = [];
  // for (const item of array){
  //   for(const valueToRemove of valuesToRemove) {
  //     if(item != valueToRemove) {
  //       newArray.push(item);
  //     } else {
  //       continue;
  //     }
  //   }
  // }
  // return newArray;

  let newArray = [];
  for (const valueToRemove of valuesToRemove){
    for(const item of array) {
      if(item !== valueToRemove) {
        newArray.push(item);
      } else {
        continue;
      }
    }
    array = newArray;
    newArray = [];
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
