const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
   
    jsonData[key]= value;
    
    }
    fetch("http://localhost:3000/api/studentsManager",{
        method: "POST",
        body: JSON.stringify(jsonData),
    }).then((res)=>res.text()).then((res)=>{
        if (res == "The student was successfully added")
        {location.reload();}
        alert(res)});

});
