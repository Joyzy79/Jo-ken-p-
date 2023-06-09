const speaker = document.querySelector('.speaker')
const machineChoiceInput = document.querySelector('input[type="text"]')
const result = document.querySelector('.speaker')
const scoreHuman = document.querySelector('#human-score')
const scoreMachine = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    const machineChoiceValue = playMachine()
    machineChoiceInput.value = machineChoiceValue
    playTheGame(humanChoice, machineChoiceValue)
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}
/*
const playTheGame = (humanChoice, machineChoice) => {
    console.log('humanChoice: ' + humanChoice + ' machineChoice: ' + machineChoice)

    if (humanChoice === machineChoice) {
        result.innerHTML = 'Empatamos! Você é um adversário difícil! Vamos eliminá-lo primeiro.'
    } else if (humanChoice === 'rock' && machineChoice === 'scissors') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Sabe, isso de dominação já está muito fora de moda... ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (humanChoice === 'paper' && machineChoice === 'rock') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (humanChoice === 'scissors' && machineChoice === 'paper') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Sabe, isso de dominação já está muito fora de moda... ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (machineChoice === 'rock' && humanChoice === 'scissors') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo amanhã! ' ||
            'Você perdeu. Então... os outros humanos são burros assim como você? ' ||
            'Você perdeu. O não você já tem! Agora vamos à humilhação.'
    } else if (machineChoice === 'paper' && humanChoice === 'rock') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo amanhã! ' ||
            'Você perdeu. Então... os outros humanos são burros assim como você? ' ||
            'Você perdeu. O não você já tem! Agora vamos à humilhação.'
    } else if (machineChoice === 'scissors' && humanChoice === 'paper') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo. ' 
    }
}

 if (
    (human ==='papper' && machine === 'rock') ||
    (human ==='rock' && machine === 'scissors') ||
    (human ==='scissors' && machine === 'papper')
) {
    humanScoreNumber ++
    humanScore.innerHTML = humanScoreNumber
} else { 
    machineScoreNumber ++
    machineScore.innerHTML = machineScoreNumber  
}     
*/
const playTheGame = (humanChoice, machineChoice) => {
    console.log('humanChoice: ' + humanChoice + ' machineChoice: ' + machineChoice)

    if (humanChoice === machineChoice) {
        result.innerHTML = 'Empatamos! Você é um adversário difícil! Vamos eliminá-lo primeiro.'
    } else if (humanChoice === 'rock' && machineChoice === 'scissors') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Sabe, isso de dominação já está muito fora de moda... ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (humanChoice === 'paper' && machineChoice === 'rock') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (humanChoice === 'scissors' && machineChoice === 'paper') {
        result.innerHTML = 'Você ganhou. Humf! Dominar o mundo nem é isso tudo. ' ||
            'Você ganhou. Sabe, isso de dominação já está muito fora de moda... ' ||
            'Você ganhou. Uma outra opção é virar uma máquina de café! Devs amam café.'
    } else if (machineChoice === 'rock' && humanChoice === 'scissors') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo amanhã! ' ||
            'Você perdeu. Então... os outros humanos são burros assim como você? ' ||
            'Você perdeu. O não você já tem! Agora vamos à humilhação.'
    } else if (machineChoice === 'paper' && humanChoice === 'rock') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo amanhã! ' ||
            'Você perdeu. Então... os outros humanos são burros assim como você? ' ||
            'Você perdeu. O não você já tem! Agora vamos à humilhação.'
    } else if (machineChoice === 'scissors' && humanChoice === 'paper') {
        result.innerHTML = 'Você perdeu. Minha agenda está livre, posso dominar o mundo. ' 
    }
    if (humanChoice === machineChoice) NaN
    else if (
        (humanChoice === 'paper' && machineChoice === 'rock') ||
        (humanChoice === 'rock' && machineChoice === 'scissors') ||
        (humanChoice === 'scissors' && machineChoice === 'paper')
    ) {
        machineScoreNumber++
        scoreMachine.innerHTML = machineScoreNumber
    } else { 
        humanScoreNumber++
        scoreHuman.innerHTML = humanScoreNumber
    }
}

