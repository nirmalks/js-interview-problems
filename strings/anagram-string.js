var isAnagramNLogN = function (s, t) {
  return s.split('').sort().join('') == t.split('').sort().join('');
};

var isAnagramMap = function (s, t) {
  let map = new Map();

  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    } else {
      map.set(c, 1);
    }
  }

  for (let c of t) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    } else {
      return false;
    }
  }

  for (const [key, value] of map.entries()) {
    if (value != 0) {
      return false;
    }
  }

  return true;
};

var isAnagramArray = function (s, t) {
  let arr = new Array(26).fill(0);

  for (let c of s) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let c of t) {
    arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]--;
  }

  for (let c of arr) {
    if (c != 0) {
      return false;
    }
  }

  return true;
};
