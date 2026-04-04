import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';

let number = Math.ceil(Math.random()*99);
let correctAnswer = '';

const isPrime = () => {
    switch(number){
        case number < 2:
            correctAnswer = 'no';
            break;
        case 2:
            correctAnswer = 'yes';
            break;
        case number % 2 === 0:
            correctAnswer = 'no';
            break;
        default:
            correctAnswer = 'yes';
    }
    const limit = Math.floor(Math.sqrt(number));
        for (let i = 3; i <= limit; i++) {
            if (number % i === 0) {
                correctAnswer = 'no';
            }
        }
}

export const fifthGame = () =>  {
    let countCorrectAnsver = 0;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    while(countCorrectAnsver !== 3){
        number = Math.ceil(Math.random()*99);
        const answer = readlineSync.question(`Question: ${number} `);
        console.log(`Your answer: ${answer}`);
        isPrime();
        if(answer === correctAnswer){
            console.log('Correct!');
            countCorrectAnsver++;
        } if(answer !== correctAnswer){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`);
            break;
        } if(answer === correctAnswer && countCorrectAnsver === 3){
            console.log(`Congratulations, ${userName}!`);
            break;
        }
    }
}