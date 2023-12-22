var firstName // Esta declarada pero su valor es 'undefined'
firstName = 'Adan' // Asignamos
console.log(firstName)

var lastName = 'Ruiz' // Declaramos y asignamos
console.log(lastName)
lastName = 'Villalobos' // Reasignamos 
console.log(lastName)

var secondName = 'Katherine' // Declarando y asignando
var secondName = 'Daniela' // Reasignando
console.log(secondName)

// let
let fruit = 'Apple' // declarar y asignar
fruit = 'Mango' // reasignar
console.log(fruit)
let fruit = 'banana'
console.log(fruit)

// const
/*
No se puede reasignar ni declarar 2 veces con const
*/
const animal = 'dog' // Declaracion y asignacion
// animal = 'cat' // reasignando
console.log(animal)

const vehicles = []
for (let index = 0; index < 3; index++) {
    vehicles.push(`Golf A${index+1}`)
}
console.log(vehicles)

vehicles.pop()
console.log(vehicles)