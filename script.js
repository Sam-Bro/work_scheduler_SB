var printToday = document.getElementById("todays-date");

var todaysDate = moment().format('MMMM Do YYYY');
console.log(todaysDate);

printToday.textContent = todaysDate;
