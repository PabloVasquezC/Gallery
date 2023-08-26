// Función para abrir el modal al hacer clic en una imagen
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('click', function() {
        modalImg.style.borderRadius = "10px";
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.style.fontFamily = 'Dancing Script'
        captionText.innerHTML = this.getAttribute("data-description");

    });
});

// Función para cerrar el modal
var span = document.getElementsByClassName("close")[0];

span.addEventListener('click', function() {
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});