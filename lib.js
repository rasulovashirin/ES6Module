export class Human {
}

export class Teacher extends Human {
}

// console.log((new Teacher) instanceof Human);

export class Calc {
 static add(a, b) {
    return a + b
  }
}

// console.log(Calc.add(20, 5));

export const PI = 3.14

// console.log(typeof PI);