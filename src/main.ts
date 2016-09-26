(function () {
    function Slider() {
        var images = ['url(../img/bg.jpg)', 'url(../img/bg2.jpg)', 'url(../img/bg3.jpg)', 'url(../img/bg4.jpeg)', 'url(../img/bg5.jpg)', 'url(../img/bg6.jpg)'];

        var slide = document.getElementById('slide');
        var windowHeight = window.screen.availHeight;
        slide.style.height = windowHeight + 'px';
        var slideHeight = slide.offsetHeight;
        var slideWidth = slide.offsetWidth;
        var findImgPiece = slide.getElementsByClassName('slide-img-piece');
        var findFrontImg = slide.getElementsByClassName('slide-img');
        var findBackImg = slide.getElementsByClassName('slide-img-back');
        var dataStart:number = parseInt(document.getElementById('mainSlider').getAttribute('data-start-number'));

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

        function getRandom(min:number, max:number) {
            return Math.random() * (max - min) + min;
        }

        (function setImage() {
            for (var i = 0; i < findFrontImg.length; i++) {
                findFrontImg[i].id = 'img-' + i;
                document.getElementById('img-' + i).style.backgroundImage = images[dataStart];
            }
        })();

        (function findingImagePiece() {
            for (var i = 0; i < findImgPiece.length; i++) {
                findImgPiece[i].id = 'slide-piece-' + i;
                document.getElementById('slide-piece-' + i).style.width = slideWidth / 4 + 'px';
                document.getElementById('slide-piece-' + i).style.height = slideHeight / 3 + 'px';
            }
        })();

        (function positionsForImages() {
            for (var i = 0; i < findFrontImg.length; i++) {
                document.getElementById('img-' + i).style.width = slideWidth + 'px';
                document.getElementById('img-' + i).style.height = slideHeight + 'px';

                if (i < 4) {
                    document.getElementById('img-' + i).style.left = -slideWidth / 4 * i + 'px';
                    document.getElementById('img-' + i).style.top = 0 + 'px';
                } else if (i > 3 && i < 8) {
                    document.getElementById('img-' + i).style.left = -slideWidth / 4 * (i - 4) + 'px';
                    document.getElementById('img-' + i).style.top = -slideHeight / 3 + 'px';
                } else {
                    document.getElementById('img-' + i).style.left = -slideWidth / 4 * (i - 8) + 'px';
                    document.getElementById('img-' + i).style.top = -slideHeight / 3 * 2 + 'px';
                }
            }

            for (var i = 0; i < findBackImg.length; i++) {
                findBackImg[i].id = 'img-back-' + i;
                document.getElementById('img-back-' + i).style.width = slideWidth + 'px';
                document.getElementById('img-back-' + i).style.height = slideHeight + 'px';

                if (i < 4) {
                    document.getElementById('img-back-' + i).style.left = -slideWidth / 4 * i + 'px';
                    document.getElementById('img-back-' + i).style.top = 0 + 'px';
                } else if (i > 3 && i < 8) {
                    document.getElementById('img-back-' + i).style.left = -slideWidth / 4 * (i - 4) + 'px';
                    document.getElementById('img-back-' + i).style.top = -slideHeight / 3 + 'px';
                } else {
                    document.getElementById('img-back-' + i).style.left = -slideWidth / 4 * (i - 8) + 'px';
                    document.getElementById('img-back-' + i).style.top = -slideHeight / 3 * 2 + 'px';
                }
            }
        })();

        document.getElementById('turn-next').addEventListener('click', function () {
            var elList = this.parentNode.querySelectorAll('.slide-img');
            var elListBack = this.parentNode.querySelectorAll('.slide-img-back');
            if (hasClass(slide, 'active')) {
                if (dataStart === images.length - 1) {
                    dataStart = 0;
                } else {
                    dataStart++;
                }
                for (var i = 0; i < findFrontImg.length; i++) {
                    document.getElementById('img-' + i).style.backgroundImage = images[dataStart];
                }
                removeClass(slide, 'active');
                for (var i = 0; i < elList.length; i++) {
                    removeClass(elList[i], 'active');
                }
                for (var i = 0; i < elListBack.length; i++) {
                    removeClass(elListBack[i], 'active');
                }
            } else {
                if (dataStart === images.length - 1) {
                    dataStart = 0;
                } else {
                    dataStart++;
                }
                for (var i = 0; i < findBackImg.length; i++) {
                    document.getElementById('img-back-' + i).style.backgroundImage = images[dataStart];
                }
                for (var i = 0; i < elList.length; i++) {
                    var randomDuration = getRandom(0.5, 1);
                    var randomDelay = getRandom(0.5, 1);
                    elList[i].className += ' active';
                    elListBack[i].className += ' active';
                    elList[i].style.transitionDuration = randomDuration + 's';
                    elList[i].style.transitionDelay = randomDelay + 's';
                    elListBack[i].style.transitionDuration = randomDuration + 's';
                    elListBack[i].style.transitionDelay = randomDelay + 's';
                }
                slide.className = 'active';
            }
        });
        document.getElementById('turn-prev').addEventListener('click', function () {
            var elList = this.parentNode.querySelectorAll('.slide-img');
            var elListBack = this.parentNode.querySelectorAll('.slide-img-back');
            if (hasClass(slide, 'active')) {
                if (dataStart == 0) {
                    dataStart = images.length - 1;
                } else {
                    dataStart--;
                }
                for (var i = 0; i < findFrontImg.length; i++) {
                    document.getElementById('img-' + i).style.backgroundImage = images[dataStart];
                }
                removeClass(slide, 'active');
                for (var i = 0; i < elList.length; i++) {
                    removeClass(elList[i], 'active');
                }
                for (var i = 0; i < elListBack.length; i++) {
                    removeClass(elListBack[i], 'active');
                }
            } else {
                if (dataStart == 0) {
                    dataStart = images.length - 1;
                } else {
                    dataStart--;
                }
                for (var i = 0; i < findBackImg.length; i++) {
                    document.getElementById('img-back-' + i).style.backgroundImage = images[dataStart];
                }
                for (var i = 0; i < elList.length; i++) {
                    var randomDuration = getRandom(0.5, 1);
                    var randomDelay = getRandom(0.5, 1);
                    elList[i].className += ' active';
                    elListBack[i].className += ' active';
                    elList[i].style.transitionDuration = randomDuration + 's';
                    elList[i].style.transitionDelay = randomDelay + 's';
                    elListBack[i].style.transitionDuration = randomDuration + 's';
                    elListBack[i].style.transitionDelay = randomDelay + 's';
                }
                slide.className = 'active';
            }
        });
        setInterval(function () {
            document.getElementById('turn-next').click();
        }, 10000);
    }
    Slider();
    window.onresize = Slider;
})();
