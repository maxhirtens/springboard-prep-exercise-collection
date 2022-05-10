// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// function isPangram(sentence) {
//   for (let char of ('abcdefgjklmnopqrstuvwxyz')) {
//     let lowerCased = sentence.toLowerCase();
//     if(lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true
// }

const array = [1,2,3,4,5,6,7,8];
for (let splitNums of array)  {
  console.log(splitNums);
}
// for(let i = 1; i<=array.length; i++)  {
//   console.log(i);
// }
