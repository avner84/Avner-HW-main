const readBtn = document.getElementById("readBtn");

readBtn.addEventListener("click", () => {
  fetch("http://localhost:3434/api/getData")
    .then((res) => res.json())
    .then((res) => {
      console.log("got data: ", res);
    })
    .catch();
});
