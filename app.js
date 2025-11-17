// function greet() {
//   console.log("Hello");
// }

// let greet = function () {
//   console.log("Hello ");
// };

// let greet = () => {
//   console.log("Hello ");
// };

function birthyear(age, year) {
  let birthyear = year - age;
  return birthyear;
}

console.log(birthyear(20, 2025));

function average(a, b, c) {
  let average = (a + b + c) / 3;
  return average;
}
console.log(average(5, 10, 15));

function number(num) {
  if (typeof num === "number") {
    if (num < 0) {
      return "Manfiy son";
    } else if (num == 0) {
      return "bu 0";
    } else {
      return "bu musbat";
    }
  } else {
    return "invalid";
  }
}

console.log(number("asd"));

function square(a, b = 2) {
  return a ** b;
}
console.log(square(5));
