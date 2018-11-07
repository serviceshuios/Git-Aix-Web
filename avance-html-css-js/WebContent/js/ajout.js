//on crée un element de type p
var nouveauPara = document.createElement("p");

// créer un noeud de type texte
var texte = document.createTextNode("Texte inséré");

// on insère le texte dans notre paragraphe
nouveauPara.appendChild(texte);

//on ajoute au body
document.body.appendChild(nouveauPara);

// inserer avant un élément donné

//-----------on crée un element de type p-------------
var nouveauPara2 = document.createElement("p");
// créer un noeud de type texte
var texte2 = document.createTextNode("Texte inséré précisément");
// on insère le texte dans notre paragraphe
nouveauPara2.appendChild(texte2);
//on récupère la position de l'élément à insérer avant
var ballon = document.querySelector("img");
//on insère avant cet élement
document.body.insertBefore(nouveauPara2,ballon);







