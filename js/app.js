var mainimg = document.getElementsByClassName('slider-1')[0];
var images = ["./images/slider-1.jpeg", "./images/slider-2.jpeg", "./images/slider-3.jpeg", "./images/slider-4.jpeg"];
var num = 0;
const auto = true;
const IntervalTime = 5000;



console.log(images)

function next() {
    num++
    console.log("num", num)
    if (num >= images.length) {
        num = 0;
        mainimg.src = images[num]
    } else {
        mainimg.src = images[num]
    }

}

function back() {
    num--
    if (num < 0) {
        num = images.length - 1
        mainimg.src = images[num]
    } else {
        mainimg.src = images[num]
    }

}


const intervalID = setInterval(function () {
    next()
}, 5000)