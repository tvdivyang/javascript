let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      } 

      
    })
})


function isValidNumber(num) {

    if(isNaN(num)){
        console.log(`${num} is not a number`)
    }
    else{
      console.log(`${num} is a valid number`)
    }
  }
  console.log(isValidNumber(25));
