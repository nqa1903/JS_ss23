var numberToCheck = +prompt("Nhập số cần kiểm tra:");
var sum = 0;

for (let i = 1; i <= numberToCheck / 2; i++) {
  if (numberToCheck % i === 0) {
    sum += i;
  }
}

if (sum === numberToCheck) {
  console.log(numberToCheck + " là số hoàn hảo.");
} else {
  console.log(numberToCheck + " không phải là số hoàn hảo.");
}