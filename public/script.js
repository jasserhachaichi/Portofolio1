
$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
// youtube icon script
$("#yt").click(function () {

    $("#yt-warning").css({ "display": "block" });
});
$("#btnread-yt-cancel").click(function () {

    $("#yt-warning").css({ "display": "none" });
});
// read more btn script
$("#btnread").click(function () {

    $("#readmore").css({ "display": "block" });
});
$("#btnreadcancel").click(function () {

    $("#readmore").css({ "display": "none" });
});



// Projects statistics
var project = setInterval(projectDone, 10)
var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 10)
let count1 = 1;
let count2 = 1;
let count3 = 0;

function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 10) {
        clearInterval(project)
    }
}

function happyClients() {
    count2++
    document.querySelector("#number2").innerHTML = count2
    if (count2 == 10) {
        clearInterval(clients)
    }
}

function cupsCoffee() {
    //count3++
    document.querySelector("#number3").innerHTML = count3
    if (count3 == 0) {
        clearInterval(coffee)
    }
}