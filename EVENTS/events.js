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
butts.removeEventListener('click', handleClick);

// binding and unbinding functions

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

function handleBuyButtonClick(e) {
        const button = e.target;

        // console.log(button.textContent);
        // console.log('You are buying it!');
        // console.log(parseFloat(event.target.dataset.price));
        console.log(e.currentTarget);
        console.log(e.target);
        console.log(e.target === e.currentTarget);

        // STOP this event from bubbling up (making it working serperate from window's function)
        e.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(e) {
        console.log('YOU CLICKED THE WINDOW');
        console.log(e.target);
});

const photoE1 = document.querySelector('.photo');

photoE1.addEventListener('mousemove', function(e) {
        console.count(e.currentTarget);
        // console.log(this);
});
