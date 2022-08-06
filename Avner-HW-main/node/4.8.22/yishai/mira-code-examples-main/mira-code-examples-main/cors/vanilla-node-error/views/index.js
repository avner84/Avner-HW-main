const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  fetch("http://localhost:5454/getSomthing", { method: "PUT" })
    .then((res) => res.text())
    .then((res) => {
      console.log("res from server: ", res);
    })
    .catch((err) => {
      console.log(err);
    });
});
