window.onload = init;

function init() {
    console.log("Page is ready, elements displayed, and resources that can take time ready too (videos)")
    declareEventListeners();
}

function declareEventListeners() {
    // look for button2
    // we use the query selector to find the element
    // the parameter is a CSS selector. # means "search by id"
    let button2 = document.querySelector('#button2');
    //button2.onclick = processClick;

    // we can also use the addEventListener method
    // the first parameter is the event type
    // the second parameter is the function to call when the event happens
    button2.addEventListener('click', processClick);

    button2.addEventListener('click', (event) => {
        console.log("You clicked me using a second listener!");
        // get first button
        let button = document.querySelector('#button1');
        document.body.removeChild(button);

    });

    //button2.removeEventListener('click', processClick);

    document.onkeydown = (event) => {
        console.log("key down " + event.key);
    }

    document.onkeyup = (event) => {
        console.log("key up " + event.key);
    }

    document.onmousemove = (event) => {
        console.log("mouse moved " + event.clientX + " " + event.clientY);
    }
}

function processClick(event) {
    // common properties we often use
    // event.target = the element that was clicked
    // this is useful with all the event types
    
    // particular properties of click events
    console.log("button used for click " + event.button);
    console.log("The button that has been click has for label " + event.target.innerHTML);

    event.target.innerHTML = "<b>Clicked</b>";
}

function changeName(event) {
    const key = event.key;
    const code = event.code;
    const keyCode = event.keyCode;

    console.log("key pressed " + key);
    console.log("code pressed " + code);
    console.log("keyCode pressed " + keyCode);
}

function changeVolume(event) {
    console.log("volume changed " + event.target.value);
    // let's update the span
    let spanVolume = document.querySelector('#volume');
    spanVolume.innerHTML = event.target.value;
    //document.body.innerHTML += "<p>Volume changed to " + event.target.value + "</p>";

    // or we could build a new HTML element using the DOM API
    let newParagraph = document.createElement('p');
    newParagraph.innerHTML = "Volume changed to " + event.target.value;
    document.body.append(newParagraph);
}