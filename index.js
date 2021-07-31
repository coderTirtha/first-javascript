var images = ["nature 1.jpg", "nature 2.jpg", "nature 3.jpg"];
var findImg = document.querySelector("img");
var i = 0;
var darkMode = document.getElementById("icon");
var brightMode = document.getElementById("icon1");

darkMode.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#060c21";
    document.querySelector("img").style.boxShadow = "3px 5px 12px orange";
});
brightMode.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("img").style.boxShadow = "3px 5px 12px black";
});

function close() {
    document.querySelector(".menu-items").style.display = "none";
    document.querySelector(".menu-bar").style.display = "block";
}
function menu() {
    document.querySelector(".menu-items").style.display = "block";
    document.querySelector(".menu-bar").style.display = "none";
    document.querySelector(".close-button").style.display = "block";
    document.querySelector(".container").style.marginLeft = "10px";
}



function prev() {
    i--;
    if (i < 0) {
        i = images.length - 1;
        findImg.src = images[i];
    }
    else {
        findImg.src = images[i];
    }
}

function next() {
    i++;
    if (i >= images.length) {
        i = 0; 
        findImg.src = images[i];
    }
    else {
        findImg.src = images[i];
    }
}