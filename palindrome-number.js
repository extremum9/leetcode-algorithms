const palindromeNumber = (number) => {
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false;
  }

  const original = number;
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + number % 10;
    number = Math.floor(number / 10);
  }

  return original === reversed;
};

console.log(palindromeNumber(121)); // true
console.log(palindromeNumber(-121)); // false
console.log(palindromeNumber(10)); // false
console.log(palindromeNumber(0)); // true
