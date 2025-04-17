function createAnimal(type) {
  if (type === 'dog') {
    return { sound: 'woof' };
  } else if (type === 'cat') {
    return { sound: 'meow' };
  }
}
const dog = createAnimal('dog');
const cat = createAnimal('cat');
