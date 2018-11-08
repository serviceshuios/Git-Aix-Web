function createObject() {

var person = new Object();
    person.name =  document.getElementById("inputName").value;
    person.surname =  document.getElementById("inputSurName").value;
    person.age =  document.getElementById("inputAge").value;
    result = "<br> The name of the person is " + person.name;
    result += "<br> the surname is " + person.surname + "<br> and the age is " +  person.age;

    document.getElementById("result6").innerHTML = result;


    var nameElement = document.getElementById("inputName");
    var html = nameElement.outerHTML;
    var data = { html: html };
    var json = JSON.stringify(data);
    
    function Person(n,s,a) {

        this.name = n;
        this.surname = s;
        this.age = a;

    }

    function showName(p) {
        return (p.name + " " + p.surname)
    }
    
    var pierre = new Person("Pierre", "DUPONT", 25);
    var victor = new Person("Victor", "Test", 40);

    document.getElementById("result6").innerHTML += "<br>" + showName(pierre);
    

    
}


