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