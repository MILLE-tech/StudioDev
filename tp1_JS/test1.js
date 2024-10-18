function test_age() {
    let age = prompt("Quel est votre âge ?");
    if (age < 18) {
        document.write("Vous êtes mineur")
        document.body.style.backgroundColor="red"
    }
    else {
        document.write("Vous êtes majeur")
        document.body.style.backgroundColor="green"
    }
}

function calcul_moyenne() {
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne > 10) {
        document.write("Félicitation vous êtes admis <br>")
        document.body.style.backgroundColor="green"
    }
    else if (moyenne < 10)
        document.write("Désolé vous êtes redoublant <br>")
        document.body.style.backgroundColor="red"
    

    if (moyenne < 0 || moyenne > 20) 
        document.write("Moyenne invalide")
    
    else if (moyenne < 10) 
        document.write("Redoublant")
    
    else if (moyenne < 14) 
        document.write("Mention : Bien")
    
    else 
        document.write("Mention : Assez bien")
    
}

function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "bleu" || couleur == "blue") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "rouge" || couleur == "red") {
        document.body.style.backgroundColor = "red"
    }
    else if (couleur == "vert" || couleur == "green") {
        document.body.style.backgroundColor = "green"
    }
    else if (couleur == "jaune" || couleur == "yellow") {
        document.body.style.backgroundColor = "yellow"
    }
    else if (couleur == "gris" || couleur == "grey") {
        document.body.style.backgroundColor = "grey"
    }
    else {
        alert("Couleur non comprise")
    }
}

function simple_affichage(){
    let n1 = prompt("Donner votre prénom");
    let n2 = prompt("Donner votre nom");
    document.write("Bonjour :" + n1 + n2 )
}