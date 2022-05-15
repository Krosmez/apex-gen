const savedLegends = localStorage.getItem('savedLegends');

if (savedLegends) {
    createHero(JSON.parse(savedLegends))
} else {
    createHero(Characters);
}

createRepeat();
createRandomiser();
createResult();