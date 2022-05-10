// 1.

function difference(a,b)  {
  return a - b;
}

// 2.

function product(a,b) {
  return a * b;
}

// 3.

function printDay(number)  {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return daysOfWeek[number - 1];
}

// 4.

function  lastElement(array)  {
  return array.pop();
}

// 5.

function numberCompare(a, b)  {
  if(a === b){
    return "Numbers are equal";
  }
  else if(a > b){
    return "First is greater";
  }
  else  {
    return "Second is greater";;
  }
}

// 6.

function singleLetterCount(word, letter)  {
  let count = 0;
  for(let i = 0; i < word.length; i++)  {
    if(word[i].toLowerCase() === letter.toLowerCase())  {
      count++;
    }
  }
  return count;
}

// 7.
function multipleLetterCount(string)  {
  return Object(string);
}
// nope no idea how to do this one

// 8.
function arrayManipulation(array, command, location, value) {
  if(command === 'remove' && location === 'end')  {
    return array.pop();
  }
  else if(command === 'remove' && location === 'beginning') {
    return array.shift();
  }
  else if(command === 'add' && location === 'end') {
    array.push(value);
    return(array);
  }
  else if(command === 'add' && location === 'beginning') {
    array.unshift(value);
    return(array);
  }
}

// 9.

function isPalindrome(string) {
  if(string.split('').reverse().join('') === string) {
  return true;
  }
  return false;
}
