class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  }
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  
    set area(value) {
      this.radius = Math.sqrt(value / Math.PI);
    }
  
    set circumference(value) {
      this.radius = value / (2 * Math.PI);
    }
  }

const circle = new Circle(5);
console.log(circle.diameter); // 10
console.log(circle.circumference); // 31.41592653589793
console.log(circle.area); // 78.53981633974483

circle.diameter = 20;
console.log(circle.radius); // 10

circle.circumference = 50;
console.log(circle.radius); // 7.957747154594767

circle.area = 100;
console.log(circle.radius); // 5.641895835477563