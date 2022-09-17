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