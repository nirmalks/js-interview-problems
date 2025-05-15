var isIsomorphic = function (s, t) {
  return transform(s) === transform(t);
};

function transform(s) {
  let map = new Map();
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      const existing = map.get(s[i]);
      map.set(s[i], existing);
      str += existing;
    } else {
      map.set(s[i], i);
      str += i;
    }
    str += ' ';
  }

  return str;
}

var isIsomorphicSlower = function (s, t) {
  if (s.length != t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) != t.indexOf(t[i])) {
      return false;
    }
  }

  return true;
};
