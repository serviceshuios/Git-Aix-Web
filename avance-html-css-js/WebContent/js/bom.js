/**
 * Screen
 */

var hauteur = screen.height;
var hauteurDispo = screen.availHeight;
var resolution = screen.pixelDepth;

var bom = document.getElementById("bom");
bom.innerHTML = 'hauteur ='+hauteur +
				'<br/> hauteur dispo ='+ hauteurDispo +
				'<br/> resolution = '+resolution;