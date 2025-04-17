let user = { name: 'John Doe' };

const desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(desc);

Object.defineProperty(user, 'name', {
  writable: false,
  value: 'John Doe2',
});
user.name = 'heelo';
console.log(user.name);

for (let prop in user) {
  console.log(prop);
}

Object.defineProperty(user, 'name', {
  enumerable: false,
});
console.log('after enum false');
for (let prop in user) {
  console.log(prop);
}

Object.defineProperty(user, 'name', {
  configurable: false,
});

delete user.name;
console.log(user.name);
