/*Visa kod för laddningsindikatorn */
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