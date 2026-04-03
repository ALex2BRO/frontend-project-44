import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';

export const firstGame = () => {
    let correctAnswer;
    let countCorrectAnsver = 0;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while(correctAnswer !== 3){
        let number = Math.ceil(Math.random()*99);
        const answer = readlineSync.question(`Question: ${number} `);
        console.log(`Your answer: ${answer}`);
        if(number % 2 === 0){
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }
        if(answer === correctAnswer){
            console.log('Correct!');
            countCorrectAnsver++;
        } 
        if(answer !== correctAnswer){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`);
            break;
        } if(answer === correctAnswer && countCorrectAnsver === 3){
            console.log(`Congratulations, ${userName}!`);
            break;
        }
    }
}