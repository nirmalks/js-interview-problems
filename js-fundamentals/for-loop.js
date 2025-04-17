const stu = {
  name: 'nir',
  age: 25,
};

for (const key in stu) {
  console.log(`key ${key} - ${stu[key]}`);
}

Object.keys(stu).forEach((key) => {
  console.log(`key ${key} - ${stu[key]}`);
});

const arr = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((num) => {
  console.log(num);
});

for (const num of arr) {
  console.log(num);
}

console.log(arr.slice(0, 2));
console.log(arr[0], ...arr);

console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);
console.log(Object.assign({}, stu));
console.log({ ...stu });

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(...arr));

const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return {
        value: this.current++,
        done: false,
      };
    } else {
      return {
        value: undefined,
        done: true,
      };
    }
  },
};

let result = iterator.next();
console.log(result);
while (!result.done) {
  result = iterator.next();
}
console.log('generators');
function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}

let gen = numberGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const imObj = Object.freeze({
  name: 'nir',
  age: 30,
});

imObj.name = 'sry';

console.log(imObj);

const person = new Map();
person.set('a', 1);
person.set('b', 2);
person.set('c', 3);

console.log(person.get('a'));
for (const key of person) {
  console.log(`${key} - ${person[key]}`);
}
