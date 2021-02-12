
let english = document.getElementById('english');
let web = document.getElementById('web');
let englishItem = document.getElementById('eng-item');
let webItem = document.getElementById('web-item');
let white1 = document.getElementById('white1');
let white2 = document.getElementById('white2');

//English Tab functions//
let viewEnglish = function() {
    webItem.style.display = 'none';
    englishItem.style.display = 'block';
    web.style.height = '60px';
}

let englishButtonDown = function() {
    english.style.background = 'transparent';
    english.style.backgroundColor = 'rgba(105,173,192,255)';   
}

let englishButtonUp = function() {
    english.style.background = 'linear-gradient(rgba(105,173,192,255), rgba(85,162,182,255))';
    english.style.backgroundColor = 'transparent';
}

let enterEnglishButton = function() {
    english.style.height = '70px';
}

let leaveEnglishButton = function() {
    if (englishItem.style.display === 'block') {
        english.style.height = '70px';
    }
    else {
        english.style.height = '60px';
    }
}

//Web Tab functions//
let viewWeb = function() {
    englishItem.style.display = 'none';
    webItem.style.display = 'block';
    english.style.height = '60px';
}

let webButtonDown = function() {
    web.style.background = 'transparent';
    web.style.backgroundColor = 'rgba(254,162,77,255)';   
}

let webButtonUp = function() {
    web.style.background = 'linear-gradient(rgba(254,162,77,255), rgba(251,141,46,255))';
    web.style.backgroundColor = 'transparent';
}

let enterWebButton = function() {
    web.style.height = '70px';
}

let leaveWebButton = function() {
    if (webItem.style.display === 'block') {
        web.style.height = '70px';
    }
    else {
        web.style.height = '60px';
    }
}

//White functions//
let white1Transparent = function() {
    white1.style.opacity = 0;
}

let white1Visible = function() {
    white1.style.opacity = 0.9;
}

let white2Transparent = function() {
    white2.style.opacity = 0;
}

let white2Visible = function() {
    white2.style.opacity = 0.9;
}

//English Events//
english.onclick = viewEnglish;
english.onmouseenter = enterEnglishButton;
english.onmouseleave = leaveEnglishButton;
english.onmousedown = englishButtonDown;
english.onmouseup = englishButtonUp;


//Web Events//
web.onclick = viewWeb;
web.onmouseenter = enterWebButton;
web.onmouseleave = leaveWebButton;
web.onmousedown = webButtonDown;
web.onmouseup = webButtonUp;

//White Events//
white1.onmouseenter = white1Transparent;
white1.onmouseleave = white1Visible;
white2.onmouseenter = white2Transparent;
white2.onmouseleave = white2Visible;