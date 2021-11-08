let player = {}

// Id giocotarore
let players = [];
let mediathree = [];

function playerprofile() {

    for (let i = 0; i < 10; i++) {
        player = {
            Idplayer: Id() + RandomNumber(100, 900),
            Name: NamesRandom(),
            Surname: SurnameRandom(),
            Age: '36',
            Points: RandomPoints(0, 50),
            threePoints: RandomPoints(0, 100)
        }
        players.push(player)
        if (player['Points'] > 35 && player['threePoints'] > 80) {
            mediathree.push(player)
        }
    }
    console.table(mediathree);
    return players
    
}
console.table(playerprofile());

function NamesRandom() {
    names = ['Marco', 'Luca', 'Giovanni', 'Francesco', 'Pietro', 'Kobe'];
    return names[Math.floor(Math.random() * names.length)];
}

function SurnameRandom() {
    Surname = ['Pedretti', 'Bryant', 'Locatelli', 'Lombardi', 'Costa', 'Rizzo'];
    return Surname[Math.floor(Math.random() * Surname.length)];
}

function Id() {
    let idPlayer = '';
    let CharsRandom = 'ABCDEFGHIJKLMNOPQRSTUVZ';
    for (let i = 0; i < 3; i++) {
        CharsRandom[Math.floor(Math.random() * CharsRandom.length)];
        idPlayer += CharsRandom[Math.floor(Math.random () * CharsRandom.length)]
    }
    return idPlayer;
}

function RandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function RandomPoints(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}