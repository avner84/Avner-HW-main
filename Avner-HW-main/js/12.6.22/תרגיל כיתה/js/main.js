function callXHR() {


    var emailInput = document.querySelector("#email");
    var passwordInput = document.querySelector("#password");


    var raw = JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
        APIkey: "key123",
    });
    var requestOptions = { method: "POST", body: raw };
    fetch("https://www.promermedia.com/api/mira/sayHello", requestOptions)
        .then((response) => response.json())
        .then(result => {
            console.log(result)

            if (result.payload.success) {
                document.querySelector("main").innerHTML = `<h1>${ result.payload.success }</h1>`
            } else {
                alert(result.payload.err);
                emailInput.value = "";
                passwordInput.value = "";
            }

        })
        .catch((error) => console.log("error", error));
}