/**
 * CREATION DES OBJETS
 */

// Méthode 1
var personne1 = new Object();
	personne1.nom = "toto";
	personne1.prenom = "tata";
	personne1.age = 25;
	
	
alert(personne1.nom);

// Methode 2
var personne2 = {
		prenom : "union",
		nom:"zec",
		age:19,
		id : function() {
			return this.prenom + ' '+ this.nom+ ' '+this.age;
		}
}

alert(personne2.id());

// Méthode 3 : lorsqu'on  plusieurs objets à créer
function Identite(p,n,a) {
	this.prenom = p;
	this.nom = n;
	this.age = a;
}

function affichage(personne) {
	alert(personne.nom+" "+personne.prenom+" "+personne.age+" ");
}

var pierre = new Identite("Pierre","DUPONT",25);
var victor = new Identite("Victor","TEST",40);


affichage(pierre);