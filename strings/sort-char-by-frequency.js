/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  let res = '';
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  let list = [];
  for (const [k, v] of map.entries()) {
    list.push(k);
  }
  list.sort((a, b) => map.get(b) - map.get(a));

  for (const c of list) {
    let count = map.get(c);
    for (let i = 0; i < count; i++) {
      res += c;
    }
  }
  return res;
};
