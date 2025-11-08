let num = Number(prompt("Enter number"))

let lastNum = num % 10;

while(num>=10){
    num = Math.floor(num/10);
}

let firstNum = num;


let sum = firstNum + lastNum;
console.log("Sum of First And Last Digit = ",sum);

