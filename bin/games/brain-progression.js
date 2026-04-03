import readlineSync from 'readline-sync';
import {userName} from '../../src/cli.js';

let progression = '';
let correctAnswer = 0;

const currentProgression = () => {
    let progressionLastIndex = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let progressionStep = Math.ceil(Math.random()*99);
    let startIndex = Math.ceil(Math.random()*99);
    let current = Math.ceil(Math.random()*progressionLastIndex);
    for(let i = 0; i < progressionLastIndex; i++){
        let currentElement = startIndex + i * progressionStep;
        if(i === current){
            progression += '.. '
            correctAnswer += currentElement
        } else {
            progression += `${currentElement} `;
        }
    }
}

export const fourthGame = () => {
    let countCorrectAnsver = 0;
    console.log('What number is missing in the progression?');
    while(countCorrectAnsver !== 3){
        correctAnswer = 0;
        currentProgression();
        const answer = readlineSync.question(`Question: ${progression} `);
        console.log(`Your answer: ${answer}`);
        if(+answer === correctAnswer){
            console.log('Correct!');
            countCorrectAnsver++;
            progression = '';
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