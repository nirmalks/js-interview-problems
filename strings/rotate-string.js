var rotateString = function (s, goal) {
  if (s.length != goal.length) return false;
  return (s + s).indexOf(goal) != -1;
};

var rotateStringSlower = function (s, goal) {
  if (s.length != goal.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (rotate(s, i, goal)) {
      return true;
    }
  }
  return false;
};

function rotate(s, rotation, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] != goal[(i + rotation) % goal.length]) {
      return false;
    }
  }

  return true;
}
