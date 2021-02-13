let white3 = document.getElementById('white3');
let white4 = document.getElementById('white4');

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

white3.onmouseenter = white3Transparent;
white3.onmouseleave = white3Visible;
white4.onmouseenter = white4Transparent;
white4.onmouseleave = white4Visible;