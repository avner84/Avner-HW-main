const args = process.argv.slice(2);
console.log(args);

var name = args[0];

function greet(name) {
    console.log(`hi to ${name}`);
}

greet(name);