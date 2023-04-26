function createCar(color, year) {
    let car = {
        carColor: color,
        carYear: year,   
    }
    
    return car
    }
    
    let car1 = createCar('Red', '2023')
        car1.model = 'XXR'    //ASSIM QUE SE ADICIONA UMA PROPRIEDADE A MAIS NO OBJETO
    let car2 = createCar('Blue', '2022')
     
    console.log(car1)
    console.log(car2)