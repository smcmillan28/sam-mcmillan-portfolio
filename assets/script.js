$(document).ready(function () {
    var emailBtn = $("#submit");
    var profImage = $("#marathon");

    // Creating an array with all image paths for profile picture options
    var profPics = ["./assets/images/snowpoc.JPG",
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

    var i = 0;

    // Write a function that sends email to me based on submitted comment and contact information in the contact section
    emailBtn.click(function () {
        console.log("hello");
    });

    profImage.click(function () {
        i++;
        profImage.attr("src", profPics[i]);
        if (i == profPics.length) {
            i = 0;
        }
    });

})