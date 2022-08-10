const accountBalanceP = document.querySelector("#accountBalanceP");
const depositBtn = document.querySelector("#depositBtn");
const depositInput = document.querySelector("#depositInput");
const withdrawBtn = document.querySelector("#withdrawBtn");
const withdrawInput = document.querySelector("#withdrawInput");
const deleteAccountBtn = document.querySelector("#deleteAccountBtn");
const codeInput = document.querySelector("#codeInput");
const accountBalanceBtn = document.querySelector("#accountBalanceBtn");
const customerNameInput = document.querySelector("#customerNameInput");


let connectedCustomer = {};



window.addEventListener("load", () => {

    fetch("/api/actionsScreen/loadPage")
        .then((res) => res.json()).then((res) => {
            connectedCustomer = res.connectedCustomer;
            accountBalanceP.innerHTML = `Hi ${res.connectedCustomer.name}, <br> account balance is NIS ${res.connectedCustomer.sum}`
        });

});

depositBtn.addEventListener("click", () => {

    if (depositInput.value > 0) {
        const jsonData = { AmountToDeposit: depositInput.value };

        fetch("/api/actionsScreen/deposit", {
            method: "POST",
            body: JSON.stringify(jsonData),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json()).then((res) => {

                if (res.result == true) {
                    depositInput.value = "";
                    accountBalanceP.innerHTML = `Hi ${res.connectedCustomer.name}, <br> account balance is NIS ${res.connectedCustomer.sum}`;
                    connectedCustomer = res.connectedCustomer;
                }
                alert(res.msg);
            });

    }
    else {
        alert("The deposit amount must be greater than 0")
    }
})


withdrawBtn.addEventListener("click", () => {

    if ((connectedCustomer.sum - withdrawInput.value) >= 0) {
        const jsonData = { withdrawalAmount: withdrawInput.value };

        fetch("/api/actionsScreen/withdrawal", {
            method: "POST",
            body: JSON.stringify(jsonData),
            headers: {
                "content-type": "application/json"
            }
        })
            .then((res) => res.json()).then((res) => {

                if (res.result == true) {
                    withdrawInput.value = "";
                    accountBalanceP.innerHTML = `Hi ${res.connectedCustomer.name}, <br> account balance is NIS ${res.connectedCustomer.sum}`;
                    connectedCustomer = res.connectedCustomer;
                }
                alert(res.msg);
            });

    }
    else {
        alert("It is not possible to withdraw an amount higher than the amount in your account. Please change the withdrawal amount")
    }

})

deleteAccountBtn.addEventListener("click", () => {

    const jsonData = { code: codeInput.value, connectedCustomer };

    fetch("/api/actionsScreen/checkCodeBeforeDelete", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json()).then((res) => {

            if (res.resultFromCodeCheck) {
                if (confirm(`Are you sure you want to delete the account?
            This operation is irreversible!`)) {

                    const data = { connectedCustomerFromClient: connectedCustomer };
                    fetch("/api/actionsScreen/deleteAccount", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "content-type": "application/json"
                        }
                    })
                        .then((res) => res.json()).then((res) => {
                            if (res.resultFromDelet == true) {
                                alert("The customer account has been successfully removed.");
                                window.location = "http://localhost:3030/";

                            }
                            else {
                                alert("We were unable to delete the user account. Please contact the system administrator.");
                            }
                        })
                }
            }
            else {
                alert("The code is incorrect")
            }
        })
})

accountBalanceBtn.addEventListener("click", () => {

    const jsonData = { userName: customerNameInput.value };

    fetch("/api/actionsScreen/viewCustomerAccounts", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "content-type": "application/json"
        }
    })
        .then((res) => res.json()).then((res) => {
            if (res.checkAccountBalanceResult.result) {
                alert(`The amount in ${jsonData.userName} user account is NIS ${res.checkAccountBalanceResult.sum}`);
                customerNameInput.value = "";
            }
            else {
                alert("No customer found for this username");
            }
        })

})