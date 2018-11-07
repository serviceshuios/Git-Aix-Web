/**
 * CONDITIONS
 */

var age = parseInt(prompt("Veuillez saisir votre age:"));

if(age < 18){
	alert("MINEUR");
}
if (age>=18 && age<77){
	alert("MAJEUR");
}
if (age >= 77 ) {
	alert("SENIOR");
}