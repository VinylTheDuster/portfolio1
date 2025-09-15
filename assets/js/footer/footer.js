function initFooter() {
    
    const footer = document.getElementById('footer');
    const footerLicense = document.createElement('span');

    const spanContent = () => {

        const year = new Date().getFullYear();

        return "©" + year + " " + "William Salembien. All right reserved.";
    };

    footerLicense.textContent = spanContent();

    footer.appendChild(footerLicense);
}

initFooter();