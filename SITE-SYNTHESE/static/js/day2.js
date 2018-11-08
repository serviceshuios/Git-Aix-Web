// Check 

function getElementByTag() {
    var row = document.getElementById("day2-1");
    var paragraphs = row.getElementsByTagName("p");
    paragraphContent= [];
    for (i=0; i <paragraphs.length; i++) {

        paragraphContent += paragraphs[i].innerHTML;
    }
    document.getElementById("result7").innerHTML = paragraphContent; 
}

// Query Selector
function querySelectorFunction() {
    var row = document.getElementById("day2-2");
    // Inside a paragraph
    var link = row.querySelector("p a");
    alert("The link inside a paragraph is " + link.innerHTML);
    // By id
    var link_byid = row.querySelector("#mylink");
    alert("The content of a using id '#mylink' " + link_byid.innerHTML);
    //By class
    var parapraph = row.querySelector(".paragraphClass")
    alert("The text inside the element class '.paragraphClass' is ' " + parapraph.innerHTML + "'" )
    
    // Using queryselector for all elements with class '.myclass'
    var allElems = row.querySelectorAll(".paragraphClass")
    result = "";
    //for(i=0;i<allElems.length;i++) {
    //    result += allElems[i].innerHTML + "\n"
    //}
    for(let a of allElems){
        result += a.innerHTML + "\n";
    }
    alert("Using queryselector() to show the content of all elements with class '.paragraphClass is : \n\n" + result)

}

function changeStyle() {
    var row = document.getElementById("day2-3");

    if (row.querySelector("h4.textToBeChanged")) {
        h4row = row.querySelector("h4.textToBeChanged")
        h4row.className = "modif"
        h4row.innerHTML = "Click on the button again to return to the previous style"
        row.className = "with-bg"
    } else {
        h4row = row.querySelector("h4.modif");
        h4row.className = "textToBeChanged"
        h4row.innerHTML = "Click the button below to change my style"
        row.className = "day2-3"
    }
    //alert(row.getElementsByTagName('h4')[1].className);
}

function addElement() {
    var row = document.getElementById("day2-4");
    var button = row.querySelector("button");
    newp = document.createElement("p");
    newp2 = document.createElement("p"); 
    newText = document.createTextNode("A new paragraph was created at the end");
    newText2 = document.createTextNode("A new paragraph was created before the button");
    newp.appendChild(newText);
    newp2.appendChild(newText2);

    
    // add the newly created element and its content into the end of the DOM 
    row.appendChild(newp);
    // insert before a specif element
    row.insertBefore(newp2, button);
}


function removeElement() {
    var row = document.getElementById("day2-5");
    var image = row.querySelector("img");
    row.removeChild(image);

    document.getElementById("result9").innerHTML = "<br>Not friday....yet!!"; 

}


function showScreenResolution(){
    var msg = "<br/>Height : " + screen.height + "<br/>Dispo: " + screen.availHeight + 
             "<br/> Width: " + screen.pixelDepth;

    document.getElementById("result10").innerHTML = msg;
}
