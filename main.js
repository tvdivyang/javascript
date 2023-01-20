let form = document.getElementById("form");
let textInput =document.getElementById("textInput");
let dateInput =document.getElementById("dateInput");
let textarea =document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidation(); 
});

let formvalidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "task cannot blank";
    }else{
        console.log("success");
        msg.innerHTML = "";
    }
    acceptData();
};

let data = {};

let acceptData = () =>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    createTasks();
}; 

let createTasks = () => {
    tasks.innerHTML += `
    <div>
                <span class="fw-bold">${data.text}</span>
                <span class="small">${data.date}</span>
                <p>${data.description}</p>
                <span class="options d-flex justify-content-center">
                    <i class="fa-solid fa-user-pen pe-2"></i>
                    <i class="fa-sharp fa-solid fa-trash"></i>
                </span>
            </div>
    `;
}