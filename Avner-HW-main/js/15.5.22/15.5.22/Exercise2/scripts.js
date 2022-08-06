let salary = parseInt(prompt("Please enter your salary amount"));
let finalTax = 0;
let taxB = 2500;
let taxC = 7500;
let taxD = 22500;
let taxE = 42500;

switch (true) {
    case (salary < 25000):
        finalTax = (salary * 0.1);
        break;
    case (salary > 25000 && salary < 50000):
        finalTax = ((salary - 25000) * 0.2) + taxB;
        break;
    case (salary > 50000 && salary < 100000):
        finalTax = ((salary - 50000) * 0.3) + taxC;
        break;
    case (salary > 100000 && salary < 150000):
        finalTax = ((salary - 100000) * 0.4) + taxD;
        break;
    case (salary >= 150000):
        finalTax = ((salary - 150000) * 0.5) + taxE;
        break;

}
alert(`The amount of tax you are liable for is:${finalTax}`);