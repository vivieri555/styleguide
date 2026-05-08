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
/* Drop down menyn*/
function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}
/* toggla mellan att visa o ta bort menyn visuellt */
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