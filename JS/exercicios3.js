//Celcius em Fahrenheit

function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if (!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }
    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

    //fluxo alternativo C -> F
    if (celciusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celcius => celcius * 9 / 5 + 32
        degreeSign = 'F'
    }
    return formula(updateDegree) + degreeSign
}
try {
    console.log(transformDegree('50F'))
    //transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}
