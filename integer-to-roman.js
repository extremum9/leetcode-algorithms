const ROMAN_NUMERALS = [
  { symbol: 'M', value: 1000 },
  { symbol: 'CM', value: 900 },
  { symbol: 'D', value: 500 },
  { symbol: 'CD', value: 400 },
  { symbol: 'C', value: 100 },
  { symbol: 'XC', value: 90 },
  { symbol: 'L', value: 50 },
  { symbol: 'XL', value: 40 },
  { symbol: 'X', value: 10 },
  { symbol: 'IX', value: 9 },
  { symbol: 'V', value: 5 },
  { symbol: 'IV', value: 4 },
  { symbol: 'I', value: 1 }
];

const integerToRoman = (number) => {
  let result = '';
  for (const { value, symbol } of ROMAN_NUMERALS) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }
  return result;
}

console.log(integerToRoman(3749)); // MMMDCCXLIX
console.log(integerToRoman(58)); // LVIII
console.log(integerToRoman(1994)); // MCMXCIV
