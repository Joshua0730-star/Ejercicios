// IMPLEMENTAR FUNCIONALIDADES


// Seleccionamos los elementos necesarios
const buttonContainer = document.querySelector(".button_container-box");
const followButton = document.querySelector(".button");
const iconAdd = document.querySelector(".icon-add");

// Variable para rastrear el estado actual (si está siguiendo o no)
let isFollowing = false;

// Evento al hacer clic en el botón

buttonContainer.addEventListener("click", (event) => {
    event.preventDefault(); // <-- evita que se recargue la página
    // Cambiar el estado
    isFollowing = !isFollowing;

    // Cambiar texto y estilos del botón
    followButton.textContent = isFollowing ? "Following" : "Follow";
    followButton.style.color = isFollowing ? "#333333" : "#ffffff";

    // Cambiar estilos de la caja contenedora (colores y borde)
    buttonContainer.style.backgroundColor = isFollowing ? "#ffffff" : "#333333";
    buttonContainer.style.color = isFollowing ? "#333333" : "#ffffff";
    buttonContainer.style.border = isFollowing ? "2px solid #333333" : "none";

    // Ajustar animación del ícono
    iconAdd.style.transition = "all 0.3s ease";
    iconAdd.style.display = isFollowing ? "none" : "flex";
    iconAdd.style.opacity = isFollowing ? "0" : "1";

    // Centrar texto cuando el ícono desaparezca
    buttonContainer.style.justifyContent = isFollowing ? "center" : "space-between";
});
