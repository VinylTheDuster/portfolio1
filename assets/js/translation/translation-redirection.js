// variables
const currentLanguage = () => {

    value = localStorage.getItem("language");

    return value;
};

//functions
function redirectToTranslationPage() {

    const userLang = new Intl.Locale(navigator.language);

    switch(userLang.language || currentLanguage()) {

        case ("en" || "english"):

            window.location = './en/index.html';

            break;

        case ("fr" || "french"):

            window.location = './fr/index.html';

            break;

        default:

            localStorage.setItem('language', 'english');
            window.location = './en/index.html';

            break;
    }

}

redirectToTranslationPage();