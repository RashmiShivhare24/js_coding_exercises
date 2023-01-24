// Note: Be sure to check out all the exercises corresponding .md files (in docs)!

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let VAT = (originalPrice / 100) * vatRate;
  VAT = Number.isInteger(VAT) ? Number(VAT + originalPrice).toFixed(0) : Number(VAT + originalPrice).toFixed(2);
  return Number(VAT);
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let salePrice = (originalPrice / 100) * reduction;
  salePrice = Number.isInteger(salePrice) ? Number(originalPrice - salePrice).toFixed(0) : Number(originalPrice - salePrice).toFixed(2);
  return Number(salePrice);
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let position;
  let length;

  if (str.length % 2 === 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  /* Splitting word into array, reversing the array & then joining all elements of array into string */
  let splitWord = word.split("");
  let reverseArray = splitWord.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
  // Can be refactored to 1 LOC: word.split().reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reversedArray = [];
  let reversedWord = "";

  for (let word of words) {
    reversedWord = word.split("").reverse().join("");
    reversedArray.push(reversedWord);
  }
  return reversedArray;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for (let user of users) {
    if (user.type === "Linux") {
      count += 1;
    }
  }
  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let average = "";
  let sum = 0;
  for (let number of scores) {
    sum += number;
  }
  average = Number.isInteger ? (sum / scores.length).toFixed(2) : (sum / scores.length).toFixed(0);
  return Number(average);
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 === 0 && n % 5 === 0)
    return ("fizzbuzz");
  else if (n % 5 === 0)
    return ("buzz");
  else if (n % 3 === 0)
    return ("fizz");
  else
    return (n);
}
