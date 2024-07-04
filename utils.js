function genRanNum () {
    return Math.floor(Math.random() * 100) +1;
}

function celToFar (celcius) {
    return (celcius * 9 ) / 5 + 32;
}

module.exports = {
    genRanNum,
    celToFar,
}