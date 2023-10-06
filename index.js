Circle class.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}
const myCircle = new Circle(5);
console.log(myCircle.diameter); // Output: 10
console.log(myCircle.circumference); // Output: 31.41592653589793
console.log(myCircle.area); // Output: 78.53981633974483

myCircle.radius = 7;
console.log(myCircle.diameter); // Output: 14
console.log(myCircle.circumference); // Output: 43.982297150257104
console.log(myCircle.area); // Output: 153.93804002589985