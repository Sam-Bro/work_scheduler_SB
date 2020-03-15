var printToday = document.getElementById("todays-date");
const saveButton = document.getElementsByClassName("btn-save");


//retrieve stored local text
var nineStored = localStorage.getItem("input9am");
document.getElementById("text-9am").value = nineStored

var tenStored = localStorage.getItem("input10am");
document.getElementById("text-10am").value = tenStored

var tenStored = localStorage.getItem("input11am");
document.getElementById("text-11am").value = tenStored

var tenStored = localStorage.getItem("input12pm");
document.getElementById("text-12pm").value = tenStored

var tenStored = localStorage.getItem("input1pm");
document.getElementById("text-1pm").value = tenStored

var tenStored = localStorage.getItem("input2pm");
document.getElementById("text-2pm").value = tenStored

var tenStored = localStorage.getItem("input3pm");
document.getElementById("text-3pm").value = tenStored

var tenStored = localStorage.getItem("input4pm");
document.getElementById("text-4pm").value = tenStored

var tenStored = localStorage.getItem("input5pm");
document.getElementById("text-5pm").value = tenStored


//get todays date with moment.js
var todaysDate = moment().format('MMMM Do YYYY');
console.log(todaysDate);

// print todays date to header 
printToday.textContent = todaysDate;

//save button function 
$(saveButton).on("click", function () {
   getTime()
})
console.log(moment().format('HH'));


function hoursPassed() {
   var currentHourCls = "text-" + (moment().format("ha"))
   document.getElementById(currentHourCls).classList.add('text-current');
   var currentHour = (moment().format("HH"));

   if (currentHour > 9) {
      document.getElementById("text-9am").classList.add('text-past');
   }
   if (currentHour > 10) {
      document.getElementById("text-10am").classList.add('text-past');
   }
   if (currentHour > 11) {
      document.getElementById("text-11am").classList.add('text-past');
   }
   if (currentHour > 12) {
      document.getElementById("text-12pm").classList.add('text-past');
   }
   if (currentHour > 13) {
      document.getElementById("text-1pm").classList.add('text-past');
   }
   if (currentHour > 14) {
      document.getElementById("text-2pm").classList.add('text-past');
   }
   if (currentHour > 15) {
      document.getElementById("text-3pm").classList.add('text-past');
   }
   if (currentHour > 16) {
      document.getElementById("text-4pm").classList.add('text-past');
   }
   if (currentHour > 17) {
      document.getElementById("text-5pm").classList.add('text-past');
   }


}
hoursPassed()

//save input to local
function getTime() {
   var thisId = event.target.id;
   switch (thisId) {
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
      case "btn-12pm":
         console.log(thisId);
         var inputText = document.getElementById("text-12pm").value
         localStorage.setItem("input12pm", inputText);
         break;
      case "btn-1pm":
         console.log(thisId);
         var inputText = document.getElementById("text-1pm").value
         localStorage.setItem("input1pm", inputText);
         break;
      case "btn-2pm":
         console.log(thisId);
         var inputText = document.getElementById("text-2pm").value
         localStorage.setItem("input2pm", inputText);
         break;
      case "btn-3pm":
         console.log(thisId);
         var inputText = document.getElementById("text-3pm").value
         localStorage.setItem("input3pm", inputText);
         break;
      case "btn-4pm":
         console.log(thisId);
         var inputText = document.getElementById("text-4pm").value
         localStorage.setItem("input4pm", inputText);
         break;
      case "btn-5pm":
         console.log(thisId);
         var inputText = document.getElementById("text-5pm").value
         localStorage.setItem("input5pm", inputText);
         break;
      default:
         console.log("didnt work");
   }
}
