// script.js - module om html bestanden in te laden
// geschikt voor header, footer en menu
// functie laadt een html bestand en zet het in de pagina
function load_html_file(file_name, element_id, callback) {
  // zoek het element waar de html in moet komen
  const element = document.getElementById(element_id);
  // als het element niet bestaat, stop dan
  if (!element) {
    console.error('element met id "' + element_id + '" niet gevonden');
    return;
  }
  // laad het html bestand
  fetch(file_name)
    .then(function (response) {
      // controleer of het laden gelukt is
      if (!response.ok) {
        throw new Error("bestand niet gevonden: " + file_name);
      }
      return response.text();
    })
    .then(function (html) {
      // zet de html in het element
      element.innerHTML = html;
      // als er een callback is, voer die uit nadat html is ingeladen
      if (callback && typeof callback === "function") {
        callback();
      }
    })
    .catch(function (error) {
      // als er iets fout gaat, toon een foutmelding
      console.error("fout bij laden van " + file_name + ":", error);
      element.innerHTML =
        '<p style="color: red;">fout: bestand kon niet worden geladen</p>';
    });
}

function MenuToggle() {
  const secondNav = document.getElementById("second-nav-extend-menu");
  const lineDiv = document.getElementById("lines-div-menu");

  lineDiv.addEventListener("click", () => {
    secondNav.classList.toggle("open");
    if (secondNav.classList.contains("open")) {
      lineDiv.style.transform = "rotate(-90deg)";
    } else {
      lineDiv.style.transform = "rotate(0deg)";
    }
  });
}


// wacht tot de pagina volledig geladen is
document.addEventListener("DOMContentLoaded", function () {
  // laad de header als er een element met id="header-plaats" bestaat
  if (document.getElementById("header-plaats")) {
    load_html_file("HTML/header.html", "header-plaats");
  }
  // laad het menu als er een element met id="menu-plaats" bestaat, en initialiseer daarna toggle
  if (document.getElementById("menu-plaats")) {
    load_html_file("HTML/menu.html", "menu-plaats", MenuToggle);
  }
  // laad de footer als er een element met id="footer-plaats" bestaat
  if (document.getElementById("footer-plaats")) {
    load_html_file("HTML/footer.html", "footer-plaats");
  }
});
