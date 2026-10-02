// Task 5: factorial with input validation
const input = prompt("أدخل رقماً:");
const num = Number(input);

if (input === null || input.trim() === "" || isNaN(num)) {
  console.log("الرجاء إدخال رقم صحيح");
} else if (num < 0 || !Number.isInteger(num)) {
  console.log("المضروب يُحسب فقط للأعداد الصحيحة الموجبة");
} else {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  console.log(`${num}! = ${result}`);
}
