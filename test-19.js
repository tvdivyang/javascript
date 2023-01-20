// some function
var some = [10, 15, 18, 25];
var somee = some.some((f) => f >= 18);
document.getElementById("some").innerHTML = somee;

// every function
var somm = some.every((d) => d >= 18);
document.getElementById("every").innerHTML = somm;

// find function
var find = [10, 15, 18, 22];
var finds = find.find(finn);

function finn(g) {
  return g >= 18;
}
document.getElementById("find").innerHTML = finds;

// findindex function
var findi = [10, 15, 18, 22];
var finddi = findi.findIndex((f) => f >= 18);
document.getElementById("findindex").innerHTML = finddi;

// break
var te = "";
for (var i = 0; i <= 7; i++) {
  if (i == 4) {
    break;
  }
  te = te + i;
}
document.getElementById("break").innerHTML = te;

// continu
var te = "";
for (var i = 0; i <= 7; i++) {
  if (i == 4) {
    continue;
  }
  te = te + i;
}
document.getElementById("continu").innerHTML = te;

// async function
async function fun() {
  const respon = await fetch("https://api.github.com/users");
  const user = await respon.json();
  return user;
}
document.getElementById("async").innerHTML = fun();
console.log("async :", fun());

// spread operators
var spread = [1, 2, 3, 4, 5, 6];
var [a, b, ...str] = spread;
console.log("spread operators", a, b, str);
document.getElementById("spread").innerHTML = (a, b, str);

//ternary operators
var ternary = 20;
var ter = ternary >= 18 ? "true" : "false";
document.getElementById("ternary").innerHTML = ter;

// switch case
var day = 5;
switch (day) {
  case 0:
    document.getElementById("switch").innerHTML = "Sunday";
    break;
  case 1:
    document.getElementById("switch").innerHTML = "Monday";
    break;
  case 2:
    document.getElementById("switch").innerHTML = "Tuesday";
    break;
  case 3:
    document.getElementById("switch").innerHTML = "Wednesday";
    break;
  case 4:
    document.getElementById("switch").innerHTML = "Thursday";
    break;
  case 5:
    document.getElementById("switch").innerHTML = "Friday";
    break;
  case 6:
    document.getElementById("switch").innerHTML = "Saturday";
  default:
}

// if else 
var i = 20;
if(i < 12){
    document.getElementById("date").innerHTML = "Good Morning";
}else if( i < 19){
    document.getElementById("date").innerHTML = "Good Afternoon";
}else if(i < 24){
    document.getElementById("date").innerHTML = "Good Evening";
}

// Number methods

// Number
var a = true;
var b = Number(a);
document.getElementById("Number").innerHTML = b ;

// parseInt
var a =  10.25;
document.getElementById("parseInt").innerHTML = parseInt(a) ;

// parseFloat
document.getElementById("parseFloat").innerHTML = parseFloat(a);

//isFinite
document.getElementById("isFinite").innerHTML = Number.isFinite(a) ;

//isInteger
document.getElementById("isInteger").innerHTML = Number.isInteger(a) ;

//toFixed
var d = 25.251648973;
document.getElementById("toFixed").innerHTML = d.toFixed(3) ;

// toPrecision
document.getElementById("toPrecision").innerHTML = d.toPrecision(3);

//  Spread (...)
var fs = [10,20,58,99,100];
var fg = Math.max(...fs);
document.getElementById("sprea").innerHTML = fg;

//class
class car {
    constructor (name,year){
        this.name = name;
        this.year = year;
    }
}
const mycars = new car("Ford",2014);
const mycar = new car("tata",2015);
var vr = ("my car name is " + mycar.name + " and models years " + mycar.year);
document.getElementById("clas").innerHTML = vr ;

//promise
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("Good Morning"),myReject("error"); }, 2000);
});
myPromise.then(function(value){
document.getElementById("Promis").innerHTML = value;
});

// String.includes
let text = "Hello world, welcome to the universe.";
document.getElementById("includes").innerHTML = text.includes("world");

// String.startsWith()
document.getElementById("startsWith").innerHTML = text.startsWith("hello");
