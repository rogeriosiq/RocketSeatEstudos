/*
    Function() constructor

    *expressão new
    *criar um novo objeto
    *this keyword
*/ 

function Person() {
    this.name = name
    this.walk = function () {
        return this.name + "está andando"
    }
}

const roger = new Person('Roger')
const joao = new Person('Joao')
console.log(roger.walk())
console.log(joao.walk())