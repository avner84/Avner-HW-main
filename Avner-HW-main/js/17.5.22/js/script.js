arr = [];
for (let i = 0; i < 5; i++) {

    arr.push(prompt("Please enter name " + (i + 1)));

}

arr.sort();

alert(arr.join(': '));