$(document).ready(function(){
    $(this).scrollTop(0);
});
// ---------------AOS--------------------
AOS.init();
// ---------------COUNT UP NUBMBER JS--------------------
$('.counter').countUp();


// ---------------LOADER------------------------------
setTimeout(() => {
    document.getElementById("loader").style.opacity = 0;
    // document.getElementById("wrapper").style.opacity = 1;
    document.getElementById("loader").remove();
}, 3000)

// ---------------LIGHT BOX--------------------
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

// ---------------FADED HEADER--------------------
window.onscroll = function (e) {
    var otherScrollTop = document.documentElement.scrollTop; 

    if (otherScrollTop < 50) {
        document.getElementById("fev__header").style.opacity = "0";
    } else if (otherScrollTop < 100) {
        document.getElementById("fev__header").style.opacity = "0.2";
    } else if (otherScrollTop < 150) {
        document.getElementById("fev__header").style.opacity = "0.4";
    }
    else if (otherScrollTop < 200) {
        document.getElementById("fev__header").style.opacity = "0.6";
    }
    else if (otherScrollTop < 250) {
        document.getElementById("fev__header").style.opacity = "0.8";
    }
    else if (otherScrollTop > 251) {
        document.getElementById("fev__header").style.opacity = "1";
    }
}



// ---------------------ACTIVE HEADER--------------------
// Get all buttons with class="btn" inside the container
var eachMenu = document.getElementsByClassName("fev__list");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < eachMenu.length; i++) {
    eachMenu[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



