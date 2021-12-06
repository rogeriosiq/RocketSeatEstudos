// Manipulando Strings e Números

// Transformar String em Número e Número em String 
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres te uma palavra e quantos digitos tem um número
let word = "paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 4321.1234
console.log(number.toFixed(2).replace(".", ","))

//Transforme letras minusculas em maiúsculas. Faça o contrario disso também
let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

// Verificar se o texto contém a palavra Amor
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

//Criar Array com construtor 
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//Contar elementos de um array
console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos de um array 
let word = "manipulação"
console.log(Array.from(word))

//Manipulando Arrays

let techs = ["html", "css", "js"]

techs.push("nodejs") // Adicionar um item no fim 
techs,unshift("sql") // Adicionar no começo
techs.pop() // Remover do fim
techs.shift() // Remover do começo
console.log(techs.slice(1,3)) // Pegar somente alguns elementos do Array
techs.splice(1, 2) // Remover 1 ou mais items em qualquer posição do array
let index = techs.indexOf('css') // Encontrar a posição de um elemento no array

console.log