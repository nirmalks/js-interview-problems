var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  let n = strs.length;
  let prefix = strs[0];

  for (let i = 1; i < n; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }

  return prefix;
};
