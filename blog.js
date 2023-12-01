const monthz = [
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
]
let thismonth = new Date().getMonth();
console.log(monthz[thismonth]);
let rightmonth = monthz[thismonth];
window.location.replace(`http://www.maxjann.com/${rightmonth}`);