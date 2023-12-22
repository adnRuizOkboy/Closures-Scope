// Funciones anidadas

function greeting() {
    let userName = 'adnruiz'

    function displayUserName() {
        return `Hello ${userName} bienvenido a Waddi`
    }
    return displayUserName()
}

const g = greeting()
console.log(g)
console.log(g())