const root = document.getElementById('root');
const body = document.getElementById('body');
const selection = document.getElementById('selection');

function createHero(data) {
    localStorage.setItem('savedLegends', JSON.stringify(data))

    Object.entries(data).forEach(el => {
        let [key, value] = el;
        const input = document.createElement('input');
        const label = document.createElement('label');
        const labelName = document.createTextNode(key);

        input.setAttribute('class', 'input-selection');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', key);
        input.setAttribute('id', key);

        label.setAttribute('for', key)
        label.appendChild(input);
        label.appendChild(labelName);

        input.checked = value;

        label.addEventListener('click', () => {
            swicthColors(input, label);
            if (!input.checked) {
                Object.defineProperty(data, key, {
                    value: false
                })
                localStorage.setItem('savedLegends', JSON.stringify(data))
            } else {
                Object.defineProperty(data, key, {
                    value: true
                })
                localStorage.setItem('savedLegends', JSON.stringify(data))
            }
        })

        selection.appendChild(label)
    });
}

function createRepeat() {
    const section = document.createElement('section');
    const incrementBtn = document.createElement('button')
    const decrementBtn = document.createElement('button')
    const div = document.createElement('div');

    section.setAttribute('class', 'repeat-ctn')

    incrementBtn.setAttribute('id', 'increment')
    incrementBtn.setAttribute('class', 'repeat-btn')
    incrementBtn.appendChild(document.createTextNode('Ajout de résultat'))
    incrementBtn.addEventListener('click', () => {
        incrementResult();
    })

    div.setAttribute('id', 'div-repeat')
    div.setAttribute('class', 'div-repeat')
    div.textContent = '0'

    decrementBtn.setAttribute('id', 'decrement')
    decrementBtn.setAttribute('class', 'repeat-btn')
    decrementBtn.appendChild(document.createTextNode('Retrait de résultat'))
    decrementBtn.addEventListener('click', () => {
        decrementResult();
    })

    section.appendChild(incrementBtn)
    section.appendChild(div)
    section.appendChild(decrementBtn)
    insertAfter(section, root.lastElementChild)
}

function createRandomiser() {
    const randomiserBtn = document.createElement('button');
    const containterBtn = document.createElement('div')

    containterBtn.setAttribute('id', 'randomiser-ctn')
    containterBtn.setAttribute('class', 'randomiser-ctn')

    randomiserBtn.setAttribute('type', 'submit')
    randomiserBtn.setAttribute('id', 'randomiser-button')
    randomiserBtn.setAttribute('class', 'randomiser container btn')
    randomiserBtn.textContent = 'Lancer le tirage'

    containterBtn.appendChild(randomiserBtn)
    insertAfter(containterBtn, root.lastElementChild)

    randomiserBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let parsedData = JSON.parse(localStorage.getItem('savedLegends'));
        let dataToShuffle = Object.entries(parsedData).filter(e => e[1] != false).map(el => el[0]);
        showCharacter(dataToShuffle);
    })
}

function createResult() {
    const section = document.createElement('section');

    section.setAttribute('id', 'result-ctn')
    section.setAttribute('class', 'result-ctn')

    root.appendChild(section)
}