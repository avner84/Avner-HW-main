const form = document.querySelector("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {

        jsonData[key] = value;

    }
    // console.log('jsonData.role :', jsonData.role);
    fetch("/api/signUp", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json()).then((res) => {
            alert(res.msg);
            if (res.result == true) {
                form.reset()
                window.location = "http://localhost:3030/login/";
            }
        });


});
