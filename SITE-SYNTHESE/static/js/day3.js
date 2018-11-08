
// An event listener

var row = document.getElementById("day3-2");
var paragraph = row.getElementsByTagName("p")[0];
var header = row.getElementsByTagName("h5")[0];
var image = row.getElementsByTagName("img")[0];

// Click paragraph
var clickfunc = () => {alert("Oh, you clicked me")};
paragraph.addEventListener('click', clickfunc);

// Change over
var hoverfunc = function() {this.innerHTML = "Oh, you hovered me"};
header.addEventListener('mouseover', hoverfunc);

// Change image
const changeImage = () => {image.src="static/img/beer.bmp"};
const changeImageBack = () => {image.src="static/img/background.bmp"};
image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', changeImageBack);


function changeToInline() {
    var row = document.getElementById("day3-3");
    paragraphs = row.querySelectorAll("#d1 p");
    for (p of paragraphs) {
        p.className = "p-inline";
    }

}

function changeToBlock(){
    var row = document.getElementById("day3-3");
    paragraphs = row.querySelectorAll("#d1 p");
    for (p of paragraphs) {
        p.className = "p-block";
    }
}

function changeToInlineBlock(){
    var row = document.getElementById("day3-3");
    paragraphs = row.querySelectorAll("#d1 p");
    for (p of paragraphs) {
        p.className = "p-inline-block";
    }
    }

