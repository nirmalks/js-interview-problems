function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
console.log(Dog.prototype.constructor);
const dog = new Dog('rit');
console.log(dog.makeSound());
