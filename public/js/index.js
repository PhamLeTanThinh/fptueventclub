$(document).ready(function () {
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

// var eachMenu = document.getElementsByClassName("fev__list");
// for (var i = 0; i < eachMenu.length; i++) {
//     eachMenu[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight / 3){
            current = section.getAttribute('id');
        }
    })
    console.log(current)
    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})