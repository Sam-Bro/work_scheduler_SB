var printToday = document.getElementById("todays-date");
const saveButton = document.getElementById("btn-save");

var nineStored = localStorage.getItem("input9am");
document.getElementById("text-9am").value = nineStored
//get todays date with moment.js
var todaysDate = moment().format('MMMM Do YYYY');
console.log(todaysDate);

// print todays date to header 
printToday.textContent = todaysDate;

//save button function 
$(saveButton).on("click", function() {
   var x = document.getElementById("text-9am").value
   localStorage.setItem("input9am", x);
})