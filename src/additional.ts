/**
 * Created by Хрюша on 26.09.2016.
 */
class Pets {
    public name:string;
    public age:number;
    public weight:number;

    constructor(name:string, age:number, weight:number) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    speed(movingSpeed:number) {
        console.log(movingSpeed);
    }
}

class Piggy extends Pets {
    private animalType:string = "piggy";

    constructor(name:string, age:number, weight:number) {
        super(name, age, weight);
    }

    speed(movingSpeed:number) {
        super.speed(movingSpeed);
        var div = document.createElement('div');
        div.id = `${this.name}-${this.animalType}`;
        document.body.appendChild(div);
        document.getElementById(`${this.name}-${this.animalType}`).innerText = `${this.name} ${this.animalType} is ${this.age} years old and ${this.weight} kg weight and can moving with ${movingSpeed} km/h`;
    }
}

let nastya = new Piggy("Nastya", 22, 55);
nastya.speed(50);
let ilya = new Piggy("Ilya", 24, 80);
ilya.speed(15);