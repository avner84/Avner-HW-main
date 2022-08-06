const btn = document.querySelector("#submit");
const divInfo = document.querySelector("#deletionInfo");
const input = document.querySelector("#StudentId");
let inputValue = input.value;


const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
   
    jsonData[key]= value;
    
    }
    fetch("/removeStudent",{
        method: "POST",
        body: inputValue+"",
    })
        .then((response) => response.text())
        .then((res) => {
            deletionInfo.innerHTML = `<h2>${res}</h2>`;
        });

});




// btn.addEventListener("click", (inputValue) => {
//     fetch("/removeStudent",{
//         method: "POST",
//         body: inputValue,
//     })
//         .then((response) => response.text())
//         .then((res) => {
//             deletionInfo.innerHTML = `<h2>${res}</h2>`;
//         });
// });

