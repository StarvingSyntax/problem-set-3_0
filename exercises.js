const swap = (str) => {
  let strArr = str.split(' ');
  let result = strArr.map(word => {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.substring(1,word.length - 1) + word[0];
  }); 
  return result.join(' ');
};

const multiplyList = (arr1, arr2) => {
  const newArray = new Array(arr1.length); //create empty array.
  newArray.fill(0, 0, newArray.length)

  return newArray.map((_, index) => {
    return arr1[index] * arr2[index];
  })
}

const sequence = (integer) => {
  const preNumIterate = new Array(integer);
    preNumIterate.fill(0, 0, integer)
  // preNumIterate[integer - 1] =  integer;

  preNumIterate.map((value, index) => {
    preNumIterate[index] = index + 1;
  });
  console.log(preNumIterate)
}

// The below code connects this JS fil to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
  wordCap,
}
