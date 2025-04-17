class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data) {
    return this.strategy.doAlgorithm(data);
  }
}

class ConcreteStrategyA {
  doAlgorithm(data) {
    // Implementation of algorithm A
    return 'Algorithm A was run on ' + data;
  }
}

class ConcreteStrategyB {
  doAlgorithm(data) {
    // Implementation of algorithm A
    return 'Algorithm A was run on ' + data;
  }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy('somedata'));
