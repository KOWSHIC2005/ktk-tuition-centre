const API_URL =
"https://script.google.com/macros/s/AKfycbytzBtgIiNhsCsiMvRXYA_JwYT_yLm90f5N-1wNA0PnItS5jPwazmBpj3q3z94lOokgoQ/exec";

async function login(){

const studentId =
document.getElementById("studentId").value;

const password =
document.getElementById("password").value;

const response =
await fetch(
`${API_URL}?studentId=${studentId}&password=${password}`
);

const data =
await response.json();

if(data.success){

localStorage.setItem(
"student",
JSON.stringify(data)
);

window.location =
"dashboard.html";

}
else{

document.getElementById("error")
.innerHTML =
"Invalid Student ID or Password";

}

}
