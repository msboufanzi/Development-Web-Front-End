function pagePrecedente(){
    // La fonction réalise le même effet que revenir en arrière dans le navigateur
    history.back()
}


function nouvelleFenetre() {
    // Ouvrir une nouvelle fenêtre
    var w = window.open('', '_blanc', 'width=500,height=500');
    
    // Ouvrir le document
    w.document.open();
    
    // Écrire le contenu HTML
    w.document.write("<!DOCTYPE html>");
    w.document.write("<html>");
    w.document.write("<head>");
    w.document.write("<title>lab3c</title>");
    w.document.write("</head>");
    w.document.write("<body>");
    w.document.write("<h1>Fenêtre créée avec du code JavaScript</h1>");
    w.document.write("<h2>Syntaxe de la méthode open(...) : window.open(URL,name,options,remplace)</h2>");
    w.document.write("<p>Voir le commentaire dans lab3c.js</p>");
    w.document.write("</body>");
    w.document.write("</html>");
    
    // Vérifier et logger le titre
    console.log(w.document.title);
    // Fermer le document
    w.document.close();
    


    // Mettre en commentaire le premier test et essayez 
    // window.open("lab3a.htm", "_blank", 'top=100, left=100, width=500, height=500')

    /* Syntaxe générale : window.open(URL,name,options,remplace)
    name :
        _blank 		- nouvelle fenêtre ( valeur par défaut)
        _parent 	- frame parent
        _self 		- page courante
        name 		- nom de la fenêtre 
    options : 
        toolbar = [ yes | no ]  			affichage de la barre d’outils
        location = [ yes | no ]				affichage de l’URL de la page 
        directories = [ yes | no ]  		affichage de la barre le lien
        status = [ yes | no ]				affichage de la barre d’état
        menubar = [ yes | no ]				affichage de la barre de menus
        scrollbars= [ yes | no | auto ] 	affichage des ascenseurs
        resizable = [ yes | no ]			fenêtre redimensionnable ou non
        width = pixels, height = pixels		largeur et hauteur en pixels
        top = pixels, left = pixels 		positionnement vertical et horizontal
        fullscreen = [ yes | no ] 			affichage 	
        remplace: pour remplacer l'entrée courante dans l'historique (optionnel)
    */
}