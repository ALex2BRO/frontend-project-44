import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';

export const thirdGame = () => {
    let countCorrectAnsver = 0;
    console.log('Find the greatest common divisor of given numbers.');
    while(countCorrectAnsver !== 3){
        let a = Math.ceil(Math.random()*99);
        let b = Math.ceil(Math.random()*99);
        const gcd = (a, b) => { 
            while (b!==0){
                let temp = b; 
                b = a % b;
                a = temp; 
            } return a; 
        }
        let correctAnswer = gcd(a, b);
        const answer = readlineSync.question(`Question: ${a} ${b} `);
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