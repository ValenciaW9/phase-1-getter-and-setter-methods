const { expect } = require('chai');
const { Cat, Dog, Bird } = require('./classes.js');

describe("Cat", () => {
  let cat;

  beforeEach(() => {
    cat = new Cat("Korat");
  });

  it("has a breed property", () => {
    expect(cat.breed).to.equal("Korat");
  });

  // Add more test cases for the Cat class if needed
});

describe("Dog", () => {
  let dog;

  beforeEach(() => {
    dog = new Dog("German Shorthaired");
  });

  it("has a breed property", () => {
    expect(dog.breed).to.equal("German Shorthaired");
  });

  // Add more test cases for the Dog class if needed
});

describe("Bird", () => {
  let bird;

  beforeEach(() => {
    bird = new Bird("Rainbow-colored");
  });

  it("has a color property", () => {
    expect(bird.color).to.equal("Rainbow-colored");
  });

  // Add more test cases for the Bird class if needed
});
