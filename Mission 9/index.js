function testqcm() {
    var score = 0;

    // Vérification des réponses
    if (document.getElementById("q1r2").checked) {
        score++;
    }
    if (document.getElementById("q2r2").checked) {
        score++;
    }
    if (document.getElementById("q3r2").checked) {
        score++;
    }
    if (document.getElementById("q4r3").checked) {
        score++;
    }
    if (document.getElementById("q5r2").checked) {
        score++;
    }
    if (document.getElementById("q6r1").checked) {
        score++;
    }
    if (document.getElementById("q7r3").checked) {
        score++;
    }
    if (document.getElementById("q8r1").checked) {
        score++;
    }
    if (document.getElementById("q9r1").checked) {
        score++;
    }
    if (document.getElementById("q10r2").checked) {
        score++;
    }

    // Affichage du score
    alert("Votre score est de : " + score + "/10");
}

function ouvrirCorrige() {
    // Ouvre une fenêtre avec le corrigé (remplacez le contenu par le vrai corrigé)
    var corrigé = `
        <h1>Correction QCM Rocket League</h1>
        <ul>
            <li>Question 1 : Réponse correcte : Marquer des buts avec des voitures et un ballon</li>
            <li>Question 2 : Réponse correcte : 5 minutes</li>
            <li>Question 3 : Réponse correcte : Psyonix</li>
            <li>Question 4 : Réponse correcte : Bleu</li>
            <li>Question 5 : Réponse correcte : Mode standard 2v2</li>
            <li>Question 6 : Réponse correcte : Octane</li>
            <li>Question 7 : Réponse correcte : Neo Tokyo</li>
            <li>Question 8 : Réponse correcte : Flipper</li>
            <li>Question 9 : Réponse correcte : 2015</li>
            <li>Question 10 : Réponse correcte : Utiliser des power-ups pour marquer un but</li>
        </ul>
    `;
    var windowFeatures = "width=600,height=400";
    var newWindow = window.open('', '_blank', windowFeatures);
    newWindow.document.write(corrigé);
    newWindow.document.close();
}

function effacerReponses() {
    // Réinitialise les réponses sélectionnées
    var allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(function(radio) {
        radio.checked = false;
    });
}
