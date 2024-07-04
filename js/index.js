// fetch ("https://apis.google.com/js/platform.js?onload=renderButton");

// function onSuccess(googleUser) {
//     console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
//   }
//   function onFailure(error) {
//     console.log(error);
//   }
//   function renderButton() {
//     gapi.signin2.render('my-signin2', {
//       'scope': 'profile email',
//       'width': 240,
//       'height': 50,
//       'longtitle': true,
//       'theme': 'dark',
//       'onsuccess': onSuccess,
//       'onfailure': onFailure
//     });
//   }
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.registration-form input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.previousElementSibling.classList.remove('active');
            }
        });
    });
});
