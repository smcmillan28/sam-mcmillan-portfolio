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
    var changeImage = function() {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function() {
    start();
}