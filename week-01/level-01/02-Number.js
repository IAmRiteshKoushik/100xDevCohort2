function explainParseInt(value){
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result)
}

// Example usage of parseInt()
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value){
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result)
}

// Examples usage of parseFloat()
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");