function convertToRoman(numToConvert) {
  // list all relevant numbers and numerals
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  // create an empty string for the result
  let result = "";

  // loop through the numbers while the numToConvert is greater than the number, keep looping
  numbers.forEach(function (number, i) {
    while (numToConvert >= number) {
      // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
      result += roman[i];
      numToConvert -= number;
    }
  });

  return result;
}

// SOME TEST CASES

console.log(convertToRoman(45));
// should return the string XLV

console.log(convertToRoman(55));
// should return the string LV

console.log(convertToRoman(400));
// should return the string CD

console.log(convertToRoman(500));
// should return the string D

console.log(convertToRoman(900));
// should return the string CM

console.log(convertToRoman(1000));
// should return the string M
