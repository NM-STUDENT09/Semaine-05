/* -----------------------------------------------------
            SEMAINE 05 - Landing Page
            Sujet : FEEL THE MUSIC
 ==================================================== */
console.log('SEM 05 - EXERCICE : LANDING PAGE');
console.log('    ');
// 1. Formulaire créé sur la page comments.html.
/* avec les clés attendues par l'API:
      - clé 1 = "auteur" avec pour attribut "name": "auteur"
      - clé 2 = "comment" avec pour attribut "name":"comment
      et le bouton a pour ID : "submit-btn" */

// 2. Définition de la variable "myHeaders" contenant la paire de clé/valeur suivante: "Content-Type": "application/json"
let myHeaders = new Headers({ 'Content-Type': 'application/json' });

// 3. Création de la variable nommée "form" qui pointe vers le formulaire :
let form = document.getElementById('my-form');

// 4. Création d'une écoute d'évènement sur le bouton ayant pour ID "submit-btn".

document.getElementById('submit-btn').addEventListener('click', () => {
  // Création des variables pour chaque clé du JSON

  // -----------------------------------------------------------
  //    Test de vérification
  //    console.log('CLICK'); // OK
  // -----------------------------------------------------------

  let formAuteur = document.getElementById('auteur').value;
  let formComment = document.getElementById('comment').value;

  // Remplace formData car ce dernier ne fonctionne pas :
  let body = {
    auteur: formAuteur,
    comment: formComment,
  };

  // Création d'une variable "myform" qui stocke l'écoute ajouté sur le formulaire:

  // -------------------------------------------------------------
  //    ETAPE 1 : Envoi des données venant du formulaire vers l'API
  // -------------------------------------------------------------
  // Lancement de la méthode FETCH qui se connecte à l'URL de l'API

  fetch('https://quotes-light-api.herokuapp.com/api/comments/', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
    /*
        Requête qui passe en deuxième argument un objet avec les 3 paramètres suivants :
            // ENVOI = Méthode d'envoi
            // ENTETE
            // CORPS = Construction du BODY avec la méthode JSON.stringify,
    */
  });
  // Affichage dans la Console
  console.log(auteur);
  console.log(comment);
});

// console.log('TEST'); // Test de vérification

// -----------------------------------------------------
//    ETAPE 2 : Récupération des données venant de l'API avec la méthode FETCH
// -----------------------------------------------------
let getQuotes = () => {
  fetch(' https://quotes-light-api.herokuapp.com/api/comments/ ', {
    // Requête de Récupération
    method: 'GET',
  })
    .then(response => {
      // Précision sur le Format de la Réponse :
      return response.json();
    })
    .then(response => {
      // La Réponse est un tableau que l'on stocke dans une variable :
      let data = response;

      // Boucle sur le tableau pour aller rechercher chaque élément du tableau et le placer dans une div :
      data.forEach(element => {
        // Création dynamique une DIV pour afficher le commentaire dans la page comments.html

        // Définition des variables des conteneurs qui vont stocker les nouveaux éléments (provenant de l'API) à insérer:
        let newDivAuteur = document.createElement('div');
        let newDivComment = document.createElement('div');

        // Définition des variables Insertion du contenu texte dans l'élément à greffer :
        let newContentAuteur = document.createTextNode(element.auteur);
        let newContentComment = document.createTextNode(element.comment);

        // Greffer un enfant à l'élément PARENT :
        newDivAuteur.appendChild(newContentAuteur);
        newDivComment.appendChild(newContentComment);

        // Création dynamique du style de la DIV créée dynamiquement:
        // Cas 01 : Introduire le style directement ici.
        //    newDivAuteur.style.color = '#bc3a77';
        //    newDivComment.style.color = 'grey';

        // Cas 02 : Création dynamique de la classe de la DIV pour permettre l'écriture de son style dans le fichier CSS
        newDivAuteur.className = 'auteur';
        newDivComment.className = 'comment';

        // Variable qui stocke la balise repère :
        let currentDiv = document.getElementById('insert');

        // Affichage dans la Console :
        console.log('AUTEUR : ' + element.auteur);
        console.log('COMMENTAIRE : ' + element.comment);
        console.log('   ');

        // Variables qui stockent les données des balises récemment créées.
        document.body.insertBefore(newDivAuteur, currentDiv);
        document.body.insertBefore(newDivComment, currentDiv);
      });
    });
};
// Appel de la fonction anonyme qui affiche le contenu de données de l'API
getQuotes();

// -----------------------------------------------------
//    ETAPE 3 : Tests du code dans le Navigateur:
// -----------------------------------------------------
// Une erreur est elle renvoyée?
// Si NON, alors :
//    Voir le statut de la requête dans Network
//    Vérification du statut : si status = 200, alors la requête a fonctionné!

// Réponse: OUI, Erreur 400 et je ne trouve pas pourquoi.
// L'exercice fait en classe fonctionne mais pas celui-ci, une tentative de modification sur ce fichier là, conduit aussi à l'erreur 400
