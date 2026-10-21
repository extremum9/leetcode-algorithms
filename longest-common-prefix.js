const longestCommonPrefix = (strings) => {
  if (strings.length === 1) {
    return strings[0];
  }

  const sortedStrings = strings.toSorted();
  const first = sortedStrings[0];
  const last = sortedStrings.at(-1);
  let prefix = '';

  for (let index = 0; index < Math.min(first.length, last.length); index++) {
    if (first[index] !== last[index]) {
      break;
    }
    prefix += first[index];
  }

  return prefix;
}

console.log(longestCommonPrefix(['flower','flow','flight'])); // 'fl'
console.log(longestCommonPrefix(['dog','racecar','car'])); // ''
