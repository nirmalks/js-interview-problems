var removeOuterParentheses = function (s) {
  const arr = [];
  let opened = 0;
  for (let c of s) {
    if (c == '(') {
      opened++;
    }
    if (opened > 1) {
      arr.push(c);
    }
    if (c == ')') {
      opened--;
    }
  }
  return arr.join('');
};

const res = removeOuterParentheses('');
