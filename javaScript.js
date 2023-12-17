// Dessa variablar är till för min google sheets-inläggsfunktion.
// scriptURL är länken till mitt google sheets och createForm är namnet på den specifika sheet:et. 
const scriptURL = 'https://script.google.com/macros/s/AKfycbyAc8HB-7ZBKfiY7sPBcNJzq1KLZg6b1ePIfeYZlsOGGELzQDnq-EdB0qWRdYhEWv_x/exec';
const form = document.forms['createForm']
// DESSA TVÅ är samlingen titlar som inte inkluderar det översta inlägget, som skapades med funktionen skapaSaker.
const titlar = ['Den här webbplatsen ser jättekonstig ut!!!','gusshy', 'sussy', 'bussy', 'Saoshanghao zhong gho']
const brodtexter = ['Varför ser den här hemsidan så konstig ut? Det är som att man inte kan lägga in några posts i den ÄNNU för att PHP är det jobbigaste som finns? Det går alltså inte att få in fler textfiler för att jag ännu inte klurat ut det ÄN. Hur skulle man ens göra det, man skulle behöva någon typ av back-end troligtvis. Men det är också ganska jobbigt. Skulle man kunna göra en simpel javascript till en .txt-fil? Kanske. Hmmm','hehawsussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussushehawsussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussushehawsussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussushehawsussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussushehawsussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussus', 'beigesussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussus', 'rossosussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussussus', '']
// Två strings som kommer få in hela titeltexten och brödtexten i html-en textsida.html.
// Dessa två används i funktionerna getTitle och getBrodtext, som båda hittar sina delar till textsida.html
const textPageTitel = ''
const textPageBrodtext = ''

// Denna funktion är den som skickar inlägg till google sheets.
function submittaMittInlagg() {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Congrats! You've added a grain of sand to the sAndbox."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error! What the f*uck did you do?', error.message))
  })
}

// Öppnar och stänger dropdown-en för skapa-knappen.
function toggleForm() {
  var formContainer = document.getElementById("myForm");
  formContainer.style.display = (formContainer.style.display === "block") ? "none" : "block";
}

//GetTitle ska få in url-et och sedan kunna finna den identifikator som ligger mellan de två separerarna.
// Den identifikatorn ska så småningom kunna kopplas till en string och den stringen ska kunna returnas.
function getTitle() {
  const URLDel = window.location.href;
  console.log('Urldel', URLDel)
  const start = URLDel.indexOf("Tit=");
  
  if (start !== -1) {
      const end = URLDel.indexOf("=le", start);
      if (end !== -1) {
          const titelString = URLDel.substring(start + 4, end);
          let textPageTitel = titelString;
          document.getElementById("textSidoTiteln").innerHTML = decodeURIComponent(textPageTitel);
          return textPageTitel;
      }
  }
}
//Getbrodtext gör exakt samma process som getTitle, men är adapterad för att rätt kunna ta in denna text.
function getBrodtext() {
    const URLDel = window.location.href;
    console.log('Urldel', URLDel)
    const start = URLDel.indexOf("Brod=");
    console.log('start' + start)
    if (start !== -1) {
        const end = URLDel.indexOf("=text", start);
        console.log(end)
        if (end !== -1) {
            const brodString = URLDel.substring(start + 5, end);
            let textPageBrodtext = brodString;
            console.log('tpage' + textPageBrodtext)
            document.getElementById("limptext").innerHTML = decodeURIComponent(textPageBrodtext);
            console.log('textpage ' + textPageBrodtext)
            return textPageBrodtext;
        }
    }
}

// This function takes a string and creates a text with a span for the toggle button.
function stringTillBrodtext(brodtextInput, id) {
  let result = "<p id='" + id + "'> "; // Added single quotes around id
  // Första 100 karaktärer
  for (let i = 0; i < 100 && i < brodtextInput.length; i++) {
    result += brodtextInput[i];
  }
  result += "<span class='hidden'>";
  // Resten
  for (let i = 100; i < brodtextInput.length; i++) {
    result += brodtextInput[i];
  }
  result += "</span> </p>";
  return result; // Return the result instead of directly updating the HTML
}

// Function to toggle visibility
function toggleReadMore(id) {
  var hiddenText = document.querySelector('#' + id + ' .hidden');
  if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
    hiddenText.style.display = 'inline';
  } else {
    hiddenText.style.display = 'none';
  }
}

function skapaSaker() {
  let sakerString = '';

  for (let i = 0; i < titlar.length; i++) {
    sakerString +=
      '<div class="sakbox" id="id_' + i + '">' +
      '<a href="textsida.html?Tit=' + encodeURIComponent(titlar[i]) + '=le&Brod=' + encodeURIComponent(brodtexter[i]) + '=text">' +
      '<div class="titeln">' + titlar[i] + '</div>' +
      '<div class="brodtext">' + stringTillBrodtext(brodtexter[i], "id_" + i) + '</div>' +
      '</a>' +
      '<div class="merknappsDiv">' +
      '<button onclick="toggleReadMore(\'id_' + i + '\')">Toggle view</button>' +
      '</div>' +
      '</div>';
  }
  document.getElementById("saker").innerHTML = sakerString;
}
//<div class="sakbox"> <!-- En sakbox är ett inlägg som innehåller en text. -->
//  <a href="textsida.html?Tit=Hello=le&Brod=World=text">
//    <div class="titeln" id="">   </div> <!-- klassen kopplas till .css, id't kopplas till .js -->
//    <div class="brodtext" id="">   </div>  <!-- Obs -  Brodtext är för övrigt mitt namn för brödtexten i inlägget. -->
//  </a>
//  <div class="merknappsDiv"> <!-- Vill man se mer kan man toggla genom denna knapp, som i .js ökar eller minskar texten. -->
//    <button onclick="toggleReadMore()">Toggle view</button>
//  </div>
//</div>

// Startar alla funktioner i rätt ordning.
submittaMittInlagg();
try {skapaSaker();}
catch {};
getTitle();
getBrodtext();