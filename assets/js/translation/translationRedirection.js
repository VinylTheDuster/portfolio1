// variables
const currentLanguage = () => {

    value = localStorage.getItem("language");

    return value;
};

//functions
function redirectToTranslationPage() {

    switch(currentLanguage()) {

        case "english":

            window.location = './en/index.html';

            break;

        case "french":

            window.location = './fr/index.html';

            break;

        default:

            localStorage.setItem('language', 'english');
            window.location = './en/index.html';

            break;
    }

}

redirectToTranslationPage();