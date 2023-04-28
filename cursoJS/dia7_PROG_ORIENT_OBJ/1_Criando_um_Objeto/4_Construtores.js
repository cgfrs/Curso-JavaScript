
function CreateCar(color, year, model) {
        this.carColor= color;
        this.carYear= year;
        this.carModel= model;
        
    }
    
    let car1 = new CreateCar('Red', '2023')
       
    console.log(car1)

    let car2 = new CreateCar('Blue', '2022', 'XXR')

    console.log(car2)

    

    