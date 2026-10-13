const ROMAN_NUMERALS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const romanToInteger = (string) => {
  if (string.length === 1) {
    return ROMAN_NUMERALS[string];
  }

  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    const currentValue = ROMAN_NUMERALS[string[index]];
    const nextValue = ROMAN_NUMERALS[string[index + 1]];
    if (currentValue < nextValue) {
      sum += nextValue - currentValue;
      index++;
    } else {
      sum += currentValue;
    }
  }

  return sum;
};

console.log(romanToInteger('III')); // 3
console.log(romanToInteger('LVIII')); // 58
console.log(romanToInteger('MCMXCIV')); // 1994
