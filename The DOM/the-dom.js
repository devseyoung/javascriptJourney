// const p = document.querySelector('p');
// const div = document.querySelectorAll('div');
// const item2 = document.querySelector('.item2');

// console.log(p);
// console.log(div);
// console.log(item2);

// const heading = item2.querySelector('h2');

// console.log(heading.textContent); // see a bunch of object properties
// console.log(heading.innerText);
// // set the textContent property on that element
// // heading.textContent = 'Seyoung is Cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes
const pic = document.querySelector('.nice');

// By using .classList => check a prototype (add, contains, keys and etc)
// Adding and Removing classes
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

console.log(pic.classList);
function toggleRound() {
        pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
