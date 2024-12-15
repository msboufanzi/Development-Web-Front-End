// Fonction pour échanger les positions des deux volets
function fct3() {

        // Récupérer les éléments du DOM
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        const middle = document.getElementById('midle'); // Le milieu reste stable
        const all = document.getElementById('all');
        
        // Si le panneau de droite est avant le panneau de gauche
        if (all.firstChild === right) {
            // // Remettre dans l'ordre original : gauche - milieu - droite
            // all.insertBefore(left, middle);
            // all.appendChild(right);
            all.innerHTML = left.outerHTML + middle.outerHTML +  right.outerHTML
        } else {
            // 
            all.innerHTML = right.outerHTML + middle.outerHTML + left.outerHTML;
        }
    }
    







    // Variables globales
let selectedCell = null;

// Fonction pour initialiser les interactions avec le tableau
function initTableInteractions() {
    const table = document.querySelector('table');
    const wordInput = document.getElementById('wordInput');
    const updateBtn = document.getElementById('updateBtn');

    // Ajouter un écouteur d'événements pour les clics sur les cellules du tableau
    table.addEventListener('click', (e) => {
        if (e.target.tagName === 'TD') {
            selectCell(e.target);
        }
    });

    // Ajouter un écouteur d'événements pour le bouton de mise à jour
    updateBtn.addEventListener('click', () => {
        if (selectedCell) {
            selectedCell.textContent = wordInput.value;
            // S'assurer que le style de bordure est maintenu après la mise à jour
            selectedCell.style.border = '3px dashed blue';
        }
    });
}

// Fonction pour sélectionner une cellule
function selectCell(cell) {
    if (selectedCell) {
        selectedCell.style.border = ''; // Supprimer le style en ligne
    }
    selectedCell = cell;
    selectedCell.style.border = '3px dashed blue'; // Ajouter le style en ligne
    document.getElementById('wordInput').value = selectedCell.textContent;
}

// Attendre que le DOM soit chargé avant d'initialiser les interactions
document.addEventListener('DOMContentLoaded', initTableInteractions);









// Fonction pour mettre à jour le nombre de mots
function fct2() {
    const table = document.querySelector('table');
    const wordCount = table.rows.length - 1; // Soustraire 1 pour exclure la ligne d'en-tête
    document.getElementById('wordCount').outerHTML = wordCount;
}

// Appeler la fonction au chargement de la page
window.onload = fct2;


