// switch
// let a = a

// switch (a) {
//     case 'a':
//         // codigo
//         console.log('a')
//     case 'b':
//         // codigo
//         console.log('b')
//         break
//     default:
//         console.assert('default')
//         break
// }

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}
