function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s = new Student('nir', 31);
console.log(s);

function fn() {
  console.log(this);
}

let obj = { value: 5 };

fn.call(obj);
fn.apply(obj);
const boundFn = fn.bind(obj);
boundFn();

function greetName() {
  return this.firstName + this.lastName + 'weclome da';
}
const s1 = { firstName: 'ne', lastName: 'ni' };
console.log(greetName.call(s1, 'a', 'b'));
console.log(greetName.apply(s1, ['c', 'd']));
