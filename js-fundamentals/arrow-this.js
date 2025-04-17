const Person = function (name) {
  this.firstName = name;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1();
john.sayName2();
john.sayName1.call(dave);
john.sayName2.call(dave);

john.sayName1.apply(dave);
john.sayName2.apply(dave);

john.sayName1.bind(dave)();
john.sayName2.bind(dave)();

const sayNameFromWindow1 = john.sayName1;
sayNameFromWindow1();

const sayNameFromWindow2 = john.sayName2;
sayNameFromWindow2();
