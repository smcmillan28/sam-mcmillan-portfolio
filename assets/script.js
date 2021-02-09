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
        "./assets/images/about-me.JPG"]; 

    // Write a function that sends email to me based on submitted comment and contact information in the contact section
    emailBtn.click(function () {
        console.log("hello");
    });

    profImage.click(function () {
        var randNum = Math.floor(Math.random() * 10);
        profImage.attr("src", profPics[randNum]);
    });

})