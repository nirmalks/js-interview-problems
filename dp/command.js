class Command {
  execute() {}
  undo() {}
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }
  undo() {
    this.light.off();
  }
}

class Light {
  on() {
    console.log('Light is on');
  }
  off() {
    console.log('Light is off');
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
lightOnCommand.execute(); // Light is on
lightOnCommand.undo(); // Light is off
