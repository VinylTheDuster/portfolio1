function initReveal() {

    const revealElements = document.querySelectorAll('.reveal');
    const revealSkills = document.querySelectorAll('.skill-reveal');

    let skillsAnimating = false;

    function pageScrolling() {

        for (let element of revealElements) {

            if(!(element.classList.contains('active')) && inViewport(element)) {

                element.classList.remove('reveal');
                element.classList.add('active');
            }
        }

        if (skillsAnimating) return;

        for (let [i, skill] of revealSkills.entries()) {

            if(!(skill.classList.contains('active')) && inViewport(skill)) {

                let skillsIntervalIndex = i;
                let intervalId = setInterval(() => {

                    if (skillsIntervalIndex < revealSkills.length) {

                        revealSkills[skillsIntervalIndex].classList.remove('skill-reveal');
                        revealSkills[skillsIntervalIndex].classList.add('active');
                        skillsIntervalIndex++;
                    } else {

                        clearInterval(intervalId);
                    }
                }, 100);
                break;
            }
        }
    }

    function inViewport(el) {

        let elPos = el.getBoundingClientRect();

        return !(elPos.top > window.innerHeight || elPos.bottom < 0);
    }

    window.addEventListener('scroll', pageScrolling);
    window.addEventListener('load', pageScrolling);

    pageScrolling(); // premier check direct
}