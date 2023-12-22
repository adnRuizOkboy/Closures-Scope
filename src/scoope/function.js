/*

Este tipo de variables declaradas dentro de la funcion greeting() solo estan accesibles dentro de dicha funcion
es decir si utilizamos la funcion de promocodes() fuera de greeting() esta nos dara error. Al igual
si mandamos llamar el userName fuera de la funcion gretting().

 */

function greeting() {
    let userName = 'adnruiz'
    console.log(userName)
    
    function promocodes(userName, promocode) {
        if (userName.length >= 6) {
            console.log(`Hello, ${userName}!`)
            return console.log(`Your promotion code for ${userName} is: ${promocode}`)
        }
    }

    promocodes(userName, 'OKBOY-2024')
}

greeting()

console.log('Fuera de la funcion greeting', userName)


//-----------------------------------------------------------------------------------
/*

    Para resolver y que el scoope nos alcance fuera de la funcion  

 */
let userName = 'adnruiz'
function promocodes(userName, promocode) {
    if (userName.length >= 6) {
        console.log(`Hello, ${userName}!`)
        return console.log(`Your promotion code for ${userName} is: ${promocode}`)
    }
}

function greeting() {
    console.log('Ver userName dentro de greeting()', userName)
    console.log('Se ejecuta la funcion promocode dentro del greeting()')
    promocodes(userName, 'OKBOY-2024')
}

greeting()

console.log('userName Fuera de la funcion greeting', userName)
console.log('promocode FUERA')
promocodes('kitkat', 'OKBOY-2024')