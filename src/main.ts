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

(function Slider(){
    var slide = document.getElementById('slide');
    var windowHeight = window.screen.availHeight;
    slide.style.height = windowHeight + 'px';
    var slideHeight = slide.offsetHeight;
    var slideWidth = slide.offsetWidth;
    var findImgPiece = slide.getElementsByClassName('slide-img-piece');
    for (var i = 0; i < findImgPiece.length; i++) {
        findImgPiece[i].id = 'slide-piece-' + i;
        document.getElementById('slide-piece-' + i).style.width = slideWidth / 4 + 'px';
        document.getElementById('slide-piece-' + i).style.height = slideHeight / 3 + 'px';
    }
    var findImg = slide.getElementsByClassName('slide-img');

    function hasClass(el:any, cls:any) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
    function removeClass(obj:any, cls:any) {
        var classes = obj.className.split(' ');

        for (var i = 0; i < classes.length; i++) {
            if (classes[i] == cls) {
                classes.splice(i, 1); // удалить класс
                i--; // (*)
            }
        }
        obj.className = classes.join(' ');

    }

    for (var i = 0; i < findImg.length; i++) {
        findImg[i].id = 'img-' + i;
        document.getElementById('img-' + i).style.width = slideWidth + 'px';
        document.getElementById('img-' + i).style.height = slideHeight + 'px';

        if (i < 4) {
            document.getElementById('img-' + i).style.left = -slideWidth / 4 * i + 'px';
            document.getElementById('img-' + i).style.top = 0 + 'px';
        }else if(i > 3 && i < 8) {
            document.getElementById('img-' + i).style.left = -slideWidth / 4 * (i-4) + 'px';
            document.getElementById('img-' + i).style.top = -slideHeight / 3 + 'px';
        } else {
            document.getElementById('img-' + i).style.left = -slideWidth / 4 * (i-8) + 'px';
            document.getElementById('img-' + i).style.top = -slideHeight / 3 * 2 + 'px';
        }
    }


    slide.addEventListener('click', function(){
        var elList = this.querySelectorAll('.slide-img');
        if(hasClass(this,'active')){
            removeClass(this, 'active');
            for(var i=0; i < elList.length; i++){
                removeClass(elList[i], 'active');
            }
        }else{
            for(var i=0; i < elList.length; i++){
                elList[i].className += ' active';
                var elListActive = this.querySelectorAll('.slide-img.active');
                elListActive[i].style.transitionDuration = getRandomFloor(1, 2)  + 's';
                elListActive[i].style.transitionDelay = getRandom(0, 1)  + 's';
                console.log(elListActive[i].style.transitionDuration);
            }
            this.className = 'active';
        }
        function getRandomFloor(min:number, max:number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function getRandom(min:number, max:number) {
            return Math.random() * (max - min) + min;
        }
    });
})();
