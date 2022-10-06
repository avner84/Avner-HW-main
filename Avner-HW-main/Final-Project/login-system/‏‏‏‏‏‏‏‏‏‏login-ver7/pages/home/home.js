const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
   
    fetch('/api/confirmAccount')
    .then((response) => response.json())
    .then((data) => console.log(data));

    

});