// Input
var primeInput = document.querySelector("#input-box");
var btnPrime = document.querySelector("#btn-prime");
var primeOutput = document.querySelector("#output-box");

// inner text
primeInput.innerText = "Enter your date of birth in (DD/MM) format";
primeOutput.innerText= "Your result will be shown here";




function clickHandler(input){
    input = primeInput.value;
    function checkPrimeYear(){
        input = newDate()


    }
    
    
    console.log("clicked!");
    console.log("input: ",input);
    primeOutput.innerText = "Output: "+input;

    
    
}
btnPrime.addEventListener("click",clickHandler)