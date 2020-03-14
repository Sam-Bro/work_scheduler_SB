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
   getTime2()
})

function getTime2() {
   thisId = event.target.id;
   console.log(thisId);
   console.log(inputText);
    if (thisId === "btn-9am"){
      console.log("save 9 am");
      var inputText = document.getElementById("text-9am").value
      localStorage.setItem("input9am", inputText);

    } else if (thisId === "btn-10am"){
       console.log("save 10 am");
       var inputText = document.getElementById("text-10am").value
       localStorage.setItem("input10am", inputText);
    }else if (thisId === "btn-11am"){
       console.log("save 11 am");
       var inputText = document.getElementById("text-11am").value
       localStorage.setItem("input11am", inputText);
    } else {
       console.log("didnt work");
   }
}

function getTime() {
   var thisId = event.target.id;
   var inputText = document.getElementById(thisId).value

   switch(thisId) {
   case "btn-9am":
      console.log(thisId);
      localStorage.setItem("input9am", inputText);
      break;
   case "btn-10am":
      console.log(thisId);
      localStorage.setItem("input10am", inputText);
      break;
   case "btn-11am":
      console.log(thisId);
      localStorage.setItem("input11am", inputText);
      break;
   
   default:
      console.log("didnt work");
      }
   }

//getTime(test)

//if(this.getAttribute('id')=="btn-9am"){
//   console.log("somtejsdk");
//}  else {
//   console.log("didnt work");
//}