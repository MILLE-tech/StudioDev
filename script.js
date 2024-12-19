function downloadDatabase() {
    // Simuler un téléchargement en redirigeant vers un fichier SQL
    const link = document.createElement('a');
    link.href = 'GestionCommandes.sql'; // Remplacez par le chemin réel de votre fichier SQL
    link.download = 'base_de_donnees.sql';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
