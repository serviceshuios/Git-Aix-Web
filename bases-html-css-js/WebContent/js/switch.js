/**
 * les horaires de la formation
 */

var heure = parseInt(prompt("Veuillez saisir l'heure :"));

switch(heure) {

	case 9 : 
		alert("C'est le début de la journée");
		break;
	
	case 11:
		alert("C'est la pause du matin");
		break;
		
	case 13:
		alert("C'est l'heure de manger");
		break;
	
	case 16 : 
		alert("C'est la pause de l'après-midi");
		break;
		
	case 17 : 
		alert("C'est la fin de la journée");
		break;
	
	default:
		alert("Je ne connais pas cette heure");
}