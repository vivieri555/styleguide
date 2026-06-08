hideAllSections();

/* laddningsindikator relaterat */
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("isLoading").style.display = "block";
}

const changeText = document.getElementById('loadingBtn');
changeText.addEventListener('click', function() {
    var pic = document.getElementById('loadCode');
    if (pic.style.display === 'none' || pic.style.display === '') {
        pic.style.display = 'block';
        this.textContent = 'Dölj kod';
    } else {
        pic.style.display = 'none';
        this.textContent = 'Klicka här för kodexempel';
    }
});
//        Länkar för att visa/dölja menyval
function hideAllSections() {
  const sections = [
"headlines", "fluentText", "divBtns", "tableContainer", "navigation", "msgWarn",
"loadHead", "panel", "formsContainer", "colorContainer"
  ];
  sections.forEach(id => {
    const section = document.getElementById(id);
    if(section) section.classList.add("hidden");
  });
}
function hideEachSection(id, div) {
  if (id) {
  id.addEventListener("click", function(e) {
    e.preventDefault();
    hideAllSections();
    const targetDiv = document.getElementById(div);
      if (targetDiv) {
      targetDiv.classList.remove("hidden");
      }
    });
  }
}
const headlinesLink = document.getElementById("headlinesLink");
if (headlinesLink) {
    hideEachSection(headlinesLink, "headlines");
}
const fluentTextLink = document.getElementById("fluentTextLink");
if(fluentTextLink) {
  hideEachSection(fluentTextLink, "fluentText");
}

const divBtnsLink = document.getElementById("divBtnsLink");
if(divBtnsLink) {
  hideEachSection(divBtnsLink, "divBtns");
}

const tableContainerLink = document.getElementById("tableContainerLink");
if(tableContainerLink) {
  hideEachSection(tableContainerLink, "tableContainer");
}
const navigationLink = document.getElementById("navigationLink");
if(navigationLink) {
  hideEachSection(navigationLink, "navigation");
}

const msgWarnLink = document.getElementById("msgWarnLink");
if(msgWarnLink) {
  hideEachSection(msgWarnLink, "msgWarn");
}
const loadHeadLink = document.getElementById("loadHeadLink");
if(loadHeadLink) {
  hideEachSection(loadHeadLink, "loadHead");
}
const panelLink = document.getElementById("panelLink");
if(panelLink) {
  hideEachSection(panelLink, "panel");
}

const formsContainerLink = document.getElementById("formsContainerLink");
if(formsContainerLink) {
  hideEachSection(formsContainerLink, "formsContainer");
}
const colorContainerLink = document.getElementById("colorContainerLink");
if(colorContainerLink) {
  hideEachSection(colorContainerLink, "colorContainer");
}

/* Drop down menyn*/
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}
/* visa meny */
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}