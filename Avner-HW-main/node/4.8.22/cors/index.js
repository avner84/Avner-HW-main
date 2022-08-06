const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    fetch('/cors')
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
})

