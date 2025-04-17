// 'use strict';

const obj = { name: 'John', age: 34 };
// Object.preventExtensions(obj);
// Object.freeze(obj);

Object.seal(obj);
obj.age = 30; // This will not work, as the object is not extensible
delete obj.name;
console.log(obj.age); // undefined

const isEmpty = (obj) => Object.keys(obj).length === 0;
const obj2 = {};
console.log(isEmpty(obj2));
