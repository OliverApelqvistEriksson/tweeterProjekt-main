// Dessa variablar är till för min google sheets-inläggsfunktion.
// scriptURL är länken till mitt google sheets och createForm är namnet på den specifika sheet:et. 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyAc8HB-7ZBKfiY7sPBcNJzq1KLZg6b1ePIfeYZlsOGGELzQDnq-EdB0qWRdYhEWv_x/exec';
const form = document.forms['createForm']
// BrodtextInput är inputet som ska in i funktionen för att sedan bli brödtexten, som då kommer ha en span inuti sig.
let brodtextInput = "Varför ser den här hemsidan så konstig ut? Det är som att man inte kan lägga in några posts i den ÄNNU för att PHP är det jobbigaste som finns? Det går alltså inte att få in fler textfiler för att jag ännu inte klurat ut det ÄN. Hur skulle man ens göra det, man skulle behöva någon typ av back-end troligtvis. Men det är också ganska jobbigt. Skulle man kunna göra en simpel javascript till en .txt-fil? Kanske. Hmmm";

function submittaMittInlagg() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Congrats! You've added a grain of sand to the sAndbox."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error! What the f*uck did you do?', error.message))
  })
}

function stringTillTitel () {
  document.getElementById("titeln").innerHTML = "Den här webbplatsen ser jättekonstig ut!!!";
};

function stringTillBrodtext(brodtextInput) {
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
// Limptexten kan inte vara här heller?!!
function stringTillOmOss () {
  document.getElementById("ack").innerHTML = "super aido de xiaojong";
}; 

function toggleReadMore() {
  var hiddenText = document.querySelector('#text .hidden');
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
      hiddenText.style.display = 'inline';
  } 
  else {
      hiddenText.style.display = 'none';
  }
}

function toggleForm() {
  var formContainer = document.getElementById("myForm");
  formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
}

stringTillTitel();
stringTillBrodtext(brodtextInput);
submittaMittInlagg();
