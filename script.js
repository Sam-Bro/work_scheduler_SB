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
   var currentHourCls = "text-" + (moment().format("ha"))
   document.getElementById(currentHourCls).classList.add('text-current');
   var currentHour = (moment().format("h"));

   if (currentHour > 9 ) {
      document.getElementById("text-9am").classList.add('text-past');
   }
   if (currentHour > 10 ) {
      document.getElementById("text-10am").classList.add('text-past');
   }
   if (currentHour > 11 ) {
      document.getElementById("text-11am").classList.add('text-past');
   }

   
}
hoursPassed()

//save input to local
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
