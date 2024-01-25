const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        const buttonStyle = window.getComputedStyle(event.target);
        const buttonBackgroundColor = buttonStyle.backgroundColor;
        body.style.backgroundColor = buttonBackgroundColor;
    });
});
