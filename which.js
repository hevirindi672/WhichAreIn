function inArray(array1, array2) {
  const result = [];

  for (const str1 of array1) {
    for (const str2 of array2) {
      if (str2.includes(str1) && !result.includes(str1)) {
        result.push(str1);
      }
    }
  }

  return result.sort();
}


console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
// Output: ["arp", "live", "strong"]

console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
// Output: []
