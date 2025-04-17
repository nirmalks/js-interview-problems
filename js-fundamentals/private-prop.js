class Person {
  _name;

  get name() {
    return this._name;
  }
  set name(newName) {
    // Setter
    if (newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.log('Invalid name');
    }
  }
}

const nir = new Person();
nir.name = '';
console.log(nir.name);
