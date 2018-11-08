function calc() {
    var first = document.getElementById("inputFirstNumber").value;
    var second = document.getElementById("inputSecondNumber").value;
    resultSum = parseInt(first) + parseInt(second);
    resulSub = parseInt(first) - parseInt(second);
    resultMult = parseInt(first) * parseInt(second);
    resultDiv = parseInt(first) / parseInt(second);
    result = "<br> The result of the arithimetic operation is : " +
            "<br> <br> Addition : " + resultSum +  "<br> Substraction : " + resulSub +  
            "<br> Multiplication : " + resultMult +  "<br> Division : " + resultDiv;
    document.getElementById("result").innerHTML = result;

}

function calcFator(num) {
    if (num==0 ){
        return 1;
      }
      return num * calcFator(num-1);
}

function factorialize() {
    var numFactorial = document.getElementById("inputFactorial").value;
    const fac = (n) => n>0 ? n*fac(n-1) : 1;
    result = "<br> The factorial of " + numFactorial + " is " + fac(numFactorial);
    document.getElementById("result5").innerHTML = result;
}
