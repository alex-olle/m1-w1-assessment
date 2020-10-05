// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  /*if (typeOf x != number || typeOf y != number ) {
    return false;
  } else {*/
  return x * y;
  //}
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let sum = 0;
  /*numbers.forEach( function (element) {
    sum += numbers[element];
  })*/
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  let highest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    } else {
      continue;
    }
  }
  return highest;
}

// Return the longest string in an array
function longestString(strings) {
  //
  let numOfLetters = 0;
  let longest = "";

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > numOfLetters) {
      numOfLetters = strings[i].length;
      longest = strings[i];
    } else {
      continue;
    }
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
  if (wordsArr.length === 0) {
    return false;
  }

  let counter = 0;
  let uniqueArr = "";

  for (let i = 0; i < wordsArr.length; i++) {
    for (let j = 0; j < wordsArr.length; j++) {
      if (wordsArr[i] === wordsArr[j]) {
        counter++;
      }
    }
    if (counter === 1) {
      uniqueArr = wordsArr[i];
    }
  }
  return uniqueArr;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  let highest = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > highest) {
        highest = matrix[i][j];
      } else {
        continue;
      }
    }
  }
  return highest;
}