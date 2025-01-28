//Exercice 1 : Trouver le plus grand
document.getElementById("demo1").addEventListener("click", function() {
    let num1 = parseInt(prompt("Entrez le premier nombre:"));
    let num2 = parseInt(prompt("Entrez le deuxième nombre:"));
    let num3 = parseInt(prompt("Entrez le troisième nombre:"));
    let largest = Math.max(num1, num2, num3);
    alert("Le plus grand nombre est: " + largest);
});

document.getElementById("sol1").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo1 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function findLargest(num1, num2, num3) { return Math.max(num1, num2, num3); }";
        document.getElementById("demo1").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 2 : Table de multiplication
document.getElementById("demo2").addEventListener("click", function() {
    let number = parseInt(prompt("Entrez un nombre pour générer sa table de multiplication (1 à 10):"));
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }
    alert(result);
});

document.getElementById("sol2").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo2 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function generateMultiplicationTable(number) { let result = ''; for (let i = 1; i <= 10; i++) { result += number + ' x ' + i + ' = ' + (number * i) + '\\n'; } return result; }";
        document.getElementById("demo2").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 3 : Calculer la moyenne
document.getElementById("demo3").addEventListener("click", function() {
    let numbers = prompt("Entrez une liste de nombres séparés par des virgules:").split(",").map(Number);
    let sum = numbers.reduce((a, b) => a + b, 0);
    let average = sum / numbers.length;
    alert("La moyenne est: " + average);
});

document.getElementById("sol3").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo3 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function calculateAverage(numbers) { let sum = numbers.reduce((a, b) => a + b, 0); return sum / numbers.length; }";
        document.getElementById("demo3").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 4 : Vérifier année bissextile
document.getElementById("demo4").addEventListener("click", function() {
    let year = parseInt(prompt("Entrez une année:"));
    let isLeap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    alert(isLeap ? "L'année est bissextile." : "L'année n'est pas bissextile.");
});

document.getElementById("sol4").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo4 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function isLeapYear(year) { return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)); }";
        document.getElementById("demo4").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 5 : Convertir Celsius en Fahrenheit
document.getElementById("demo5").addEventListener("click", function() {
    let celsius = parseFloat(prompt("Entrez une température en Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(celsius + "°C = " + fahrenheit + "°F");
});

document.getElementById("sol5").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo5 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function convertCelsiusToFahrenheit(celsius) { return (celsius * 9/5) + 32; }";
        document.getElementById("demo5").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 6 : Supprimer les doublons
document.getElementById("demo6").addEventListener("click", function() {
    let array = prompt("Entrez un tableau de nombres séparés par des virgules:").split(",").map(Number);
    let uniqueArray = [...new Set(array)];
    alert("Tableau sans doublons: " + uniqueArray);
});

document.getElementById("sol6").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo6 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function removeDuplicates(array) { return [...new Set(array)]; }";
        document.getElementById("demo6").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 7 : Trier un tableau
document.getElementById("demo7").addEventListener("click", function() {
    let array = prompt("Entrez un tableau de nombres séparés par des virgules:").split(",").map(Number);
    let sortedArray = array.sort((a, b) => a - b);
    alert("Tableau trié: " + sortedArray);
});

document.getElementById("sol7").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo7 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function sortArray(array) { return array.sort((a, b) => a - b); }";
        document.getElementById("demo7").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 8 : Générer un nombre aléatoire
document.getElementById("demo8").addEventListener("click", function() {
    let min = parseInt(prompt("Entrez la borne inférieure:"));
    let max = parseInt(prompt("Entrez la borne supérieure:"));
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("Nombre aléatoire: " + randomNum);
});

document.getElementById("sol8").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo8 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function generateRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }";
        document.getElementById("demo8").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 9 : Compter les caractères uniques
document.getElementById("demo9").addEventListener("click", function() {
    let string = prompt("Entrez une chaîne de caractères:");
    let uniqueChars = new Set(string);
    alert("Nombre de caractères uniques: " + uniqueChars.size);
});

document.getElementById("sol9").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo9 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function countUniqueChars(str) { return new Set(str).size; }";
        document.getElementById("demo9").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 10 : Trouver le deuxième plus grand
document.getElementById("demo10").addEventListener("click", function() {
    let array = prompt("Entrez un tableau de nombres séparés par des virgules:").split(",").map(Number);
    let sortedArray = array.sort((a, b) => b - a);
    let secondLargest = sortedArray[1];
    alert("Le deuxième plus grand nombre est: " + secondLargest);
});

document.getElementById("sol10").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo10 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function findSecondLargest(array) { let sortedArray = array.sort((a, b) => b - a); return sortedArray[1]; }";
        document.getElementById("demo10").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 11 : Compter les mots
document.getElementById("demo11").addEventListener("click", function() {
    let sentence = prompt("Entrez une phrase:");
    let wordCount = sentence.split(/\s+/).length;
    alert("Nombre de mots: " + wordCount);
});

document.getElementById("sol11").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo11 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function countWords(sentence) { return sentence.split(/\s+/).length; }";
        document.getElementById("demo11").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 12 : Inverser une phrase
document.getElementById("demo12").addEventListener("click", function() {
    let phrase = prompt("Entrez une phrase:");
    let reversedPhrase = phrase.split(" ").reverse().join(" ");
    alert("La phrase inversée est: " + reversedPhrase);
});

document.getElementById("sol12").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo12 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function ReverseSentence(phrase){ return phrase.split(' ').reverse().join(' '); }";
        document.getElementById("demo12").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 13 : Générer un mot de passe
document.getElementById("demo13").addEventListener("click", function() {
    let length = prompt("Entrez la longueur du mot de passe:");
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    alert("Le mot de passe généré est: " + password);
});

document.getElementById("sol13").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo13 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function GeneratePassword(length){ let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; let password = ''; for(let i = 0; i < length; i++){ password += charset.charAt(Math.floor(Math.random() * charset.length)); } return password; }";
        document.getElementById("demo13").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 14 : Vérifier une anagramme
document.getElementById("demo14").addEventListener("click", function() {
    let str1 = prompt("Entrez la première chaîne:");
    let str2 = prompt("Entrez la deuxième chaîne:");
    let isAnagram = str1.split("").sort().join("") === str2.split("").sort().join("");
    alert((isAnagram ? "Les chaînes sont des anagrammes." : "Les chaînes ne sont pas des anagrammes."));
});

document.getElementById("sol14").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo14 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function AreAnagrams(str1, str2){ return str1.split('').sort().join('') === str2.split('').sort().join(''); }";
        document.getElementById("demo14").insertAdjacentElement("afterend", newDiv);
    }
});

//Exercice 15 : Vérifier un carré parfait
document.getElementById("demo15").addEventListener("click", function() {
    let number = prompt("Entrez un nombre:");
    let isPerfectSquare = Math.sqrt(number) % 1 === 0;
    alert((isPerfectSquare ? "Le nombre est un carré parfait." : "Le nombre n'est pas un carré parfait."));
});

document.getElementById("sol15").addEventListener("click", function() {
    let existingDiv = document.querySelector("#demo15 + div");
    if (existingDiv) {
        existingDiv.remove();
    } else {
        let newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "grey";
        newDiv.style.padding = "10px";
        newDiv.style.marginTop = "10px";
        newDiv.style.marginRight = "500px";
        newDiv.style.marginLeft = "500px";
        newDiv.style.border = "1px solid black";
        newDiv.textContent = "function IsPerfectSquare(num){ return Math.sqrt(num) % 1 === 0; }";
        document.getElementById("demo15").insertAdjacentElement("afterend", newDiv);
    }
});