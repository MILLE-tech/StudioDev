// Fonction pour effectuer les opérations (+, -, *, /)
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('first-number').value);
    const num2 = parseFloat(document.getElementById('second-number').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Veuillez entrer des nombres valides dans les deux champs.');
        return;
    }

    // Selon l'opération choisie
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('La division par zéro est impossible.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Opération non reconnue.");
            return;
    }

    // Afficher le résultat dans le champ "Résultat"
    document.getElementById('result').value = result;
}

// Fonction pour vérifier si le premier nombre est pair ou impair
function checkParity() {
    const result = parseFloat(document.getElementById('result').value);

    if (isNaN(result)) {
        alert('Veuillez entrer un nombre valide dans le premier champ.');
        return;
    }

    const parity = (result % 2 === 0) ? 'Pair' : 'Impair';
    
    // Afficher le résultat de la parité dans le champ correspondant
    document.getElementById('parity-result').value = parity;
}

// Fonction pour permuter les valeurs des deux champs
function swapNumbers() {
    const num1 = document.getElementById('first-number').value;
    const num2 = document.getElementById('second-number').value;

    // Permuter les valeurs
    document.getElementById('first-number').value = num2;
    document.getElementById('second-number').value = num1;
}
