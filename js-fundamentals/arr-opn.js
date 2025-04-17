let arr = [1, 2, 3];

arr.push(4); // 1,2,3,4
arr.unshift(0); // 0,1,2,3,4
arr.splice(2, 0, 1.5); // 0,1,1.5,2,3,4

arr.pop(); // 0,1,1.5,2,3
arr.shift(); // 1,1.5,2,3
arr.splice(1, 1); // 1,2,3

console.log(arr);

const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
console.log(shallowCopyArray);

const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
console.log(shallowCopyObject);

const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject);
