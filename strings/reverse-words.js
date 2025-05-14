var reverseWords = function (s) {
  return s
    .trim()
    .split(' ')
    .filter((e) => e !== '')
    .reverse()
    .join(' ');
};

var reverseWordsStack = function (s) {
  let stack = [];
  let word = '';
  let n = s.length;
  let res = '';
  for (let i = 0; i < n; i++) {
    let c = s[i];

    if (c !== ' ') {
      word += c;
    } else {
      if (word.length) {
        stack.push(word);
        word = '';
      }
    }
  }

  if (word.length > 0) {
    stack.push(word);
  }
  while (stack.length) {
    res += stack.pop();
    if (stack.length > 0) {
      res += ' ';
    }
  }
  return res;
};

var reverseWordsRegularExp = function (s) {
  let split = s.trim().split(/\s+/);
  let res = '';
  let n = split.length - 1;
  for (let i = n; i >= 0; i--) {
    res += split[i];
    if (i !== 0) res += ' ';
  }

  return res;
};
