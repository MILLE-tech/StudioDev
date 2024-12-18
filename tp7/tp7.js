/* CARON Arsène */

function Calcul() {
    var prix1 = document.getElementById("prix1").value;
    var quantite1 = document.getElementById("quantite1").value;
    var prix2 = document.getElementById("prix2").value;
    var quantite2 = document.getElementById("quantite2").value;
    var prix3 = document.getElementById("prix3").value;
    var quantite3 = document.getElementById("quantite3").value;

    var res1 = prix1 * quantite1;
    var res2 = prix2 * quantite2;
    var res3 = prix3 * quantite3;

    result1.value = res1;
    result2.value = res2;
    result3.value = res3;

    var total = res1 + res2 + res3;
    totalResult.value = total;
}

function reset() {
    window.location.href = 'index7.html';
}
