// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//1 EUR (Euro) = 1.07 USD (US Dollar)

const fromDollarToYen = (valueInDollar) =>{
    let valueInYen = valueInDollar * 146.26;
    return valueInYen;

}

const fromEuroToDollar = (valueInEuro) =>{ 
    
      // Convertimos el valor a dólares
      let valueInDollar = valueInEuro * 1.07;
      // Retornamos el valor en dólares
      return valueInDollar;
    
}

const fromYenToPound = (valueInYen) =>{
    let valueInPound = valueInYen * 0.0051;
    return valueInPound;
    
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };