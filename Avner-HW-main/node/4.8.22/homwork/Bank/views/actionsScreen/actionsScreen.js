const accountBalanceP = document.querySelector("#accountBalanceP");
const depositBtn = document.querySelector("#depositBtn");
const depositInput =document.querySelector("#depositInput");

window.addEventListener("load", () => {

    fetch("/api/actionsScreen1")
        .then((res) => res.json()).then((res) => {
            accountBalanceP.innerHTML = `Hi customer, <br> account balance is NIS ${res.sumOfconnectedCustomer}`
        });

});

depositBtn.addEventListener("click", ()=>{

   if (depositInput.value>0){

    const jsonData = { AmountToDeposit: depositInput.value };


    fetch("/api/actionsScreen2", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "content-type": "application/json"
        }
    })

    // fetch("/api/actionsScreen2", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "content-type": "application/json"
    //     }
    // })
      // .then((res) => res.json()).then((res) => {
        //     console.log(res);
        // });
}

else{
    alert("The deposit amount must be greater than 0")
}
      

    

})


