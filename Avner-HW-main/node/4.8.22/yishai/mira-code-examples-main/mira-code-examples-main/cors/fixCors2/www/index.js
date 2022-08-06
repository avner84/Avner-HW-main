const btn = document.getElementById("btn1");
// try to fetch from api
btn.addEventListener("click", () => {
  fetch("https://catfact.ninja/fact", {
    headers: {
      Origin: "http://localhost:5454",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});
