function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function incrementResult() {
    const divRepeat = document.getElementById('div-repeat');

    const p = document.createElement('p');
    const resultSection = document.getElementById('result-ctn');
    divRepeat.textContent++;
    p.setAttribute('id', `result-${divRepeat.textContent}`);
    p.setAttribute('class', 'result');
    p.style.maxWidth = '0%'
    resultSection.appendChild(p);
    setTimeout(() => { p.style.maxWidth = '100%' }, 10)
}

function decrementResult() {
    const divRepeat = document.getElementById('div-repeat');

    const resultSection = document.getElementById('result-ctn');
    const p = document.getElementById(`result-${divRepeat.textContent}`);
    divRepeat.textContent--;
    resultSection.removeChild(p);
}

function shuffleCharacter(dataToShuffle) {
    // Create empty array for results
    let results = [];
    // Get data [dataToShuffle] and slice the array's result 
    let newData = dataToShuffle;
    // Make a randomiser on this new Array
    for (let i = newData.length - 1; i > 0; i--) {
        const x = Math.round(Math.random() * i);

        const y = newData[i];
        newData[i] = newData[x];
        newData[x] = y;
    }
    // Enter randomised data in the empty array
    results.push(...newData);
    return results;
}

function showCharacter(data) {
    const result = shuffleCharacter(data);
    const response = document.querySelectorAll('.result');

    for (let i = 0; i < response.length; i++) {
        response[i].textContent = result[i];
    }
}

function swicthColors(input, label) {
    !input.checked ?
        label.style.backgroundColor = colors.red
        :
        label.style.backgroundColor = colors.green
}

function initColors() {
    const labels = document.querySelectorAll('label')
    const inputs = document.querySelectorAll('.input-selection')

    for (let i = 0; i < labels.length; i++) {

        if (!inputs[i].checked) {
            labels[i].style.backgroundColor = colors.red;
        } else {
            labels[i].style.backgroundColor = colors.green;
        }
    }
}