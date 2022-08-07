const btn = document.querySelector("button");
btn.addEventListener("click",  ()=> {
    fetch('http://localhost:2323/',{method: "PUT"})
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
})

