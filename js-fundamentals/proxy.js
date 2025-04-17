const stu = {
  name: 'nir',
  age: 25,
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`someone accessed prop ${prop}`);
  },
};

const proxiedObj = new Proxy(stu, handler);
console.log(proxiedObj.name);
