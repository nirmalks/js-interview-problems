function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

function Student(name, studentId) {
  Person.call(this, name);
  this.studentId = studentId;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

class Person1 {
  constructor(name) {
    this.name = name;
  }
}

class Student1 extends Person1 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
const student = new Person1('ni');
console.log(student.name);

const student2 = new Person('ab');
console.log(student2.getName());
