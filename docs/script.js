var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();
var year = today.getFullYear();

// Debugging 
console.log(month, day, year);

// Part 1
if(day<10){
    day="0" + day;
}

if(month<10){
    month="0" + month;
}

var dateOutput = `Today is ${month}/${day}/${year}`;

document.getElementById("dateOutput").textContent = dateOutput;

// Use Template literals
console.log(`${month}/${day}/${year}`);


// Part 2
var value1 = "86"
var value2 = "20"
var value3 = "20.99"
var value4 = "EightySix"

var conversion1 = Number(value1);
var conversion2 = Number(value2);
var conversion3 = Number(value3);
var conversion4 = Number(value4);

var result1 = `Original is ${value1} -> Conversion: isNaN:${Number.isNaN(conversion1)} & isInteger:${Number.isInteger(conversion1)}`
var result2 = `Original is ${value2} -> Conversion: isNaN:${Number.isNaN(conversion2)} & isInteger:${Number.isInteger(conversion2)}`
var result3 = `Original is ${value3} -> Conversion: isNaN:${Number.isNaN(conversion3)} & isInteger:${Number.isInteger(conversion3)}`
var result4 = `Original is ${value4} -> Conversion: isNaN:${Number.isNaN(conversion4)} & isInteger:${Number.isInteger(conversion4)}`

// Part 4 (1 of 2)
let message1;
if (Number.isInteger(conversion1)) {
    message1 = `The value ${value1} is a valid integer.`
} else {
    message1 = `The value ${value1} is not a valid integer.`
}
let message2;
if (Number.isNaN(conversion2)) {
    message2 = `The value ${value2} is not a valid number.`
} else {
    message2 = `The value ${value2} is a valid number.`
}

var numberConversionOutput = `${result1}
${result2}
${result3}
${result4}
${message1}
${message2}`;

document.getElementById("numberConversionOutput").innerHTML = numberConversionOutput;


// Part 3
let price = 16; //32
let taxRate = .08;  
let shipping = 4; 

let subtotal = price + shipping;
let tax = subtotal * taxRate;
let total = subtotal + tax;

let formattedTotal = total.toFixed(2);

// Part 4 (2 of 2)
let totalMessage;
if (total > 30) {
    totalMessage = "Total is greater than 30$, you qualify for a coupon!"
} else {
    totalMessage = "Total is 30$ or less, add more to qualify for a coupon!"
}

let mathOutput = `Price: ${price}$ <br> Shipping: ${shipping}$ <br> Subtotal: 
${subtotal}$ <br> Tax: ${tax.toFixed(2)}$ <br> Total: ${formattedTotal}$ <br> ${totalMessage}`;

document.getElementById("mathOutput").innerHTML = mathOutput;






