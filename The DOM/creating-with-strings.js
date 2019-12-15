const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
<div class ="wrapper">
    <h2>Cute Pup</h2>
    <img src = "${src}" alt ="${desc}"/>
</div>
`;

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

// console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);

// you can turn in into DOM nodes before it's dumped in With .createContextualFragment() where you pass it a actual string

// potential pitfalls
// XSS (cross siting scripting) => scrub any security vulnerabilities
