// onclick start
 document.getElementById("btn").addEventListener("click",function(){document.getElementById("click").innerHTML = "Good Morning"});
// onclick end

//onchange start
document.getElementById("change").addEventListener("change",function(){
    var a = document.getElementById("change");
    a.value = a.value.toUpperCase();});
//onchange end

// onmouseover start
document.getElementById("mouseover").addEventListener("mouseover", function(){this.style.color = "red";});
// onmouseover end

// onmouseout start
document.getElementById("mouseover").addEventListener("mouseout", function(){this.style.color = "green";});
// onmouseout end

// mouseDown  start
document.getElementById("mousedow").addEventListener("mousedown", function(){this.style.color = "red";});
// mouseDown end

// mouseup start
document.getElementById("mousedow").addEventListener("mouseout", function(){this.style.color = "blue";});
// mouseup end

// mouseenter start
document.getElementById("mouseenter").addEventListener("mouseenter",function(){this.style.fontSize = "25px"});
// mouseenter end

// mouseleave start
document.getElementById("mouseenter").addEventListener("mouseleave",function(){this.style.fontSize = "1rem"});
// mouseleave end

// onkeydown start
document.getElementById("onkey").addEventListener("keydown",function(){document.getElementById("keydown").style.color = "red"});
// onkeydown end

// onkeypress start
document.getElementById("onkey").addEventListener("keypress",function(){document.getElementById("keydown").style.color = "blue"});
// onkeypress end

// onkeyup start 
document.getElementById("onkey").addEventListener("keyup",function(){document.getElementById("keydown").style.color = "green"});
// onkeyup end

//oncut start
document.getElementById("cutt").addEventListener("cut",function(){document.getElementById("cut").innerHTML = "You Cutted Text"});
//oncut end

//oncopy start
document.getElementById("copyy").addEventListener("copy",function(){document.getElementById("copy").innerHTML = "You Copyy Text"});
//oncopy end

// querySelector start
document.querySelectorAll("h6")[1].style.color = "red"; 
// querySelector end


// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
//   console.log(text);
// }
// document.getElementById("fg").innerHTML = text;