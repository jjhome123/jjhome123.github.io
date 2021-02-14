let white3 = document.getElementById('white3');
let white4 = document.getElementById('white4');
let menuOpen = document.getElementById('hamburger-open');
let menuClose = document.getElementById('hamburger-close')
let mNavMenu = document.getElementById('mobile-nav-menu');

let white3Transparent = function() {
    white3.style.opacity = 0;
}

let white3Visible = function() {
    white3.style.opacity = 0.9;
}

let white4Transparent = function() {
    white4.style.opacity = 0;
}

let white4Visible = function() {
    white4.style.opacity = 0.9;
}

//Mobile Nav Menu functions//
let navDisplay = function() {
    mNavMenu.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
}

let navHide = function() {
    mNavMenu.style.display = "none";
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
}

let menuHover = function() {
    menuOpen.style.backgroundColor = "rgba(39,40,61,255)";
}

let menuLeave = function() {
    menuOpen.style.backgroundColor = "rgba(99,100,146,255)";
}

white3.onmouseenter = white3Transparent;
white3.onmouseleave = white3Visible;
white4.onmouseenter = white4Transparent;
white4.onmouseleave = white4Visible;

//Mobile Nav Menu Events//
menuOpen.onclick = navDisplay;
menuClose.onclick = navHide;
menuOpen.onmouseenter = menuHover;
menuOpen.onmouseleave = menuLeave;