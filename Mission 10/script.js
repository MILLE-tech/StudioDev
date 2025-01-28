document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector("#facture tbody");
    const ligneModele = document.querySelector(".ligne-modele");

    // Ajouter une ligne
    document.getElementById("ajouter-ligne").addEventListener("click", () => {
        ajouterLigne();
    });

    // Remplir automatiquement
    document.getElementById("remplir-auto").addEventListener("click", () => {
        const descriptions = ["Produit A", "Produit B", "Produit C", "Service D"];
        document.querySelectorAll(".ligne-modele").forEach((ligne) => {
            ligne.querySelector(".desc").value = descriptions[Math.floor(Math.random() * descriptions.length)];
            ligne.querySelector(".qte").value = Math.floor(Math.random() * 10) + 1;
            ligne.querySelector(".prix").value = (Math.random() * 100).toFixed(2);
        });
    });

    // Calculer les totaux
    document.getElementById("calculer").addEventListener("click", () => {
        let sousTotal = 0;

        document.querySelectorAll(".ligne-modele").forEach((ligne) => {
            const qte = parseInt(ligne.querySelector(".qte").value) || 0;
            const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
            const total = qte * prix;

            ligne.querySelector(".total").textContent = total.toFixed(2);
            sousTotal += total;
        });

        const remise = parseFloat(document.getElementById("remise").value) / 100;
        const taxe = parseFloat(document.getElementById("taxe").value) / 100;
        let frais = 5.00;

        if (sousTotal > 100) frais = 0; // Gratuit à partir de 100 €
        document.getElementById("frais").value = frais.toFixed(2);

        const sousTotalRemise = sousTotal - (sousTotal * remise);
        const taxeTotale = sousTotalRemise * taxe;
        const soldeFinal = sousTotalRemise + taxeTotale + frais;

        document.getElementById("sous-total").textContent = sousTotal.toFixed(2);
        document.getElementById("taxe-total").textContent = taxeTotale.toFixed(2);
        document.getElementById("solde").textContent = soldeFinal.toFixed(2);

        const remiseWrapper = document.getElementById("sous-total-remise-wrapper");
        if (remise > 0) {
            remiseWrapper.style.display = "block";
            document.getElementById("sous-total-remise").textContent = sousTotalRemise.toFixed(2);
        } else {
            remiseWrapper.style.display = "none";
        }
    });

    // Bouton pour supprimer une ligne
    function supprimerLigne(event) {
        const lignes = document.querySelectorAll("#facture tbody tr");
        if (lignes.length > 1) {
            event.target.closest("tr").remove();
        } else {
            alert("Il doit y avoir au moins une ligne dans la facture.");
        }
    }

    // Ajouter une ligne (avec suppression configurée)
    function ajouterLigne() {
        const nouvelleLigne = ligneModele.cloneNode(true);
        nouvelleLigne.querySelectorAll("input").forEach(input => input.value = "");
        nouvelleLigne.querySelector(".supprimer-ligne").addEventListener("click", supprimerLigne);
        tableBody.appendChild(nouvelleLigne);
    }

    // Initialiser le bouton supprimer pour la ligne modèle
    ligneModele.querySelector(".supprimer-ligne").addEventListener("click", supprimerLigne);

    // Annuler tout
    document.getElementById("reset").addEventListener("click", () => {
        tableBody.innerHTML = "";
        ajouterLigne(); // S'assurer qu'il reste une ligne

        document.getElementById("remise").value = 0;
        document.getElementById("taxe").value = 20;
        document.getElementById("frais").value = 5.00;

        ["sous-total", "sous-total-remise", "taxe-total", "solde"].forEach(id => {
            document.getElementById(id).textContent = "0.00";
        });

        document.getElementById("sous-total-remise-wrapper").style.display = "none";
    });
});

document.getElementById("retour").addEventListener("click", function() {
    window.history.back();  // Cela vous ramène à la page précédente dans l'historique
});