function oddEven(num) {
  for (let i = 2; i <= num; i++) {
    if (num % 2 === 0) {
      return num;
    } else {
      return "Odd Number";
    }
  }
}
console.log(oddEven(8));


// XATO