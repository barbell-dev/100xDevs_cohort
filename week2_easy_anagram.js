function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  a1 = [];
  a2 = [];
  for (let i of str1) {
    a1.push(i);
  }
  for (let i of str2) {
    a2.push(i);
  }
  a1.sort();
  a2.sort();
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) {
      return false;
    }
  }
  return true;
}
let result = isAnagram("ollxh", "hello");
console.log(result);
