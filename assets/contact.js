let white3 = document.getElementById('white3');

let white3Transparent = function() {
    white3.style.opacity = 0;
}

let white3Visible = function() {
    white3.style.opacity = 0.9;
}

white3.onmouseenter = white3Transparent;
white3.onmouseleave = white3Visible;