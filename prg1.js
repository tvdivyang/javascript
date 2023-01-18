"use strict"

// JavaScript can change HTML content
document.getElementById("clic").addEventListener("click", function () {
  document.getElementById("p").innerHTML = "welcome to javascript";
});

// Using innerHTML
document.getElementById("inner").innerHTML = 5 + 5;

// Using window alert
// window.alert(5 + 6);

// Using console.log
console.log(5 + 6);

var a = 10;
const b = 11;
const string = "hello";
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(string);

// arithmetic operators
document.getElementById("arith").innerHTML = (5 + 1) * 5;

document.getElementById("arith").innerHTML =
  "sum of two number :" + " " + (5 + 1);

const persone = { FristName: "patel", LastName: "divyang", age: 22 };
document.getElementById("object").innerHTML =
  persone.LastName + " is " + persone.age + " years old";

document.getElementById("date").innerHTML = Date();

// string method

// length
var x = "hello world! good morning hello";
var y = x.length;
console.log(y);

// String slice()
var a = x.slice(6, 12);
console.log(a);

// String substring()
var c = x.substring(6, 15);
console.log(c);

// String substr()
var d = x.substring(6, 11);
console.log(d);

// String replace()
var e = x.replace("hello", "HELLO");
console.log(e);

// String replaceAll()
var f = x.replaceAll("hello", "HELLO");
console.log(f);

// String toUpperCase()
var h = x.toUpperCase();
console.log(h);

// String toLowerCase()
var g = x.toLowerCase();
console.log(g);

// String concat()
var text = "Good ";
var text1 = "Morning";
var con = text.concat(text1);
console.log(" ", con);

// trim() removes whitespace start
var m = "    hello     good     morning";
console.log(m);
var n = m.trim();
console.log(n);

// trim() removes whitespace end
var m1 = "    hello     good     morning";
console.log(m1);
var n1 = m.trimEnd();
console.log(n1);

// padsatrt
let text2 = "5";
let padded = text2.padStart(5, "0");
console.log(padded);

// padend
let text3 = "2";
let padde = text2.padEnd(3, "0");
console.log(padde);

// charAt()
var text = "Good morning";
var char = text.charAt(2);
console.log(char);

// charCodeAt()
var text = "Good morning";
var char = text.charCodeAt(2);
console.log(char);

// split()
var a1 = "Good morning";
console.log(a1);
var a2 = a1.split("");
console.log(a2);

console.log("JavaScript Search Methods");
// String indexOf()
var a2 = "Please locate where 'locate' occurs";
var a3 = a2.indexOf("locate");
console.log(a3);

// String search()
var st = "Please locate where 'locate' occurs!";
var s = st.search("where");
console.log(s);

// includes()
var tt4 = "Hello world, welcome to the universe.";
var tt6 = tt4.includes("Hello");
console.log(tt6);

//match()
var ta =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor illum.";
var tas = ta.match("dolor");
console.log(tas);

// class
class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const mycar = new car("ford", 2014);
console.log(
  "my car name is " + mycar.name + " is a old of year " + mycar.year + ";"
);

// Array
const cars = ["name", "jay", "himansu", "khimji"];

// function
var x = myfun(5, 8);
document.getElementById("demo5").innerHTML = x;

function myfun(a, b) {
  return a * b;
}

// arrow function
const ajy = () => {
  return (a = 10);
};
console.log(ajy());

const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr) {
    total = total + number;
  }
  return total / arr.length;
};

let ar = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(ar));

//   function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }

//     return counter;
//   }

const counterFunc = (counter) => {
  if (counter > 100) {
    counter = 10;
  } else {
    counter++;
  }
  return counter;
};
var arrs = 50;
console.log(counterFunc(arrs));

//   function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

const nameAge = (name, age) => {
  console.log("Hello" + name);
  console.log("You are " + age + " years old");
};

// operators
var aa = 11;
var ab = 9;
var ac = aa + ab;
console.log(ac);

console.log(aa * ab);

console.log(aa / ab);

console.log(aa % ab);

const age = 19;
if (age >= 18) {
  console.log("Nick is an adult");
} else {
  console.log("Nick is an child");
}

// The Math Object
console.log(" Math.E = " + Math.E);
console.log(" Math.PI = " + Math.PI);
console.log("Math.SQRT2 = " + Math.SQRT2);

var cc = 2.5;
var av = 3;
console.log(cc * av);
console.log("math.round = " + Math.round(cc * av));
console.log("math.ceil 4.2 = " + Math.ceil(4.2));
console.log("Math.floor 4.9 = " + Math.floor(4.9));
console.log("Math.trunc(x) returns 4.8 , 2.5 = " + Math.trunc(4.8, 2.5));
console.log(
  "Math.sign(x) returns if x is negative, null or positive 2.5 = " +
    Math.sign(2.5)
);
console.log(
  "Math.sign(x) returns if x is negative, null or positive -2.5 = " +
    Math.sign(-2.5)
);
console.log("Math.pow(x, y) returns 2*2*2 = " + Math.pow(2, 3));
console.log("Math.sqrt 256= 16*16 = " + Math.sqrt(256));
console.log(
  "Math.abs(x) returns the value (positive) -7.5 = " + Math.abs(-7.5)
);
console.log("Math.sin(x) returns the sine " + Math.sin((180 * Math.PI) / 360));
console.log("Math.cos(x) returns the con " + Math.cos((180 * Math.PI) / 180));
console.log(
  "Math.min() lowest  value in a list of arguments = " +
    Math.min(200, -20, 0, 15, 14, -25)
);
console.log(
  "Math max() highest value in a list of arguments = " +
    Math.max(50, 25, -10, 0, 15, 25)
);
console.log("Math.random() returns a random number" + Math.random() * 10);
console.log(Math.round(Math.random() * 20));
console.log("Math.log(x) returns log value = " + Math.log(25));

var ages = 15;
var voteable = ages < 18 ? "Too young" : "Old enough";
console.log(voteable);

// array methods

// toString() method
console.log("Array Methods");
var arra = ["jay", "mehul", "devang", "uttam", "yash"];
console.log(arra.toString());

// join() method
console.log("join method = " + arra.join(" * "));

// pop() method
var rr = ["jay", "mehul", "devang", "uttam", "yash"];
console.log(rr.pop());
console.log("pop() methods = " + rr);

//push() method
console.log(rr.push("vijay"));
console.log("push() method = " + rr);

// Array shift()
console.log(rr.shift());
console.log("shift() method = " + rr);

// Array unshift()
console.log(rr.unshift("vjay"));
console.log("unshift() method = " + rr);

// delete  method
var pr = ["mehul", "devang", "uttam"];
console.log(pr[0]);
var pq = delete pr[0];
console.log(pq[0]);

// concat() method
const Girl = ["brinda", "gopi"];
const Boy = ["harsh", "jay"];
const Boy1 = ["yash", "gopal"];
const mychilde = Girl.concat(Boy, Boy1);
console.log(mychilde);

var pr = ["mehul", "devang", "uttam"];
const my = pr.concat("ram ");
console.log(my);

// splice() method
var js = ["mehul", "devang", "uttam"];
js.splice(2, 0, "jay", "deep");
console.log(js);

js.splice(2, 2);
console.log(js);

// slice() method
const frut = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const cit = frut.slice(2);
console.log(cit);

const fru = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const ci = fru.slice(1, 3);
console.log(fru);
console.log(ci);

// sort() method
const boy = ["ram", "yash", "devang", "arjun", "rishit"];
console.log(boy.sort());

const num = [40, 20, 5, 1, 25, 75, 85, 91];
num.sort((a, b) => a - b);
console.log(num);

// reverse() method
console.log(boy.reverse());

// Find the Highest number
const nums = [40, 20, 5, 1, 25, 75, 85, 91];
nums.sort((a, b) => b - a);
console.log(nums[0]);

console.log(Math.max.apply(null, nums));
// find the Lowest number
nums.sort((a, b) => a - b);
console.log("lowest number", nums[0]);

console.log(Math.min.apply(null, nums));

// array filters
const filt = [10, 20, 15, 19, 26, 25];
var jh = filt.filter(demo);

function demo(age) {
  return age >= 18;
}
console.log(jh.toString());

//gate Date and time methods
const date = new Date();
console.log("date ", date);

// getFullYear
console.log("years ", date.getFullYear());

// getMonth()
var d1 = new Date("2007-05-05");
console.log("month ", d1.getMonth() + 1);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var d2 = months[d1.getMonth()];
console.log("month", d2);

console.log("Hours", date.getHours());

console.log("second", date.getSeconds());

console.log("milliseconds ", date.getMilliseconds());

console.log("days ", date.getDay());

console.log("Time ", date.getTime());

// set Date and time methods
const dp = new Date();
dp.setFullYear(2020);
console.log("set years ", dp);

const de = new Date();
de.setMonth(8);
console.log("set month ", de);

de.setDate(15);
console.log(" setdate ", de);

de.setHours(22);
console.log("set hours", de);

// JavaScript Loops

// for loop
var xt = "";
const loop = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("For Loops");
console.log(loop);
for (let i = 0; i < loop.length; i++) {
  console.log(loop [i]);
}

// even  number
var c1 = [20, 15, 33, 34, 95, 88, 4, 2, 5];
for (let i = 0; i < c1.length; i++) {
  if(c1[i]%2==0 ){
    console.log(c1[i]);
  }
}

var range = (5);
for(var i=1;i<=range;i++){
  var str="";
  for(var j=1;j<=i;j++){
    str += j+" ";
  }
  console.log(str);
}

// for of of=values loops 
console.log("for of loop");
var jay = [1,5,6,8,9,11,15,18];
for (let num of jay){
  console.log(num);
}

// for in  in=index loops
console.log("for in loop");
for(let Nu in jay){
  console.log(Nu);
}

// do while loop 
let text5 = "";
var p = 0;
do {
  text5 = text5 + p;
  p++;
}
while (p < 10);  
console.log(text5);


// forEach loop 
console.log("forEach");
const each = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 var eac = each.forEach(function(each){
  console.log(each);
 });

 // josn
var json = {
  name : "devang",
  age : 20,
  food : "pizza"
}

console.log(json);
var jsonobj = JSON.stringify(json);
console.log(jsonobj);

var newjsonobj = JSON.parse(jsonobj);
console.log(newjsonobj);

//  RegExp Reference
var reg = /Cum/gi;    
var lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore cum veniam tempora delectus pariatur distinctio cum impedit asperiores cum tempore repellat architecto.";
console.log(lorem.replace(reg, "devang"));

//this keyword and stric mode
try{

  const person = {
    firstName: Jay,
    firstName: "Jay",
    lastName: "patel",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());
}
catch(error){
  console.log(error);
}
finally{
  console.log("finally");
}
//Error handling (try, catch finally)

// map function()
var aj = [
  {FristName: "ajay", lastName: "sharma"},
  {FristName: "ram", lastName: "kumar"},
  {FristName: "ajay", lastName: "sharma"},
];
var bj = aj.map(tes);

function tes (y){
  return y.FristName + " " + y.lastName;
}
console.log(bj.toString());