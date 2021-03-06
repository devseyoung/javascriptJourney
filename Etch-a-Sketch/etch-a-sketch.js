// select the elements on the page-canvas, shake buttons
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
// Upper Characters and underscore for true constant
const MOVE_AMOUNT = 40;

// setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas
const { width, height } = canvas;

// create random x and y starting points on the canvas

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);

// move out x and y values depending on what the user did

ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
        // increment the hue
        hue += 10;
        ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        // console.log(key);
        // start the path
        ctx.beginPath();
        // move out x and y values depending on what the user did
        ctx.moveTo(x, y);
        switch (key) {
                case 'ArrowUp':
                        y -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        x += MOVE_AMOUNT;
                        break;
                case 'ArrowDown':
                        y += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        x -= MOVE_AMOUNT;
                        break;
                default:
                        break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
                // console.log(e.key);
                // console.log('HANDLING KEY');
        }
}
// clean (shake function)
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        canvas.addEventListener(
                'animationend',
                function() {
                        console.log('Done the shake!');
                        canvas.classList.remove('shake');
                },
                { once: true }
                // remove eventlistener automatically
        );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
