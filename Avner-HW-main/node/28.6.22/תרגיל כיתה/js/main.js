const body = document.querySelector("body");
const div = document.querySelector("div");

// const myTimeout1 = setTimeout(function() {
//     div.style.fontSize = "50px";
//     const myTimeout2 = setTimeout(function() {
//         div.style.fontStyle = "italic";
//         const myTimeout3 = setTimeout(function() {
//             div.style.color = "purple";
//         }, 5000);
//     }, 5000);
// }, 5000);

// body.onload = function() {
//     div.style.color = "red";
//     myTimeout1;

// };


// ============

// div.style.color = "red";

// let myPromise1 = new Promise(function(res, rej) {
//     setTimeout(function() {
//         div.style.fontSize = "50px";
//         res();
//     }, 5000);
// });

// let myPromise2 = new Promise(function(res, rej) {
//     setTimeout(function() {
//         div.style.fontStyle = "italic";
//         res();
//     }, 5000);
// });

// let myPromise3 = new Promise(function(res, rej) {
//     setTimeout(function() {
//         div.style.color = "purple";
//         res();
//     }, 5000);
// });

// myPromise1.then(() => { return myPromise2 }).then(() => { return myPromise3 });

function f1() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            div.style.fontSize = "50px";
            res();
        }, 5000);
    });
}

function f2() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            div.style.fontStyle = "italic";
            res();
        }, 5000);
    });
}

function f3() {
    return new Promise(function(res, rej) {
        setTimeout(function() {
            div.style.color = "purple";
            res();
        }, 5000);
    });
}

div.style.color = "red";
// f1().then(f2).then(f3);

async function play() {

    await f1();
    await f2();
    await f3();

}

play();