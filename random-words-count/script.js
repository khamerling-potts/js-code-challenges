/* Write a function that takes a string of random words and 
returns an object with the unique words as keys (ignoring case) 
and values of the number of times the word appears

Exmaple input/output: 

const str = "Gabba boo dah ugh fpp BOO gabba doo Boo"

console.log(convertToObjectWithCounts(str)) => { gabba: 2, boo: 3, dah: 1, ugh: 1, fpp: 1, doo: 1 }

*/

function convertToObjectWithCounts(str) {
  const strArr = str.split(" ");
  const converted = {};
  for (let word of strArr) {
    if (word.toLowerCase() in converted) {
      converted[word.toLowerCase()]++;
    } else {
      converted[word.toLowerCase()] = 1;
    }
  }
  //   for (let i = 0; i < strArr.length; i++) {
  //     if (strArr[i].toLowerCase() in converted) {
  //       converted[strArr[i].toLowerCase()]++;
  //     } else {
  //       converted[strArr[i].toLowerCase()] = 1;
  //     }
  //   }
  return converted;
}

console.log(
  convertToObjectWithCounts("Gabba boo dah ugh fpp BOO gabba doo Boo")
);
