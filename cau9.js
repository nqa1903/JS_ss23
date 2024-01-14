var number = prompt("Nhap so ");
let n1 = 0,
    n2 = 1,
    temp,
   index = 1;
console.log(n2);
temp = n1 + n2;
while (index <= number) {
  console.log(temp);
  n1 = n2;
  n2 = temp;
  temp = n1 + n2;
  index = index + temp;
}