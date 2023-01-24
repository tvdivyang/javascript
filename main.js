let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let textarea = document.getElementById("textarea");
let msg_titel = document.getElementById("msg_titel");
let msg_email = document.getElementById("msg_email");
let msg_number = document.getElementById("msg_number");
let msg_date = document.getElementById("msg_date");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let mobilecheck = /^[789][0-9]{9}$/;
let username = /^[A-Za-z][A-Za-z0-9_]{4,20}$/;
let gmailcheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidation(); 
});

let formvalidation = () => { 
if(username.test(textInput.value)){
    msg_titel.innerHTML ="";
} 
else if(mobilecheck.test(phoneInput.value)){
    msg_number.innerHTML = "";
}
else if(gmailcheck.test(emailInput.value)){
    msg_email.innerHTML = "";
}
else{
    msg_number.innerHTML = "please enter valid number";
    msg_titel.innerHTML = "task cannot blank";
    msg_email.innerHTML = "please enter valid email";
    console.log("success"); 
    return false;
}
acceptData();
add.setAttribute("data-bs-dismiss","modal");
add.click();
};

document.getElementById("form").onkeyup = function() {myFunction()};

function myFunction() {
    if(!!textInput.value){
        msg_titel.innerHTML = "";
    }
    if(!!phoneInput.value){
        msg_number.innerHTML = "";
    }
    if(!!emailInput.value){
        msg_email.innerHTML = "";
    }
  
   }


// let formvalidation = () => {
//     if (textInput.value === "") {
//         console.log("failure");
//         msg_titel.innerHTML = "task cannot blank";
//         return false;
//     }if(emailInput.value == ""){
//         msg_email.innerHTML = "please fill the email id field";
//         return false;   
//     }if(phoneInput.value == ""){
//         msg_number.innerHTML = "please enter your number";
//         return false;
//     }if(isNaN(phoneInput.value)){
//         msg_number.innerHTML = "enter only numeric number";
//         return false;
//     }if((phoneInput.value.length<10) || (phoneInput.value.length >= 11)){
//         msg_number.innerHTML = "Mobile number must be 10 number";
//         return false;
//     }if((phoneInput.value.charAt(0) !=9) && (phoneInput.value.charAt(0) !=8) && (phoneInput.value.charAt(0) !=7)){
//         msg_number.innerHTML = "Mobile number must be start 9,8,7";
//         return false;
//     }

//     else{
//         console.log("success"); 
//         msg_titel.innerHTML = "";
//         acceptData();
//         add.setAttribute("data-bs-dismiss","modal");
//         add.click();
//     }
// };

let data = {};

let acceptData = () =>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["email"] = emailInput.value;
    data["phone"] = phoneInput.value;
    data["description"] = textarea.value;
    createTasks();
}; 

let createTasks = () => {
    tasks.innerHTML += `
    <div>
        <span class="fw-bold">${data.text}</span>
        <span>${data.email}</span>
        <span>${data.phone}</span>
        <span class="small">${data.date}</span>
        <p>${data.description}</p>
        <span class="options d-flex justify-content-center">
            <i onClick = "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-user-pen pe-2"></i>
            <i onClick = "deleteTask(this)" class="fa-sharp fa-solid fa-trash"></i>
        </span>
    </div>`;
resetForm();
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}

let editTask = (e) => {
    let selectTask = e.parentElement.parentElement;
    
    textInput.value = selectTask.children[0].innerHTML;
    emailInput.value = selectTask.children[1].innerHTML;
    phoneInput.value = selectTask.children[2].innerHTML;
    dateInput.value = selectTask.children[3].innerHTML;
    textarea.value = selectTask.children[4].innerHTML;

    selectTask.remove();
}

let resetForm = () => {
    textInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}; 