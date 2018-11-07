/**
 * LES FONCTIONS
 */

function affiche()
{
	alert("BONJOUR");
}

function multiplication(x,y)
{
	affiche();
	return x*y;
}

// Fonction Factorielle (récursivité)
function factorielle(n)
{
	if(n < 0)
		{
			alert("Calcul impossible, saisir un nombre positif");
		}
	else {
		if(n==0) {
			return 1;
		}
		else {
			return n*factorielle(n-1);
		}
	}

}
alert("resultat facto= "+factorielle(5));