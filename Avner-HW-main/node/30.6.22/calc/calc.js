const greet = require("./calc2");
greet();

// const args = process.argv.slice(2);
// const num1 = parseInt(args[0]);
// const num2 = parseInt(args[1]);
// const operator = args[2];



// try {


//     if (isNaN(num1) || isNaN(num2)) {
//         throw "At least one number is not a number";
//     }
//     if (
//         operator != "+" &&
//         operator != "-" &&
//         operator != "*" &&
//         operator != "/"
//     ) {
//         throw "The operator is not valid";
//     }

//     switch (operator) {
//         case "+":
//             console.log(num1 + num2);

//             break;

//         case "-":
//             console.log(num1 - num2);

//             break;

//         case "*":
//             console.log(num1 * num2);

//             break;

//         case "/":
//             console.log(num1 / num2);

//             break;
//     }
// } catch (error) {
//     console.log("error: ", error);
// }