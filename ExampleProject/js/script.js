window.onload = init;
let myImage=null;

function init() {
    console.log("Page is ready, elements displayed, and resources that can take time ready too (videos)")
    myImage = document.querySelector('#myImage');
    myImage.width = 100;
}



function processClick() {
    console.log('You clicked me!');
}

function resizeImage() {
}