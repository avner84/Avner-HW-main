let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", start);

function start() {
    let name = prompt("Enter your name");
    document.body.innerHTML += `<h1>${name}</h1>`;

}