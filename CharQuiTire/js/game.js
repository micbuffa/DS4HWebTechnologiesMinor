import Char from './char.js';
import { getMousePos } from './utils.js'

var canvas, ctx, width, height;
var char1;
var mousepos = { x: 0, y: 0 };
var inputStates = {};

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    // dernier param = temps min entre tirs consecutifs. Mettre à 0 pour cadence max
    // 500 = 2 tirs max par seconde, 100 = 10 tirs/seconde
    char1 = new Char(100, 100, 0, 1, 100);

    canvas.addEventListener('mousemove', (evt) => {
        mousepos = getMousePos(canvas, evt);
    }, false);

    window.addEventListener('click', (evt) => {
        // on passe le temps en parametres, en millisecondes
        char1.addBullet(Date.now());
    });

    window.addEventListener('keydown', (evt) => {
        inputStates.SPACE = true;
    });

    window.addEventListener('keyup', (evt) => {
        inputStates.SPACE = false;
    });

    anime();
}

function anime() {
    // 1) On efface l'Ã©cran
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2) On dessine et on déplace le char 1
    char1.draw(ctx);
    char1.move(mousepos);

    // On regarde si on doit tirer
    if (inputStates.SPACE) {
        char1.addBullet(Date.now(), width, height);
    }

    // On demande une nouvelle frame d'animation
    window.requestAnimationFrame(anime);

}

function changeCadenceTir(value) {
    char1.delayMinBetweenBullets = value;
}
