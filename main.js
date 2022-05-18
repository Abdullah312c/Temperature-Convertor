
document.getElementById("btn").onclick = function() {

    let inputDegreeC;
    let inputText = Number(document.getElementById("inputDegree").value);
    const display = document.getElementById("display");

    switch(true) {
        case document.getElementById("inputC").checked:
            inputDegreeC = inputFromCtoC(inputText);
            break;

        case document.getElementById("inputK").checked:
            inputDegreeC = inputFromKtoC(inputText);
            break;

        case document.getElementById("inputF").checked:
            inputDegreeC = inputFromFtoC(inputText);
            break;

        case document.getElementById("inputR").checked:
            inputDegreeC = inputFromRtoC(inputText);
            break;
        default:
            break;
    }

    switch(true) {
        case document.getElementById("outputC").checked:
            displayTemp(outputToC(inputDegreeC), "°C");
            break;

        case document.getElementById("outputK").checked:
            displayTemp(outputToK(inputDegreeC), "°K");
            break;

        case document.getElementById("outputF").checked:
            displayTemp(outputToF(inputDegreeC), "°F");
            break;

        case document.getElementById("outputR").checked:
            displayTemp(outputToR(inputDegreeC), "°R");
            break;
        default:
            break;
    }

    function displayTemp(outputDegree, unit) {
        if(isNaN(outputDegree))
            display.textContent = "Please enter a number";

        // when the input radio and output radio are both fehrenheit or rankine then display the same input
        else if(document.getElementById("inputF").checked && document.getElementById("outputF").checked)
            display.textContent = "The temperature is: "+ inputText +unit;

        else if(document.getElementById("inputR").checked && document.getElementById("outputR").checked)
            display.textContent = "The temperature is: "+ inputText +unit;
        
        else {

            outputDegree = outputDegree %1===0?outputDegree:outputDegree.toFixed(2);
            display.textContent = "The temperature is: "+ outputDegree +unit;
        }
    }

    function inputFromCtoC(inputText) {
        return inputText;
    };

    function inputFromKtoC(inputText) {
        return inputText - 273.15;
    };

    function inputFromFtoC(inputText) {
        return (inputText - 32) * .5556;
    };

    function inputFromRtoC(inputText) {
        return (inputText / 1.8) - 273.15;
    };

    function outputToC(inputDegreeC) {
        return inputDegreeC;
    };

    function outputToK(inputDegreeC) {
        return inputDegreeC + 273.15;
    };

    function outputToF(inputDegreeC) {
        return (inputDegreeC * 1.8) + 32;
    };

    function outputToR(inputDegreeC) {
        return (inputDegreeC + 273.15) * 1.8;
    };
};