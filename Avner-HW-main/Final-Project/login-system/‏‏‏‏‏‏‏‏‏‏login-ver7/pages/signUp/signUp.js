const form = document.querySelector("form");
const formContainer = document.querySelector("#formContainer");
const h2 = document.querySelector("h2");
const spinerDiv = document.querySelector("#spinerDiv");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {

        jsonData[key] = value;

    }

    //spiner loading...
    formContainer.style.display = 'none';
    h2.style.display = 'none';
    spinerDiv.innerHTML = `<div class="d-flex justify-content-center">
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
            spinerDiv.innerHTML = "";
            if (res.registrationSuccess) {
                formContainer.innerHTML = "";
                h2.innerHTML = "";

            }
            else {
                formContainer.style.display = 'block';
                h2.style.display = 'block';
            }
            setTimeout(function () { alert(res.msg) }, 10);
        });

});