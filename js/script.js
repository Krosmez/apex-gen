const savedLegends = localStorage.getItem('savedLegends');


if (savedLegends) {
    savedLegends !== Characters ?
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