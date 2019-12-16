const wes = document.querySelector('.wes');
wes.addEventListener('click', function(event) {
        const shouldChangePage = confirm('This website might be malicious!, do you wish to proceed?');

        if (!shouldChangePage) {
                event.preventDefault();
        }
});

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = event.currentTarget.name.value;
        // console.log(event.currentTarget.email.value);
        // console.log(event.currentTarget.agree.checked);
        if (name.includes('chad')) {
                alert('Sorry bro');
                event.preventDefault();
        }
});

function logEvent(event) {
        console.log(event.type);
        console.log(event.currentTarget.value);
}
// 'keyup'
signupForm.name.addEventListener('keyup', logEvent);
// 'keydown'
signupForm.name.addEventListener('keydown', logEvent);
// 'focus' => it can be used to know how much people spend time for specific inputs
signupForm.name.addEventListener('focus', logEvent);
// 'blur'
signupForm.name.addEventListener('blur', logEvent);

// keycode.info => to check key code
