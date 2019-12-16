const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
function handleClick() {
        console.log('IT GOT CLICKED!!');
}

const hooray = () => {
        console.log('HOORAY!');
};

// The browser run this function ("you do you :)")
butts.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// binding and unbinding functions
// butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

function buyItem() {
        console.log('BUYING ITEM');
}

// buyButtons.addEventListener('click', buyItem);

// console.log(buyButtons);

function handleBuyButtonClick(buyButton) {
        console.log('Binding the buy button');
        buyButton.addEventListener('click', buyItem);
}

// buyButtons.forEach(handleBuyButtonClick);

buyButtons.forEach(button => {
        button.addEventListener('click', () => {
                console.log('You clicked it');
        });
});
