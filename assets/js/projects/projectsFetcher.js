async function initJson() {

    const json = await loadJson();

    initProjects(json);
}

async function loadJson () {
    
    const response = await fetch('../assets/json/projects.json');

    return await response.json();
}

function initProjects(json) {

    console.log('done');

    const arr = json.projects;
    const docLang = document.documentElement.lang;

    const projectContainer = document.getElementById('projets-container');

    arr.forEach(project => {
        
        //master div
        const masterDiv = document.createElement('div');
        masterDiv.classList.add('projet-item', 'reveal');

        //image
        const img = document.createElement('img');
        img.setAttribute('src', project.img);

        //second div
        const secondDiv = document.createElement('div');
        secondDiv.classList.add('projet-desc');

        //h2
        const h2 = document.createElement('h2');
        switch(docLang) {

            case "en":
                h2.textContent = project.titleEn;
                break;

            case "fr":
                h2.textContent = project.titleFr;
                break;

            default:
                h2.textContent = project.titleEn;
                break;
        }

        //madewith
        const mwDiv = document.createElement('div');
        mwDiv.classList.add('projets-mw');

        const mwTitleSpan = document.createElement('span');
        const mwTitleTxt = () => {

            switch(docLang) {

                case "en":
                    return "Made with:";

                case "fr":
                    return "Conçu avec :";

                default:
                    return "Made with";
            }
        };
        mwTitleSpan.classList.add('projet-mw-title');
        mwTitleSpan.textContent = mwTitleTxt();

        const mwItemSpan = document.createElement('span');
        mwItemSpan.classList.add('projet-mw-item');
        mwItemSpan.textContent = project.mw;
        
        //description
        const desc = document.createElement('p');
        switch(docLang) {

            case "en":
                desc.textContent = project.descriptionEn;
                break;

            case "fr":
                desc.textContent = project.descriptionFr;
                break;

            default:
                desc.textContent = project.descriptionEn;
                break;
        }

        // Div & Btn
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('projet-btn');

        if(project.link !== "") {

            createButton("link");
        }

        if(project.code !== "") {
            createButton("code");
        }

        function createButton(prop) {

            let imgSrc;
            let spanPropTxt;

            if (prop == "code") {

                imgSrc = "../assets/images/github-mark-white.svg";
                spanPropTxt = "Code";
            } else {

                imgSrc = "../assets/images/open_in_new.svg";
                spanPropTxt = "Live";
            }

            const btn = document.createElement('button');
            const a = document.createElement('a');

            a.setAttribute('href', project[prop]);

            //image
            const btnImg = document.createElement('img');
            btnImg.setAttribute('src', imgSrc);

            //span
            const spanProp = document.createElement('span');
            spanProp.textContent = spanPropTxt;

            a.appendChild(btnImg);
            a.appendChild(spanProp);

            btn.appendChild(a);

            btnDiv.appendChild(btn);
        }

        projectContainer.appendChild(masterDiv);

        masterDiv.appendChild(img);
        masterDiv.appendChild(secondDiv);

        secondDiv.appendChild(h2);

        mwDiv.appendChild(mwTitleSpan);
        mwDiv.appendChild(mwItemSpan);

        secondDiv.appendChild(mwDiv);
        
        secondDiv.appendChild(desc);
        secondDiv.appendChild(btnDiv);
    });
}

initJson();