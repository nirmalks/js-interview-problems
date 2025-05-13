function palindromeIterative(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    let l = s.charAt(left);
    let r = s.charAt(right);

    if (!isAlphaNumeric(l)) {
      left++;
    } else if (!isAlphaNumeric(r)) {
      right--;
    } else if (l.toLowerCase() != r.toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}
const str = 'ABCDCBA';
console.log(palindromeIterative(str));
console.log(palindromeIterative('race a car'));
console.log(palindromeIterative('A man, a plan, a canal: Panama'));

function palindromeRecursive(s) {
  let left = 0;
  let right = s.length - 1;
  return helper(s, left, right);
}

function helper(s, left, right) {
  if (left <= right) {
    let l = s.charAt(left);
    let r = s.charAt(right);
    if (!isAlphaNumeric(l)) {
      return helper(s, left + 1, right);
    } else if (!isAlphaNumeric(r)) {
      return helper(s, left, right - 1);
    } else if (l.toLowerCase() != r.toLowerCase()) {
      return false;
    } else {
      return helper(s, left + 1, right - 1);
    }
  }
  return true;
}

console.log(palindromeRecursive(str));
// console.log(palindromeRecursive('race a car'));
// console.log(palindromeRecursive('A man, a plan, a canal: Panama'));

function palindromeFuncRecursion(s) {
  let left = 0;
  return funcHelper(s, left);
}

function funcHelper(s, left, right) {
  let n = s.length;
  if (left <= Math.floor(n / 2)) {
    return true;
  }
  let l = s.charAt(left);
  let r = s.charAt(n - left - 1);
  if (!isAlphaNumeric(l)) {
    return palindrome(left + 1, s);
  } else if (!isAlphaNumeric(r)) {
    return palindrome(left + 1, s);
  } else if (left.toLowerCase() != r.toLowerCase()) {
    return false;
  }
  return palindrome(left + 1, s);
}
