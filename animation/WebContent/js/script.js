//1- retrouver element à animer
var paragraphe = document.querySelector("p");

//2- on lui ajoute l'évènement click
paragraphe.addEventListener('click',Message);

//3- Créer la fonction
function Message(){
	alert("première animation");
}
//==========================================
var p1 = document.getElementById("p1");
p1.addEventListener('mouseover',changeTexte);
function changeTexte(){
	this.innerHTML="Texte modifié";
}

//===========================================
var image = document.querySelector("img");
image.addEventListener('mouseover',changeImage);
image.addEventListener('mouseout',remetImage);

function changeImage(){
	this.src="img/ballon2.jpg";
}

function remetImage(){
	this.src="img/ballon1.jpg";
}