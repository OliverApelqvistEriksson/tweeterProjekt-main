
document.getElementById("titeln").innerHTML = "Den här webbplatsen ser jättekonstig ut!!!";


function stringTillDiv(brodtextInput) {
  let result = "";
  result += "<p id='text'> ";
  // Första 30 karaktärer
  for (let i = 0; i < 100 && i < brodtextInput.length; i++) {
    result += brodtextInput[i];
  }
  result += "<span class='hidden'>";
  // Resten
  for (let i = 100; i < brodtextInput.length; i++) {
    result += brodtextInput[i];
  }
  result += "</span> </p>";
  document.getElementById("brodtext").innerHTML = result;
  // varför kan inte limptexten vara här??!
}
function stringTillDivNumeroDos(brodtextInput) {
  let result = "";
  result += brodtextInput;
  document.getElementById("limptext").innerHTML = result;
}
let brodtextInput = "Varför ser den här hemsidan så konstig ut? Det är som att man inte kan lägga in några posts i den ÄNNU för att PHP är det jobbigaste som finns? Det går alltså inte att få in fler textfiler för att jag ännu inte klurat ut det ÄN. Hur skulle man ens göra det, man skulle behöva någon typ av back-end troligtvis. Men det är också ganska jobbigt. Skulle man kunna göra en simpel javascript till en .txt-fil? Kanske. Hmmm";
stringTillDiv(brodtextInput);
stringTillDivNumeroDos("brodtextInput");
// Limptexten kan inte vara här heller?!!
document.getElementById("ack").innerHTML = "super aido de xiaojong";

function toggleReadMore() {
  var hiddenText = document.querySelector('#text .hidden');
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
      hiddenText.style.display = 'inline';
  } 
  else {
      hiddenText.style.display = 'none';
  }
}

// Get the element with the ID "text"
//var paragraphElement = document.getElementById("text");

// Check i}
//if (document.title.toLowerCase === "sandbox text") {
  // If the condition is met, make the text visible
 // document.getElementById("text").innerHTML = textContentWithoutSpan ;
//}

function toggleForm() {
  var formContainer = document.getElementById("myForm");
  formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
}