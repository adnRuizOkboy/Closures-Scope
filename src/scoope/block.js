function fruits() {
    if(true) {
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'kewi' // block scope
        const fruit3 = 'Mango' // block scope

        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1) // Function scope, fuera del bloque
}

fruits()