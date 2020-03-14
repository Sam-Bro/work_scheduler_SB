var printToday = document.getElementById("todays-date");
const saveButton = document.getElementsByClassName("btn-save");


//retrieve stored local text
var nineStored = localStorage.getItem("input9am");
document.getElementById("text-9am").value = nineStored

var tenStored = localStorage.getItem("input10am");
document.getElementById("text-10am").value = tenStored

var tenStored = localStorage.getItem("input11am");
document.getElementById("text-11am").value = tenStored

//get todays date with moment.js
var todaysDate = moment().format('MMMM Do YYYY');
console.log(todaysDate);

// print todays date to header 
printToday.textContent = todaysDate;

//save button function 
$(saveButton).on("click", function() {
   getTime()
})
console.log(moment().format('ha'));


function hoursPassed() {
   var currentHour = "text-" + (moment().format("ha"))
   console.log(currentHour);
   document.getElementById(currentHour).classList.add('text-future');
}
hoursPassed()


function getTime() {
   var thisId = event.target.id;
   switch(thisId) {
   case "btn-9am":
      console.log(thisId);
      var inputText = document.getElementById("text-9am").value
      localStorage.setItem("input9am", inputText);
      break;
   case "btn-10am":
      console.log(thisId);
      var inputText = document.getElementById("text-10am").value
      localStorage.setItem("input10am", inputText);
      break;
   case "btn-11am":
      console.log(thisId);
      var inputText = document.getElementById("text-11am").value
      localStorage.setItem("input11am", inputText);
      break;
   
   default:
      console.log("didnt work");
      }
   }
