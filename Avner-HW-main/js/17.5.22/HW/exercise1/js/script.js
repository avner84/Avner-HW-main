let text = prompt("Please enter text");

function letterSort(str) {
    let vowelsArr = [];
    let consonantsArr = [];
    let vowelsStr = "";
    let consonantsStr = "";

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);

        if (
            letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u"
        ) {
            vowelsArr.push(letter);
        } else if (
            //Make sure no non-letter character is inserted
            letter === "b" ||
            letter === "c" ||
            letter === "d" ||
            letter === "f" ||
            letter === "g" ||
            letter === "h" ||
            letter === "j" ||
            letter === "k" ||
            letter === "l" ||
            letter === "m" ||
            letter === "n" ||
            letter === "p" ||
            letter === "q" ||
            letter === "r" ||
            letter === "s" ||
            letter === "t" ||
            letter === "v" ||
            letter === "w" ||
            letter === "x" ||
            letter === "y" ||
            letter === "z"
        ) {
            consonantsArr.push(letter);
        }
    }

    vowelsArr.sort();
    consonantsArr.sort();

    vowelsArr.forEach((l) => (vowelsStr += l + ", "));
    consonantsArr.forEach((l) => (consonantsStr += l + ", "));

    let lettersArr = [vowelsStr, consonantsStr];
    return lettersArr;
}

function messageGeneration(arr) {
    alert(`Your string contains the following vowels: ${arr[0]}
    And the following consonants: ${arr[1]}`);
}

messageGeneration(letterSort(text));