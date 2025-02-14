const board = document.getElementById('board');
const dice = document.getElementsByTagName('button')[0];

const players = [
    { id: 1, name: 'Player 1', color: 'blue', tokens: [0, 1, 2, 3], home: 0 },
    { id: 2, name: 'Player 2', color: 'green', tokens: [12, 13, 14, 15], home: 12 },
    { id: 3, name: 'Player 3', color: 'red', tokens: [24, 25, 26, 27], home: 24 },
    { id: 4, name: 'Player 4', color: 'yellow', tokens: [36, 37, 38, 39], home: 36 }
];

const cells = [];
for(let i = 0; i < 40; i++) {
    cells.push(i);
}

const rollDice = () => {
    const roll = Math.floor(Math.random()*6) + 1;
    console.log(`Rolled: ${roll}`);
    players.forEach(player => {
        if(player.home < 4 && player.tokens.includes(player.home)) {
            const token = player.tokens[player.tokens.indexOf(player.home)];
            const newPos = token + roll;
            if(newPos < 40) {
                cells[newPos] = token;
                cells[token] = null;
                player.home++;
                drawBoard();
            }
        }
    });
}

const drawBoard = () => {
    board.innerHTML = '';
    players.forEach(player => {
        for(let i = player.home; i < player.tokens.length + player.home; i++) {
            const cell = cells[i];
            if(cell !== null) {
                const token = document.createElement('div');
                token.className = 'token';
                token.style.background = player.color;
                const cellEl = document.createElement('div');
                cellEl.className = 'cell';
                if(i < 12) {
                    cellEl.style.top = (i*50) + 'px';
                    cellEl.style.left = '0px';
                } else if(i < 24) {
                    cellEl.style.top = (i*50 - 12*50) + 'px';
                    cellEl.style.left = '50px';
                } else if(i < 36) {
                    cellEl.style.top = (i*50 - 24*50) + 'px';
                    cellEl.style.left = '100px';
                } else {
                    cellEl.style.top = (i*50 - 36*50) + 'px';
                    cellEl.style.left = '150px';
                }
                cellEl.appendChild(token);
                board.appendChild(cellEl);
            }
        }
    });
}

drawBoard();