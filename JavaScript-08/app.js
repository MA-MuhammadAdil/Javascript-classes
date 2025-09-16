// const date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear);
// console.log(date.getMinutes)

// const doomsDay = new Date();
// doomsDay.setDate(15)
// date.setDate(15);
// console.log(date);

const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");

setInterval(function(){
const date = new Date();
let hours = date.getHours();
let amPm ="AM";
if (hours > 11){
    amPm = "PM"
    if(hours > 12){
        hours -= 12;
    }
}
    hoursElem.innerText = date.getHours();
    minutesElem.innerText = date.getMinutes();
    secondsElem.innerText = date.getSeconds();

}, 1000);










