const hambugaIcon = document.getElementById('nav-icon');
const hambugaUl = document.getElementById('nav-bar-hambuga')

let toggle = false;

hambugaIcon.addEventListener('click', () => {

    if(!toggle) {

        hambugaIcon.classList.add('open');
        hambugaUl.style.display = "flex";

        toggle = true;
    } else {

        hambugaIcon.classList.remove('open');
        hambugaUl.style.display = "none";

        toggle = false;
    }
});