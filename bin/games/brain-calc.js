import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';

export const secondGame = () => {
    let correctAnswer;
    let countCorrectAnsver = 0;
    let sign;
    console.log('What is the result of the expression?');
    while(countCorrectAnsver !== 3){
        let a = Math.ceil(Math.random()*99);
        let b = Math.ceil(Math.random()*99);
        let signChange = Math.ceil(Math.random()*3);
        switch(signChange){
            case 1:
                sign = `${a} + ${b}`;
                correctAnswer = a + b;
                break;
            case 2:
                sign = `${a} - ${b}`;
                correctAnswer = a - b;
                break;
            default:
                sign = `${a} * ${b}`;
                correctAnswer = a * b;
        }
        const answer = readlineSync.question(`Question: ${sign} `);
        console.log(`Your answer: ${answer}`);
        if(+answer === correctAnswer){
            console.log('Correct!');
            countCorrectAnsver++;
        } if(+answer !== correctAnswer){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`);
            break;
        } if(+answer === correctAnswer && countCorrectAnsver === 3){
            console.log(`Congratulations, ${userName}!`);
            break;
        }
    }
}