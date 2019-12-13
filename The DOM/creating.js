const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);
const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);

// const item = document.querySelector('.item');

// const width = 500;
// const src = `https://picsum.photos/${width}`;
// const desc = `Cute Pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/>`;
// const myHTML = `
//   <div class="wrapper">
//     <h2>Cute ${desc}</h2>
//     <img src="${src}" alt="${desc}"/>
//   </div>
// `;

// // turn a string into a DOM element
// const myFragment = document.createRange().createContextualFragment(myHTML);

// document.body.appendChild(myFragment);
