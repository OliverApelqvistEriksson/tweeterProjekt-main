
document.getElementById("titeln").innerHTML = "Den här webbplatsen ser jättekonstig ut!!!";
document.getElementById("brodtext").innerHTML = "<p id='text'> Varför ser den här hemsidan så konstig ut? Det är som att man inte kan lägga in några posts i den ÄNNU för att PHP är det jobbigaste som finns? <span class='hidden'> Det går alltså inte att få in fler textfiler för att jag ännu inte klurat ut det ÄN. Hur skulle man ens göra det, man skulle behöva någon typ av back-end troligtvis. Men det är också ganska jobbigt. Skulle man kunna göra en simpel javascript till en .txt-fil? Kanske. Hmmm</span> </p>";

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
var paragraphElement = document.getElementById("text");

// Check if the element exists
if (paragraphElement) {
  // Get the text content of the paragraph without the hidden span
  var textContentWithoutSpan = paragraphElement.textContent;

  // Display or use the extracted text content
  console.log(textContentWithoutSpan);
}
if (document.title.toLowerCase === "sandbox text") {
  // If the condition is met, make the text visible
  document.getElementById("text").innerHTML = textContentWithoutSpan ;
}

function toggleForm() {
  var formContainer = document.getElementById("myForm");
  formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
}