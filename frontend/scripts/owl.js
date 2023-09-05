                     // <----------login------->
const owlLogin = document.getElementById('owl-login');
const passwordInput1 = document.querySelector(".login-password");

// when focus is on password input
passwordInput1.addEventListener('focus', () => {
  owlLogin.classList.add('password');
});
// when focus is out of password input
passwordInput1.addEventListener('focusout', () => {
  owlLogin.classList.remove('password');
});

                    // <--------signup-------------->
const owlSignup = document.getElementById('owl-signup')
const passwordInput2 = document.querySelector(".signup-password")

// when focus is on password input
passwordInput2.addEventListener('focus', () => {
  owlSignup.classList.add('password');
});
// when focus is out of password input
passwordInput2.addEventListener('focusout', () => {
  owlSignup.classList.remove('password');
});