// variables
const currentLanguage = () => {

    value = localStorage.getItem("language");

    return value;
};

const navLang = document.getElementById('nav-lang');

//functions
function switchLanguage() {

    if(currentLanguage() == "english") {

        localStorage.setItem('language', 'french');
        window.location = '../fr/index.html';
    } else {

        localStorage.setItem('language', 'english');
        window.location = '../en/index.html';
    }
}

//event listeners
navLang.addEventListener('click', () => switchLanguage());