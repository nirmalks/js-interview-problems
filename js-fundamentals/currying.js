function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const addOne = add(1);
const addTwo = addOne(2);
const addThree = addTwo(3);
console.log(addThree);

function add2(a, b) {
  return a + b;
}

const add5 = add2.bind(null, 5);
console.log(add5(10)); // Outputs 15

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedHello = debounce(() => console.log('hello world'), 2000);
debouncedHello();

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const handleResize = throttle(() => {
  // Update element positions
  console.log('Window resized at', new Date().toLocaleTimeString());
}, 2000);

// Simulate rapid calls to handleResize every 100ms
let intervalId = setInterval(() => {
  handleResize();
}, 100);
