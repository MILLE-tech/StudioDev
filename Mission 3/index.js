// Sélectionnez le lien et la section des certifications
const certificationLink = document.getElementById('certification-link');
const certificationsSection = document.getElementById('certifications');

// Ajoutez un événement click au lien
certificationLink.addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    // Afficher ou masquer la section des certifications
    if (certificationsSection.style.display === 'none' || certificationsSection.style.display === '') {
        certificationsSection.style.display = 'block'; // Afficher les certifications
    } else {
        certificationsSection.style.display = 'none'; // Masquer les certifications
    }
});
