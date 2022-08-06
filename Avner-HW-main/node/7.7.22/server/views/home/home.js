alert("hi from home js");

const btn = document.querySelector("#btn");


btn.addEventListener("click", () => {
    // console.log("hi from btn");
    fetch('/dataFromSrver')
        .then(response => response.text())
        .then(data => console.log(data));
})