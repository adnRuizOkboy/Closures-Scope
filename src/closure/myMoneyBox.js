/*
function moneyBox(coins) {
    let saveCoins = 0
    saveCoins += coins
    console.log(`Your total credits are: $${saveCoins}`)
}

moneyBox(15)
moneyBox(5)
*/
// Wit closure
function moneyBox() {
    let accountCoins = 0
    console.log('Dentro de moneyBox', accountCoins)
    function countCoins(coins) {
        console.log('Cantidad a ahorrar', coins)
        accountCoins += coins
        console.log(`Total Coins: $${accountCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(15)
myMoneyBox(20)
myMoneyBox(6)
console.log('KATHERINE----------------')
const moneyBoxKath = moneyBox()
moneyBoxKath(5)
moneyBoxKath(20)
moneyBoxKath(3)

function createPetList() {
    const petList = []
    function addPet(newPet) {
        if(newPet) {
            petList.push(newPet)
            console.log('Mascota agregada correctamente...', petList)
        }
        return petList
    }
    return addPet
}

console.log('GUARDADO DE MASCOTAS')
const adanPets = createPetList()
adanPets('Dora')
adanPets()
adanPets('Molly')
adanPets({pet: 'Sanchez', pet:'Merlina' })