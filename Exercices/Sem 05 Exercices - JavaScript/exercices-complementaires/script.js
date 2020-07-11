// 1. Définissez une nouvelle variable "myHeaders", contenant un objet global Headers, configuré avec la paire de clé/valeur suivante: "Content-Type": "application/json"
let myHeaders = new Headers({ 'Content-Type': 'application/json' });

// 2. Créez un formulaire dans votre index.html. Utilisez les balises "form", "label", "input", "button", passez comme ID "my-form" à votre balise form, ensuite les attributs pour les attributs "name" de vos input il est OBLIGATOIRE d'utiliser les clés attendues par l'API. C'est à dire une clé "auteur" et une clé "comment". Un de vos deux input aura donc comme valeur à l'attribut "name": "auteur", et le second "name":"comment". Pour finir, donnez comme ID "submit-btn" à votre bouton.

// 3. Maintenant que vous avez construit votre formulaire: nous allons créer une variable nommée "form" qui pointe directement vers votre formulaire grâce à la méthode getElementById

let form = document.getElementById('my-form');

//4. Vous disposez de vos headers, et d'une variable pointant vers votre formulaire. Maintenant vous allez créer une écoute d'évenement sur le bouton ayant pour id "submit-btn".
document.getElementById('submit-btn').addEventListener('click', () => {
  // Création des variables pour chaque clé du JSON
  console.log('CLICK');
  let formAuteur = document.getElementById('auteur').value;
  let formComment = document.getElementById('comment').value;

  // Remplace formData car ce dernier ne fonctionne pas :
  let body = {
    auteur: formAuteur,
    comment: formComment,
  };

  // Etape 1 : Envoi des données venant du formulaire
  fetch(' https://quotes-light-api.herokuapp.com/api/comments/ ', {
    // Requête (7)
    method: 'POST', // Envoi
    headers: myHeaders, // Entête
    body: JSON.stringify(body), // Corps
  });
  console.log(formAuteur);
  console.log(formComment);
});
console.log('TEST');

//5. A l'intérieur de cette écoute, vous allez créer une variable "myform" contenant un nouvel objet FormData qui pointe vers votre formulaire, utilisez la variable "form" créée précédement.

//6. Maintenant que nous possédons tout le nécessaire à la rédaction de la méthode fetch(), lançons nous! Créez une méthode fetch qui utilise cette url : https://quotes-light-api.herokuapp.com/api/comments/

// Etape 2 : Récupération des données venant de l'API
let getQuotes = () => {
  fetch(' https://quotes-light-api.herokuapp.com/api/comments/ ', {
    method: 'GET', // Récupération
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      let data = response;
      data.forEach(element => {
        // Variables des conteneurs qui vont stocker le nouvel élément à insérer:
        let newDivAuteur = document.createElement('div');
        let newDivComment = document.createElement('div');

        // Insertion du le contenu texte dans l'élément à greffer :
        let newContentAuteur = document.createTextNode(element.auteur);
        let newContentComment = document.createTextNode(element.comment);

        // Greffer un enfant à l'élément PARENT :
        newDivAuteur.appendChild(newContentAuteur);
        newDivComment.appendChild(newContentComment);

        // Vairable qui stocke la balise repère :
        let currentDiv = document.getElementById('insert');

        // Variables qui stockent les données des balises récemment créées.
        document.body.insertBefore(newDivAuteur, currentDiv);
        document.body.insertBefore(newDivComment, currentDiv);
      });
    });
};
getQuotes();

//7. Passez en deuxième argument un objet contenant la méthode, les headers et le body

//8. Pour construire le body: utilisez la méthode JSON.stringify, passez lui la variable "myform" qui récupère les valeurs de votre formulaire

//9. Testez votre code, ouvrez votre index.html dans votre navigateur, ouvrez l'inspecteur d'élément, allez dans l'onglet "console". Maintenant, remplissez votre formulaire avec les valeurs demandées (l'auteur, et le commentaire). Clickez sur le bouton submit, une erreur est elle renvoyée? Si non allez dans l'onglet network et vérifier le statut de votre requête, si il est défini sur 200 c'est que votre requête a fonctionné!

//10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière. Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour afficher le commentaire dans votre index.html
