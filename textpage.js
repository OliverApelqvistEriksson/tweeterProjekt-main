
//document.getElementById("titeln").innerHTML = "Den här webbplatsen ser jättekonstig ut!!!";

//function stringTillDivNumeroDos(brodtextInput) {
  //let result = "";
  //result += brodtextInput;
  //document.getElementById("limptext").innerHTML = result;
//}
//let brodtextInput = "Varför ser den här hemsidan så konstig ut? Det är som att man inte kan lägga in några posts i den ÄNNU för att PHP är det jobbigaste som finns? Det går alltså inte att få in fler textfiler för att jag ännu inte klurat ut det ÄN. Hur skulle man ens göra det, man skulle behöva någon typ av back-end troligtvis. Men det är också ganska jobbigt. Skulle man kunna göra en simpel javascript till en .txt-fil? Kanske. Hmmm";

//stringTillDivNumeroDos(brodtextInput);


// Två strings som kommer få in hela titeltexten och brödtexten.
const hittadTitel = ''
const hittadBrodtext = ''
//GetTitle ska få in url-et och sedan kunna finna den identifikator som ligger mellan de två separerarna.
// Den identifikatorn ska så småningom kunna kopplas till en string och den stringen ska kunna returnas.
function getTitle () {
  const URLDel = window.location.href;
  const start = URLDel.indexOf("Tit=");
  if (start !== -1) {
    const end = URLDel.indexOf("=le", start);
  if (end !== -1) {
    const brodtextString = URLDel.substring(start + 4, end);
  hittadTitel = brodtextString;
  return hittadTitel
}}}

function getTitle() {
  const URLDel = window.location.href;
  console.log('Urldel', URLDel)
  const start = URLDel.indexOf("Tit=");
  
  if (start !== -1) {
      const end = URLDel.indexOf("=le", start);
      
      if (end !== -1) {
          const titelString = URLDel.substring(start + 4, end);
          let hittadTitel = titelString;

          // Assign the value to the HTML element with id "limptext"
          document.getElementById("titeln").innerHTML = hittadTitel;

          // Log the value to the console

          // Return the extracted text if needed
          return hittadBrodtext;
      }
  }
}


function getBrodtext() {
    const URLDel = window.location.href;
    console.log('Urldel', URLDel)
    const start = URLDel.indexOf("Brod=");
    
    if (start !== -1) {
        const end = URLDel.indexOf("=text", start);
        
        if (end !== -1) {
            const brodString = URLDel.substring(start + 5, end);
            let hittadBrodtext = brodString;

            // Assign the value to the HTML element with id "limptext"
            document.getElementById("limptext").innerHTML = hittadBrodtext;

            // Log the value to the console

            // Return the extracted text if needed
            return hittadBrodtext;
        }
    }
}

// Call the function


getTitle();
getBrodtext();