var today = new Date();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayList[today.getDay()];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;
hour = (hour == 0) ? 12 : hour;
var output = `Today is : ${day}
Current time is : ${today.getHours()}${prepand}:${minute}:${second}`;

console.log(output);