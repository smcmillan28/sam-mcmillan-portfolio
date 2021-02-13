// Function that cycles through images in the Adventure Time section
function start() {
    var rotator = document.getElementById("rotator");
    var delayInSeconds = 5;

    var images = ["./assets/images/snowpoc.JPG",
        "./assets/images/disney.jpg",
        "./assets/images/hole-in-one.jpg",
        "./assets/images/knox.jpg",
        "./assets/images/murder-mystery.jpg",
        "./assets/images/skiing.jpg",
        "./assets/images/stones.JPG",
        "./assets/images/tedeschi.jpg",
        "./assets/images/windy-city.jpg",
        "./assets/images/about-me.JPG",
        "./assets/images/bobbydodd.JPG",
        "./assets/images/botanical.jpg",
        "./assets/images/camping.jpg",
        "./assets/images/fam-photo.jpg",
        "./assets/images/guitar.JPG",
        "./assets/images/hawks.JPG",
        "./assets/images/lilly-couch.jpg",
        "./assets/images/lilly-hike.JPG",
        "./assets/images/mask-on.JPG",
        "./assets/images/matt.jpg",
        "./assets/images/newspaper.jpg",
        "./assets/images/neyland.JPG"];

    var num = 0;
    var changeImage = function () {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload = function () {
    start();
}

console.log("Click on my name in the Navbar to play with colors!");

// Function that will change the background color when you click my name at the top
const nameHead = $("#name-header");
const body = $("#body");
const colorList = [
    "background: linear-gradient(#d791f3, #1a7ae9);",
    "background: linear-gradient(#9176f3, #53ca24);",
    "background: linear-gradient(#ee612a, #3798c5);",
    "background: linear-gradient(#8d0101, #867e03);",
    "background: linear-gradient(#045208, #b989e6);",
    "background: linear-gradient(#bed153, #49a1e9);",
    "background: linear-gradient(#5ae3f5, #91ff00);",
    "background: linear-gradient(#0076c5, #810000);",
    "background: linear-gradient(#7bfcfc, #ff0000);",
    "background: linear-gradient(#7c7b7b, #ffffff);"
]

let num = 0;
nameHead.click(function () {
    var colorLen = colorList.length;
    body.attr("style", colorList[num++]);
    if (num == colorLen) {
        num = 0;
    }
});