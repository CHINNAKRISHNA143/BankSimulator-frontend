const BASE_URL = "http://localhost:8080";

function showSection(id){
    document.querySelectorAll(".section").forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

//create account

function createAccount(){
    const data = {
        name : document.getElementById("c-name").value,
        email : documnet.getElementById("c-email").value,
        balance : documnet.getElementById("c-balance").value
    };

    fetch(BASE_URL+"/accounts/create" ,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("create-result").innerText = "Account is Created and here is your Account Number "+result.accountNumber;
    });
    

}

function deposite(){
    const data = {
        accNo : document.getElementById("d-acc").value,
        amount : document.getElementById("d-amount").value
    };

    fetch(BASE_URL+"/transactions/deposite" ,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("deposite-result").innerText = msg;
    });

}

function withdraw(){
    const data = {
        accNo : document.getElementById("w-acc").value,
        amount : document.getElementById("w-amount").value
    };

    fetch(BASE_URL+"/transactions/withdraw" ,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => {
        document.getElementById("withdraw-result").innerText = msg;
    });

}

