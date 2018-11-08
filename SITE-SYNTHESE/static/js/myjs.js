function changeColor() {
    var headerID = document.getElementById("myheader");
    var formID = document.getElementById("colorForm");
    var selectedColor = formID.elements["color"].value;
    var currentColor = headerID.style.color;

    
    if (selectedColor === currentColor) {
        alert ("The color of the tag <head> is already set to " + selectedColor);
    } else {
        alert ("You have selected the '" + selectedColor + "' color");
        headerID.style.color = selectedColor;    
    }
}

function changeText() {
    var newHeaderText = document.getElementById("inputNewText").value;
    var headerID = document.getElementById("myheader");
    headerID.textContent = newHeaderText;    
    //alert("newText : " + newHeaderText + " headerID text : " + headerID.textContent);
}

function checkLunchTime() {
    var inputTime = parseInt(document.getElementById("inputTime").value);

    switch(inputTime) {
        
        case 9 :
            document.getElementById("result2").innerHTML = "Start training";
            break;

        case 11 :
            document.getElementById("result2").innerHTML = "Moorning pause";
            break;

        case 13 :
            document.getElementById("result2").innerHTML = "Lunch time";
            break;

        case 16 :
            document.getElementById("result2").innerHTML = "Afternoon pause";
            break;

        case 17 :
            document.getElementById("result2").innerHTML = "Time to leave";
            break;

        default:
            document.getElementById("result2").innerHTML = "Please enter a valid time";
            break;

    }
    
    //alert("newText : " + newHeaderText + " headerID text : " + headerID.textContent);
}

function testFoorLoop() {
    var num = parseInt(document.getElementById("inputLoopNum").value);
    document.getElementById("result4").innerHTML = "<br>";
    for (i=1; i <= num; i++) {
        document.getElementById("result4").innerHTML +=" " + i;

    }

}
