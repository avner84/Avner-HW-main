// const data = Buffer.from("hello world");

// console.log(data);

const fs = require("fs");
const he = fs.readFileSync('../Exercis_2/he.js', "utf-8");

console.log("he", he);

fs.writeFileSync("./newFile", "hello new file")