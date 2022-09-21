const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
   
    jsonData[key]= value;
        
    }
    console.log('jsonData :', jsonData);
    fetch("/api/signUp",{
        method: "POST",
        body: JSON.stringify(jsonData),
        headers:{
            "content-type": "application/json"
        }
    })
    .then((res)=>res.json()).then((res)=>{
                alert(res.msg)});

});