const savedLegends = localStorage.getItem('savedLegends');

if (savedLegends) {
    Object.keys(JSON.parse(savedLegends)).length !== Object.keys(JSON.parse(Characters)).length ?
        createHero(Characters)
        :
        createHero(JSON.parse(savedLegends))
} else {
    createHero(Characters);
}

createRepeat();
createRandomiser();
createResult();
initColors();