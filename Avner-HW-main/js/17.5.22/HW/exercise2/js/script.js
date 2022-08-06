let text = prompt("Please enter text");

function countingLetters(str) {
    str = str.toUpperCase();

    let lettersArr = [];
    let counter = 1;

    let index = 0;

    //The creation of an array of string letters
    for (let i = 0; i < str.length; i++) {
        lettersArr.push(str.charAt(i));
    }

    //The sort the array in alphabetical order
    lettersArr.sort();
    let objectArr = [{
        letter: lettersArr[0],
        amount: 1,
    }, ];

    //Counting of the letters
    for (let i = 1; i < lettersArr.length; i++) {

        if (lettersArr[i].charCodeAt(0) > 64 && lettersArr[i].charCodeAt(0) < 91) { //Verification that only letters are counted

            if (lettersArr[i] === lettersArr[i - 1]) {
                counter++;
                objectArr[index] = { letter: lettersArr[i], amount: counter };
            } else {
                index++;
                counter = 1;
                objectArr.push({ letter: lettersArr[i], amount: counter });
            }
        }

    }

    return objectArr;
}

console.log(countingLetters(text));