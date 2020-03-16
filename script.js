var printToday = document.getElementById("todays-date");
const saveButton = document.getElementsByClassName("btn-save");

//get todays date with moment.js
var todaysDate = moment().format('MMMM Do YYYY');
var todaysDatePrint = moment().format('MMMM Do YYYY, h:mm a');
console.log(todaysDate);

currentDayCheck()

//retrieve stored local text
var nineStored = localStorage.getItem("input9am");
$("#text-9am").val(nineStored)

var tenStored = localStorage.getItem("input10am");
$("#text-10am").val(tenStored)

var elevenStored = localStorage.getItem("input11am");
$("#text-11am").val(elevenStored)

var twelveStored = localStorage.getItem("input12pm");
$("#text-12pm").val(twelveStored)

var oneStored = localStorage.getItem("input1pm");
$("#text-1pm").val(oneStored)

var twoStored = localStorage.getItem("input2pm");
$("#text-2pm").val(twoStored)

var threeStored = localStorage.getItem("input3pm");
$("#text-3pm").val(threeStored)

var fourStored = localStorage.getItem("input4pm");
$("#text-4pm").val(fourStored)

var fiveStored = localStorage.getItem("input5pm");
$("#text-5pm").val(fiveStored)

// print todays date to header 
printToday.textContent = todaysDatePrint;

//save button function 
$(saveButton).on("click", function () {
   getTime()
})
console.log(moment().format('HH'));

// clear on new day
//localStorage.setItem("storedDate", todaysDate)
function currentDayCheck() {
   var storedDay = localStorage.getItem("storedDate")
   if (todaysDate === storedDay) {
      console.log("same day");
      return;
   } else {
      localStorage.clear()
      localStorage.setItem("storedDate", todaysDate)
      console.log("different day");
   }
}


function hoursPassed() {
   var currentHour = (moment().format("HH"));
   var currentHourCls = "text-" + (moment().format("ha"))

   if (currentHour < 18 && currentHour > 9) {
      document.getElementById(currentHourCls).classList.add('text-current');
      if (currentHour > 9) {
         $("#text-9am").addClass('text-past');
      }
      if (currentHour > 10) {
         $("#text-10am").addClass('text-past');
      }
      if (currentHour > 11) {
         $("#text-11am").addClass('text-past');
      }
      if (currentHour > 12) {
         $("#text-12pm").addClass('text-past');
      }
      if (currentHour > 13) {
         $("#text-1pm").addClass('text-past');
      }
      if (currentHour > 14) {
         $("#text-2pm").addClass('text-past');
      }
      if (currentHour > 15) {
         $("#text-3pm").addClass('text-past');
      }
      if (currentHour > 16) {
         $("#text-4pm").addClass('text-past');
      }
      if (currentHour > 17) {
         $("#text-5pm").addClass('text-past');
      }
   } else {
      $(".mid-textarea").addClass('text-past');
   }
}
hoursPassed()

//save input to local
function getTime() {
   var thisId = event.target.id;
   switch (thisId) {
      case "btn-9am":
         console.log(thisId);
         var inputText = $("#text-9am").val()
         localStorage.setItem("input9am", inputText);
         break;
      case "btn-10am":
         console.log(thisId);
         var inputText = $("#text-10am").val()
         localStorage.setItem("input10am", inputText);
         break;
      case "btn-11am":
         console.log(thisId);
         var inputText = $("#text-11am").val()
         localStorage.setItem("input11am", inputText);
         break;
      case "btn-12pm":
         console.log(thisId);
         var inputText = $("#text-12pm").val()
         localStorage.setItem("input12pm", inputText);
         break;
      case "btn-1pm":
         console.log(thisId);
         var inputText = $("#text-1pm").val()
         localStorage.setItem("input1pm", inputText);
         break;
      case "btn-2pm":
         console.log(thisId);
         var inputText = $("#text-2pm").val()
         localStorage.setItem("input2pm", inputText);
         break;
      case "btn-3pm":
         console.log(thisId);
         var inputText = $("#text-3pm").val()
         localStorage.setItem("input3pm", inputText);
         break;
      case "btn-4pm":
         console.log(thisId);
         var inputText = $("#text-4pm").val()
         localStorage.setItem("input4pm", inputText);
         break;
      case "btn-5pm":
         console.log(thisId);
         var inputText = $("#text-5pm").val()
         localStorage.setItem("input5pm", inputText);
         break;
      default:
         console.log("didnt work");
   }
}
