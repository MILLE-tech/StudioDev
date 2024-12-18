document.addEventListener("DOMContentLoaded", () => {
    const spinner = document.querySelector(".spinner");
    
    // Simule la fin du chargement après quelques secondes
    setTimeout(() => {
        spinner.style.display = "none";
    }, 5000); // Délai de 5 secondes
});
