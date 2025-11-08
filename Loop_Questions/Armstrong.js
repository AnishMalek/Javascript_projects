let num =Number(prompt("Enter Number"));
let temp = num;
let sum = 0;

while (num > 0) {
  let digit = num % 10;
  sum += digit ** 3;
  num = Math.floor(num / 10);
}

if (sum === temp)
  console.log("Armstrong");
else
  console.log("Not Armstrong");