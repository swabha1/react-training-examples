//ES6
export default class Person {
  constructor() {
    this.name = "Person";
  }
  printName() {
    console.log(this.name);
  }
}

//ES7
export class Person1 {
  name = "Person1";
  printName() {
    console.log(this.name);
  }
}

export class Person2 {
  name = "Person2";
  //For sake of this
  printName = () => {
    console.log(this.name);
  };
}

export const Person3 = {
  name: "Person3"
};

//Inheritance

class Human {
  species = "human";
}

class Developer extends Human {
  name = "Swapnil";
  printMyName = () => {
    console.log(this.name);
  };
}

// const dev = new Developer();
// dev.printMyName();
// console.log(dev.species);
