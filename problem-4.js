function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  } else {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];
      //  if (arr1[i] !== arr2[i]) {   // compare values, not just type
      // return false; ---> real answer
      if (typeof val1 !== typeof val2) {
        return false;
      }
    }
  }
  return true;
}

const output = isSame([11, 12], [21, 23]);
console.log(output);
