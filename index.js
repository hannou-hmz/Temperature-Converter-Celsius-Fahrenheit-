let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");
let inputValue = document.getElementById("temp-input");
let resultInput = document.getElementById("result");



fromSelect.addEventListener("change" , function(){
    if(fromSelect.value === "fahrenheit"){
    toSelect.value = "celsius";
    }
    else{
    toSelect.value = "fahrenheit";
    }
});

toSelect.addEventListener("change" , function(){
    if(toSelect.value === "fahrenheit"){
    fromSelect.value = "celsius";
    }
    else{
    fromSelect.value = "fahrenheit";
    }
});

function getConversion(){
    let valueIputed = inputValue.value;
    let result;
    if(fromSelect.value === "celsius" && toSelect.value === "fahrenheit"){
        result = (valueIputed * 9/5) + 32;
    }
    else if(fromSelect.value === "fahrenheit" && toSelect.value === "celsius"){
        result = (valueIputed - 32) * 5/9;
    }
    else{
        result = valueIputed;
    }

    return result;
}

document.getElementById("convert-btn").onclick = function(){
    resultInput.value = getConversion();
};

document.getElementById("clear-btn").onclick = function(){
    if(fromSelect.value === "celsius"){
        inputValue.value = 0;
        resultInput.value = 32;
    }
    else{
        inputValue.value = 0;
        resultInput.value = -17.7778;
    }
}



