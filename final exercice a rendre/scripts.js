

//exercice a ; un fonction pour interchanger les widths size ente volet1 et volet2 .


function swapleft() {
    const table = document.getElementById('left_panel');
    const panel = document.getElementById('right_panel');
  
    table.style.transition = 'width 1s ease';
    panel.style.transition = 'width 1s ease';
  
    table.style.width = '60%';
    panel.style.width = '37%';
  }
  
  function swapright() {
    const table = document.getElementById('left_panel');
    const panel = document.getElementById('right_panel');
  
    table.style.transition = 'width 1s ease';
    panel.style.transition = 'width 1s ease';
  
    table.style.width = '37%';
    panel.style.width = '60%';
  }
  


  


//exercice b; ( une fonction Javascript lit le contenu du tableau à partir d'une table JavaScript)
var verbs = [
    ["Base form", "Past tense", "Past participle", "Translation"],
    ["abide", "abode", "abode", "demeurer"],
    ["awake", "awoke", "awoken", "(se) réveiller, aussi awake/awoke/awoke"],
    ["be", "was/were", "been", "être"],
    ["bear", "bore", "borne", "porter/supporter/soutenir"],
    ["beat", "beat", "beaten", "battre"],
    ["become", "became", "become", "become"],
    ["beget", "begat", "begotten", "engendrer, aussi beget/begot/begotten"],
    ["begin", "began", "begun", "commencer"],
    ["bend", "bent", "bent", "se courber, etc."],
    ["bereave", "bereft", "bereft", "déposséder/priver"],
    ["bring", "brought", "brought", "apporter"],
    ["build", "built", "built", "construire"],
    ["burn", "burnt", "burnt", "brûler"],
    ["burst", "burst", "burst", "éclater"],
    ["buy", "bought", "", "acheter"],
    ["cast", "cast", "cast", "jeter, etc."],
    ["catch", "caught", "caught", "attraper"],
    ["chide", "chid", "chidden", "gronder/réprimander, aussi chide/chid/chid"],
    ["choose", "chose", "chosen", "choisir"],
    ["cleave", "cleft", "cleft", "fendre/coller, aussi cleave/clove/clove"],
    ["cling", "clung", "clung", "se cramponner"],
    ["come", "came", "come", "venir"],
    ["cost", "cost", "cost", "coûter"],
    ["creep", "crept", "crept", "ramper/se glisser/se hérisser"],
    ["crow", "crew", "crowed", "chanter (un coq)/jubiler"],
    ["cut", "cut", "cut", "couper"],
    ["deal", "dealt", "dealt", "distribuer/traiter"],
    ["dig", "dug", "dug", "bêcher"],
    ["do", "did", "", "faire"],
    ["draw", "drew", "drawn", "tirer/dessiner"],
    ["dream", "dreamt", "dreamt", "rêver"],
    ["drink", "drank", "drunk", "boire"],
    ["drive", "drove", "driven", "conduire"],
    ["dwell", "dwelt", "dwelt", "habiter/rester"],
    ["eat", "ate", "eaten", "manger"],
    ["fall", "fell", "fallen", "tomber"],
    ["feed", "fed", "fed", "nourrir"],
    ["feel", "felt", "felt", "(se) sentir"],
    ["fight", "fought", "fought", "combattre"],
    ["find", "found", "found", "trouver"],
    
];
// affiche table de verbs
function displayNames() {
    var table = document.getElementById("data_table");
    var table_content = `
    <tr>
        <th>${verbs[0][0]}</th>
        <th>${verbs[0][1]}</th>
        <th>${verbs[0][2]}</th>
        <th>${verbs[0][3]}</th>
        <th>Actions</th>
    </tr>`;

    verbs.slice(1).forEach((verb, index) => {
        table_content += `
        <tr>
            <td>${verb[0]}</td>
            <td>${verb[1]}</td>
            <td>${verb[2]}</td>
            <td>${verb[3]}</td>
            <td>
                <button onClick='viewVerbDetails(${index + 1})'>Edit</button>
                <button onClick='prepareUpdateVerb(${index + 1})'>update</button>
                <button onClick='confirmDelete(${index + 1})'>Delete</button>
            </td>
        </tr>`;
    });

    table.innerHTML = table_content;
}
/////////////////////////////////////////////////////////////////////////
//exercice c;  
function hide() {
    const wordTableWrapper = document.getElementById('left_panel');
    const rightPanel = document.getElementById('right_panel');
    const rightBarMainBar = document.getElementById('right_bar_main_bar');
    const blueBarImage = document.getElementById('blue_bar_image');
    const hideBlueBarImage = document.getElementById('hide_blue_bar_image');

    //Ajouter des transitions 
    wordTableWrapper.style.transition = 'width 0.3s ease';
    rightPanel.style.transition = 'width 0.3s ease';

    // Agrandit le panneau de gauche et réduit le panneau de droite
    wordTableWrapper.style.width = '80%';
    rightPanel.style.width = '3%';

    // Masquer le contenu principal du panneau de droite mais garder la barre bleue visible
    rightBarMainBar.style.display = 'none';
    
   // Changer la visibilité des boutons bascule
    blueBarImage.style.display = 'none';
    hideBlueBarImage.style.display = 'block';
}

function show() {
    const wordTableWrapper = document.getElementById('left_panel');
    const rightPanel = document.getElementById('right_panel');
    const rightBarMainBar = document.getElementById('right_bar_main_bar');
    const blueBarImage = document.getElementById('blue_bar_image');
    const hideBlueBarImage = document.getElementById('hide_blue_bar_image');

    //Ajouter des transitions 
    wordTableWrapper.style.transition = 'width 0.3s ease';
    rightPanel.style.transition = 'width 0.3s ease';

    //  largeurs d'origine
    wordTableWrapper.style.width = '60%';
    rightPanel.style.width = '37%';

    // Afficher le contenu principal du panneau de droite
    rightBarMainBar.style.display = 'block';
    
    // Changer la visibilité des boutons bascule
    blueBarImage.style.display = 'block';
    hideBlueBarImage.style.display = 'none';
}

///////////////////////////////////////////////////////////////
//exercice d: Les boutons "Edit", "Update" et "Delete" 
// Global variable pour tracker utuliser dans fonction update .
let currentVerbIndex = null;

// model dialog pour edit les verbe detaills
function editmodel(verb) {
    //model container
    const model = document.createElement('div');
    model.id = 'view-model';
    model.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        width: 500px;
    `;

    // Model content
    model.innerHTML = `
        <h2>Verb Details</h2>
        <div>
            <p><strong>Base form:</strong> ${verb[0]}</p>
            <p><strong>Past tense:</strong> ${verb[1]}</p>
            <p><strong>Past participle:</strong> ${verb[2]}</p>
            <p><strong>Translation:</strong> ${verb[3]}</p>
            <p><strong>Synonyms:</strong> ${verb[4] || '-'}</p>
            <p><strong>Example sntence:</strong> ${verb[5] || '-'}</p>
            <p><strong>Related images:</strong> ${verb[6] || '-'}</p>
        </div>
        <div style="margin-top: 15px;">
            <button onclick="closeviewmodel()">Close</button>
        </div>
    `;

    // ajouter overlay
    const overlay = document.createElement('div');
    overlay.id = 'model-over';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    //  model and overlay 
    document.body.appendChild(overlay);
    document.body.appendChild(model);
}

// Create a model dialog pour updating les verbe details
function updatemodel(verb) {
    // cree u model container
    const model = document.createElement('div');
    model.id = 'update-model';
    model.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 1000;
        width: 500px;
    `;

    // model content
    model.innerHTML = `
        <h2>Update Verb Details</h2>
        <form id="update-verb-form">
            <div>
                <label>Base Form:</label>
                <input type="text" name="baseForm" value="${verb[0]}" required>
            </div>
            <div>
                <label>Past Tense:</label>
                <input type="text" name="pastTense" value="${verb[1]}" required>
            </div>
            <div>
                <label>Past Participle:</label>
                <input type="text" name="pastParticiple" value="${verb[2]}" required>
            </div>
            <div>
                <label>Translation:</label>
                <input type="text" name="translation" value="${verb[3]}" required>
            </div>
            <div>
                <label>Synonyms:</label>
                <input type="text" name="synonyms" value="${verb[4] || ''}">
            </div>
            <div>
                <label>Example Sentence:</label>
                <textarea name="example">${verb[5] || ''}</textarea>
            </div>
            <div>
                <label>Related Images (URL):</label>
                <input type="text" name="images" value="${verb[6] || ''}">
            </div>
            <div style="margin-top: 15px;">
                <button type="button" onclick="saveverbupdate()">Save Update</button>
                <button type="button" onclick="closeupdatemodel()">Cancel</button>
            </div>
        </form>
    `;

    // ajouter overlay
    const overlay = document.createElement('div');
    overlay.id = 'model-over';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 999;
    `;

    
    document.body.appendChild(overlay);
    document.body.appendChild(model);
}

// afficher 
function viewVerbDetails(index) {
    
    if (index < 1 || index >= verbs.length) {
        alert("invalid");
        return;
    }

    // Storer index
    currentVerbIndex = index;

    // verbe view
    const verb = verbs[index];

    // afficher model
    editmodel(verb);
}

// Prepare for updating verb
function prepareUpdateVerb(index) {
    //  index validiation
    if (index < 1 || index >= verbs.length) {
        alert("invalid");
        return;
    }

    // Storer index
    currentVerbIndex = index;

    // verbe pour  update
    const verb = verbs[index];

    // Create and show the update model
    updatemodel(verb);
}

// updating
function saveverbupdate() {
    // Ensure we have a valid index
    if (currentVerbIndex === null) {
        alert("update");
        return;
    }

    // Get form values
    const form = document.getElementById('update-verb-form');
    
    // Update the verb in the array with new values
    verbs[currentVerbIndex] = [
        form.baseForm.value,
        form.pastTense.value,
        form.pastParticiple.value,
        form.translation.value,
        form.synonyms.value,
        form.example.value,
        form.images.value
    ];

    // fermer  model et refresher 
    closeupdatemodel();
    displayNames();
    alert("verb updated ");

    //  on rfresh l index 
    currentVerbIndex = null;
}

// fermer les deux model
function closeviewmodel() {
    const model = document.getElementById('view-model');
    const overlay = document.getElementById('model-over');
    
    if (model) document.body.removeChild(model);
    if (overlay) document.body.removeChild(overlay);
}
function closeupdatemodel() {
    const model = document.getElementById('update-model');
    const overlay = document.getElementById('model-over');
    
    if (model) document.body.removeChild(model);
    if (overlay) document.body.removeChild(overlay);
}




// supprimer verb 
function confirmDelete(index) {
    if (index < 1 || index >= verbs.length) {
        alert("invalid");
        return;
    }

    var rep = prompt("delete the verb? (y/N)");
    if (rep === 'y') {
      
        const suprimlettre = verbs[index][0].charAt(0).toLowerCase();
        
        // supp
        verbs.splice(index, 1);
        
        // Check if any verbs remain with this letter
        const hasRemainingVerbs = verbs.slice(1).some(verb => 
            verb[0].charAt(0).toLowerCase() === suprimlettre
        );
        
        // display and statistics
        displayNames();
        
        // si no verbs remain with this letter update  liens
        if (!hasRemainingVerbs) {
            display_letters();
        }
        
        // Update statistics 
        updateStatistics();
        
        alert("Verb deleted ");
    } else if (rep === 'n') {
        alert("canceled.");
    } else {
        alert(" Please type 'y' or 'n'.");
    }
}


// Initialize table on page load
window.onload = function() {
    displayNames();
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function display_letters() {
    const linkList = document.getElementById('link_list');
    const letters = new Set();
    
    // les permier lettre de chaque verbe
    verbs.slice(1).forEach(verb => {
        letters.add(verb[0].charAt(0).toLowerCase());
    });
    
    // organizer les letters alphabetically
    const sortedLetters = Array.from(letters).sort();
    
    // creations des liens
    let linkContent = '';
    sortedLetters.forEach(letter => {
        linkContent += `
            <li>
                <a href="#" onclick="scrollToLetter('${letter}')">
                    Here is a link to verbs that start with the letter <span>${letter}</span>
                </a>
            </li>`;
    });
    
    linkList.innerHTML = linkContent;
     // Update statistics apres updating les link 
     updateStatistics();
}

// fonction pour que on deplace a chaque premier verb qui a cette lettre 
function scrollToLetter(letter) {
    const table = document.getElementById('data_table');
    const rows = table.getElementsByTagName('tr');
    
    // inicialiser
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.color = '';
    }
    
    // trouver le premier verbe que se trouve avec cette lettre
    for (let i = 1; i < rows.length; i++) {
        const firstLetter = rows[i].cells[0].textContent.charAt(0).toLowerCase();
        if (firstLetter === letter.toLowerCase()) {
            // Highlight the row
            rows[i].style.color = 'red';
            // Scroll to the row
            rows[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function pour ajouter un verb
function addVerb() {
    // creation d'un model
    const model = document.createElement('div');
    model.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border: 2px solid black;
        z-index: 1000;
    `;
    
    model.innerHTML = `
        <h3>Add New Verb</h3>
        <div>
            <label>Base Form: </label>
            <input type="text" id="newBaseForm" required>
        </div>
        <div>
            <label>Past Tense: </label>
            <input type="text" id="newPastTense">
        </div>
        <div>
            <label>Past Participle: </label>
            <input type="text" id="newPastParticiple">
        </div>
        <div>
            <label>Translation: </label>
            <input type="text" id="newTranslation">
        </div>
        <button onclick="submitNewVerb()">Add</button>
        <button onclick="closeAddmodel()">Cancel</button>
    `;
    
    document.body.appendChild(model);
}

// applique le nouveau verb
function submitNewVerb() {
    const baseForm = document.getElementById('newBaseForm').value;
    const pastTense = document.getElementById('newPastTense').value;
    const pastParticiple = document.getElementById('newPastParticiple').value;
    const translation = document.getElementById('newTranslation').value;
    
    // Valider
    if (!baseForm) {
        alert('Base form is required');
        return;
    }
    
    // Creation de un nouveau tableau
    const newVerb = [baseForm, pastTense, pastParticiple, translation];
    
    //alphabitique ordre
    let insertIndex = 1;
    for (let i = 1; i < verbs.length; i++) {
        if (baseForm.toLowerCase() < verbs[i][0].toLowerCase()) {
            insertIndex = i;
            break;
        }
        insertIndex = i + 1;
    }
    
    //lajouter
    verbs.splice(insertIndex, 0, newVerb);
    
    // display
    displayNames();
    display_letters();
    
    // les case incomplete on le donne un rouge border 
    const row = document.querySelector(`#data_table tr:nth-child(${insertIndex + 1})`);
    if (!pastTense || !pastParticiple || !translation) {
        row.style.border = '2px solid red';
    }
    
    closeAddmodel();
}

// Function pour fermer le model 
function closeAddmodel() {
    const model = document.querySelector('div[style*="position: fixed"]');
    if (model) {
        document.body.removeChild(model);
    }
}

// Functionpour searcher sur notre verb
function search() {
    const searchInput = document.getElementById('searsh_input').value.toLowerCase();
    const table = document.getElementById('data_table');
    const rows = table.getElementsByTagName('tr');
    
    // Reset
    for (let i = 1; i < rows.length; i++) {
        rows[i].style.color = '';
    }
    
    // trouver le verb
    for (let i = 1; i < rows.length; i++) {
        const verb = rows[i].cells[0].textContent.toLowerCase();
        if (verb === searchInput) {
            // colorer le ligne de verbe en rouge et le scroller en haut .
            rows[i].style.color = 'red';
          //  rows[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fonction pour modify statistics
function updateStatistics() {
    const statisticsDiv = document.getElementById('statistisc');
    const letterCounts = {};
    
    // Comptez les verbes pour chaque lettre
    verbs.slice(1).forEach(verb => {
        const firstLetter = verb[0].charAt(0).toLowerCase();
        letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1;
    });
    
    // Calculer la moyenn
    const totalVerbs = Object.values(letterCounts).reduce((a, b) => a + b, 0);
    const uniqueLetters = Object.keys(letterCounts).length;
    const average = uniqueLetters ? Math.round(totalVerbs / uniqueLetters) : 0;
    
    //Créer une chaîne de statistiques
    let statsText = `${average} verbs on average per letter : `;
    
    // Ajouter un nombre de lettres individuel
    statsText += Object.entries(letterCounts)
        .sort((a, b) => a[0].localeCompare(b[0])) // Sort alphabetically
        .map(([letter, count]) => `${letter}→${count}`)
        .join(' ');
    
    statisticsDiv.textContent = statsText;
}



function openTutorial() {
    window.open('https://www.youtube.com/watch?v=MA3NFtLc22k', '_blank');
}


// Initialize 
window.onload = function() {
    displayNames();
    display_letters();
    updateStatistics();
}
