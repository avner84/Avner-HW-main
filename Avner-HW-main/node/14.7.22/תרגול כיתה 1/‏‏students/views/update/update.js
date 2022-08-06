const form = document.querySelector("form");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const jsonData = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
   
    jsonData[key]= value;
    
    }
    fetch("http://localhost:3000/updateStudent",{
        method: "PUT",
        body: JSON.stringify(jsonData),
    })
    .then((res)=>res.text()).then(function (res) {
            if (res == "Student details updated successfully")
            {location.reload();}
            alert(res);
        });

});
