import readlineSync from 'readline-sync';

export const playGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${name}!`);
};