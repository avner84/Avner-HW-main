const form = document.querySelector("form");
const formContainer = document.querySelector("#formContainer");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {

        jsonData[key] = value;

    }

    //spiner loading...
    formContainer.innerHTML = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`

    fetch("/api/signUp", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json()).then((res) => {
            formContainer.innerHTML = "";
            setTimeout(function () { alert(res.msg) }, 10);
        });

});