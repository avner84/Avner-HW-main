const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  fetch("http://localhost:5454/", { method: "PUT" })
    .then((res) => res.text())
    .then((msg) => {
      console.log("msg", msg);
    })
    .catch((err) => {
      console.log("err", err);
    });
});
