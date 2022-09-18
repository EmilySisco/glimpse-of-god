const page = document.querySelector(".page");
const menuIcon = document.querySelector(".nav-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener('click', function() {
    page.classList.toggle("active");
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
});



const cards = document.querySelectorAll(".card");

window.addEventListener( 'scroll', checkboxes);

function checkboxes ( ) {
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach( card => {
        const cardTop = card.getBoundingClientRect().top;

        if( cardTop < triggerBottom) {
            card.classList.add("show");
        }

        else {
            card.classList.remove("show");
        }
    });
}


const tapesRight = document.querySelectorAll(".tape-right");

window.addEventListener( 'scroll', movetapeRight);

function movetapeRight ( ) {
    const triggerBottom = window.innerHeight / 5 * 4;

    tapesRight.forEach( tape => {
        const tapeTop = tape.getBoundingClientRect().top;

        if( tapeTop < triggerBottom) {
            tape.classList.add("show");
        }

        else {
            tape.classList.remove("show");
        }
    });
}


const tapesLeft = document.querySelectorAll(".tape-left");

window.addEventListener( 'scroll', movetapeLeft);

function movetapeLeft ( ) {
    const triggerBottom = window.innerHeight / 5 * 4;

    tapesLeft.forEach( tape => {
        const tapeTop = tape.getBoundingClientRect().top;

        if( tapeTop < triggerBottom) {
            tape.classList.add("show");
        }

        else {
            tape.classList.remove("show");
        }
    });
}