// Variables

var a // declarando

var b = 'b' // declaramos y asignamos

b = 'bb' // reasignacion

var a = 'aa' // redeclaracion

// Global Scope
var fruit = 'Apple' // global
console.log('Por fuera de la funcion----', fruit)

function bestFruit () {
    console.log(fruit)
}

bestFruit()


function countries () {
    /*
    var country1 = 'Argentina'
    let country2 = 'Bolivia'  // solo accesible dentro de esta función
    const country3 = 'Chile'   // solo se puede asignar una vez, luego no cambia
    console.log("Dentro de la función-----",country1, "\n", country2 , "\n", country3)
    */
    country = 'México'
    console.log(country)
}

countries()
console.log('Fuera de la funcion----', country)

