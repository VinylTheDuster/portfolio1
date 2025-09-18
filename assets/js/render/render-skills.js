/// json importing
async function init() {

    const json = await loadJson();

    initializeSkills(json);
}

async function loadJson() {

    const response = await fetch('../assets/json/skills.json');

    return await response.json();
}

// // // // // // // // // // // // // //

// functions
function initializeSkills(json) {

    const arrOfArrays = [
        
        { key: "front", values: json.front },
        { key: "back", values: json.back },
        { key: "design", values: json.design },
        { key: "others", values: json.others }
    ];

    arrOfArrays.forEach(group => {

        group.values.forEach(skill => {

            const newDiv = document.createElement('div');

            newDiv.textContent = skill;
            newDiv.classList.add('skill-item', 'skill-reveal');

            const container = document.getElementById(`${group.key}-container`);
            
            if (container) {

                container.appendChild(newDiv);
                console.log('Premier');
            }
        });
    });

    initReveal();
}

init();