
// CRIANDO UMA FACTORY
function createCar(color, year) {
let car = {
    carColor: color,
    carYear: year,   
}

return car
}

let car1 = createCar('Red', '2023')
    console.log(car1)

let car2 = createCar('Blue', '2022')
    console.log(car2)

let car3 = createCar('Violet', '2020')
    console.log(car3)
