var mainimg = document.getElementsByClassName('slider-1')[0];
var mainlink = document.getElementsByClassName('link-1')[0];
var images = ["./images/slider-1.jpeg", "./images/slider-2.jpeg", "./images/slider-3.jpeg", "./images/slider-4.jpeg"];
var links = ["./sports-shoes.html", "daily-shoes.html", "special-day-shoes(Woman).html", "special-day-shoes(Men).html"];
var num = 0;
const auto = true;
const IntervalTime = 5000;



console.log(images)

function next() {
    num++
    //console.log("num", num)
    //console.log("links", links[num])
    if (num >= images.length) {
        num = 0;
        mainimg.src = images[num]
        mainlink.href = links[num]
    } else {
        mainimg.src = images[num]
        mainlink.href = links[num]
    }

}

function back() {
    num--
    if (num < 0) {
        num = images.length - 1
        mainimg.src = images[num]
        mainlink.href = links[num]
    } else {
        mainimg.src = images[num]
        mainlink.href = links[num]
    }

}


const intervalID = setInterval(function () {
    next()
}, 5000)




////////////////////////////////////////////////////

function showSubcategories() {
    var altKategori = document.getElementById("lower-category");
    altKategori.style.display = "block";
}

function hideSubcategories() {
    var altKategori = document.getElementById("lower-category");
    altKategori.style.display = "none";
}
