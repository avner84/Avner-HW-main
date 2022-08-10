const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
   
    jsonData[key]= value;
        
    }
   
    fetch("/api/login",{
        method: "POST",
        body: JSON.stringify(jsonData),
        headers:{
            "content-type": "application/json"
        }
    })
    .then((res)=>res.json()).then((res)=>{
        if (res.result == true) {
            form.reset()
            alert(res.msg);
            window.location = "http://localhost:3030/actionsScreen/";
        }
        else{alert(res.msg)}
                });
                

});

