const myGlobal = 0

function myFunction() {
    const myNumber = 1
    console.log('Esto es dentro de myFunction()', myGlobal)

    // Funcion interna
    function parent() {
        const inner = 2
        console.log('Dentro de la funcion parent()--', myNumber, myGlobal)

        function child() {
            console.log('Funcion child()----', inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFunction()



function sumWithClosure(firstNum) {
    function sum(secondNum = 0) {
        console.log('Segundo numero', secondNum)
        return firstNum + secondNum
    }
return sum
}
console.log(sumWithClosure(2)(3))
console.log(sumWithClosure(90)())