const gameboard = (() => {
    // Array for each possible win case
    const gameboardArray1 = [];
    const gameboardArray2 = [];
    const gameboardArray3 = [];
    const gameboardArray4 = [];
    const gameboardArray5 = [];
    const gameboardArray6 = [];
    const gameboardArray7 = [];
    const gameboardArray8 = [];
    return {
        gameboardArray1,
        gameboardArray2,
        gameboardArray3,
        gameboardArray4,
        gameboardArray5,
        gameboardArray6,
        gameboardArray7,
        gameboardArray8
    };
})();

const talker = (state) => ({
    // Announce winner
    talk: () => {return `${state.name} wins!`}
})

const mover = (state) => ({
    // Adds correct move of each player to array
    move: () => {
        if (state.name == 'Player 1') {
            return 'X'
        } else if (state.name == 'Player 2') {
            return 'O'
        }
    }
}) 

const Player = (name) => {
    // Factory function for making players
    let state = {
        name,
    }

    return Object.assign(
        {}, 
        talker(state),
        mover(state)
    );
}

let player1 = Player('Player 1');
let player2 = Player('Player 2');

const displayController = (() => {
    // Creates visual gameboard
    const main = document.querySelector('main');
    let array = []
    for (let i=0; i<9; i++) {
        array.push(i);
        const box = document.createElement('div');
        box.classList.add('box');
        box.classList.add(`id${i}`);
        main.appendChild(box);
    }

    const boxes = document.querySelectorAll('.box')
    let counter = 0
        let a = ''
        boxes.forEach(boxe => {
        
        boxe.addEventListener('click', () => {
            const allPossiblities = [
            gameboard.gameboardArray1.length,
            gameboard.gameboardArray2.length,
            gameboard.gameboardArray3.length,
            gameboard.gameboardArray4.length,
            gameboard.gameboardArray5.length,
            gameboard.gameboardArray6.length,
            gameboard.gameboardArray7.length,
            gameboard.gameboardArray8.length
            ];
            const totalPoss = allPossiblities.reduce((acc, curr) => acc + curr, 0);
            // console.log(totalPoss);

            // Switches between player 1 and player 2
            // Adds X or O when box is clicked
            if (counter === 0) {
                counter = 1;
                a = player1;
                boxe.textContent = player1.move()
            } else if (counter === 1) {
                counter = 0;
                a = player2;
                boxe.textContent = player2.move()
            }
            
            // Pushes X or O to the given arrays
            // depending on the id of the box
            if (boxe.classList.contains('id0')) {
                    gameboard.gameboardArray1.push(
                        a.move()
                    );
                    gameboard.gameboardArray4.push(
                        a.move()
                    );
                    gameboard.gameboardArray7.push(
                        a.move()
                    );
                    boxe.classList.remove('id0')
                } else if (boxe.classList.contains('id1')) {
                    gameboard.gameboardArray1.push(
                        a.move()
                    );
                    gameboard.gameboardArray5.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id2')) {
                    gameboard.gameboardArray1.push(
                        a.move()
                    );
                    gameboard.gameboardArray6.push(
                        a.move()
                    );
                    gameboard.gameboardArray8.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id3')) {
                    gameboard.gameboardArray2.push(
                        a.move()
                    );
                    gameboard.gameboardArray4.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id4')) {
                    gameboard.gameboardArray2.push(
                        a.move()
                    );
                    gameboard.gameboardArray5.push(
                        a.move()
                    );
                    gameboard.gameboardArray7.push(
                        a.move()
                    );
                    gameboard.gameboardArray8.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id5')) {
                    gameboard.gameboardArray2.push(
                        a.move()
                    );
                    gameboard.gameboardArray6.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id6')) {
                    gameboard.gameboardArray3.push(
                        a.move()
                    );
                    gameboard.gameboardArray4.push(
                        a.move()
                    );
                    gameboard.gameboardArray8.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id7')) {
                    gameboard.gameboardArray3.push(
                        a.move()
                    );
                    gameboard.gameboardArray5.push(
                        a.move()
                    );
                } else if (boxe.classList.contains('id8')) {
                    gameboard.gameboardArray3.push(
                        a.move()
                    );
                    gameboard.gameboardArray6.push(
                        a.move()
                    );
                    gameboard.gameboardArray7.push(
                        a.move()
                    );
                }
            if (totalPoss === 21) {
                const bottom = document.querySelector('.bottom');
                const para = document.createElement('p');
                const button = document.createElement('button');
                para.textContent = 'It is a tie!'
                para.classList.add('para');
                button.textContent = 'Play Again';
                button.classList.add('retry');
                bottom.appendChild(para);
                bottom.appendChild(button);
                
                button.addEventListener('click', () => {
                    location.reload()
                })
                counter = 2
            }
            
            //Each possible win combination of arrays
            if (
                (gameboard.gameboardArray1[0] == gameboard.gameboardArray1[1] &&
                gameboard.gameboardArray1[1] == gameboard.gameboardArray1[2] &&
                gameboard.gameboardArray1.length > 0) ||
                
                (gameboard.gameboardArray2[0] == gameboard.gameboardArray2[1] &&
                gameboard.gameboardArray2[1] == gameboard.gameboardArray2[2] &&
                gameboard.gameboardArray2.length > 0) ||
                
                (gameboard.gameboardArray3[0] == gameboard.gameboardArray3[1] &&
                gameboard.gameboardArray3[1] == gameboard.gameboardArray3[2] &&
                gameboard.gameboardArray3.length > 0) ||
                
                (gameboard.gameboardArray4[0] == gameboard.gameboardArray4[1] &&
                gameboard.gameboardArray4[1] == gameboard.gameboardArray4[2] &&
                gameboard.gameboardArray4.length > 0) ||
                
                (gameboard.gameboardArray5[0] == gameboard.gameboardArray5[1] &&
                gameboard.gameboardArray5[1] == gameboard.gameboardArray5[2] &&
                gameboard.gameboardArray5.length > 0) ||
                
                (gameboard.gameboardArray6[0] == gameboard.gameboardArray6[1] &&
                gameboard.gameboardArray6[1] == gameboard.gameboardArray6[2] &&
                gameboard.gameboardArray6.length > 0) ||
                
                (gameboard.gameboardArray7[0] == gameboard.gameboardArray7[1] &&
                gameboard.gameboardArray7[1] == gameboard.gameboardArray7[2] &&
                gameboard.gameboardArray7.length > 0) ||
                
                (gameboard.gameboardArray8[0] == gameboard.gameboardArray8[1] &&
                gameboard.gameboardArray8[1] == gameboard.gameboardArray8[2] &&
                gameboard.gameboardArray8.length > 0)
                ) {
                    const bottom = document.querySelector('.bottom');
                    const para = document.createElement('p');
                    const button = document.createElement('button');
                    if (counter === 1) {
                        para.textContent = player1.talk();
                        para.classList.add('para');
                        button.textContent = 'Play Again';
                        button.classList.add('retry');
                        bottom.appendChild(para);
                        bottom.appendChild(button);
                        counter = 2;
                        button.addEventListener('click', () => {
                            location.reload()
                        })
                        
                    } else if (counter === 0) {
                        para.textContent = player2.talk();
                        para.classList.add('para');
                        button.textContent = 'Play Again';
                        button.classList.add('retry');
                        bottom.appendChild(para);
                        bottom.appendChild(button);
                        
                        button.addEventListener('click', () => {
                            location.reload()
                        })
                        counter = 2
                    }
            
                    
                }

            


        }, {once:true})

        
    })
    
    

})();


