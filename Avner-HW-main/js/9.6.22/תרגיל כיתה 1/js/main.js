window.addEventListener("contextmenu", function(e) {
    e.preventDefault();

    const body = this.document.querySelector("body");
    body.innerHTML = `<div id="divId"> <button> click me</button><button> more option</button></div>`;
    const div = document.getElementById("divId");
    div.style.top = e.y + "px";
    div.style.left = e.x + "px";




    console.log(e.x + " " + e.y);

})