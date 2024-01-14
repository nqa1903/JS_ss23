let x = +prompt("Nhập một số:");

console.log("Các số nguyên tố nhỏ hơn " + x);

for (let i = 2; i < x; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}