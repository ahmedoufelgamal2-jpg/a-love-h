let start=new Date("2024-02-15");

let today=new Date();

let diff=today-start;

let days=Math.floor(diff/(1000*60*60*24));

document.getElementById("counter").innerHTML=days+" Days ❤️";