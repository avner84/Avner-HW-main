let num = parseInt(prompt("Please enter a number"));
let doubleArr = [];
let oddArr = [];

let doubleOrOdd = "";
for (let i = 0; i < num - 1; i++) {
    if ((i + 1) % 2 == 0) {
        doubleArr.push(i + 1);
    } else {
        oddArr.push(i + 1);
    }
};

if (num % 2 == 0) {
    doubleOrOdd = "double";
} else { doubleOrOdd = "odd"; }

alert("The sequence of odd numbers is: " + oddArr + '\n' + "The sequence of duoble numbers is: " + doubleArr + '\n' + "And the number entered is: " + doubleOrOdd)