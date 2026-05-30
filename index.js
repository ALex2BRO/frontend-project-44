import readlineSync from 'readline-sync'
import { askUserName } from './src/cli.js'

const ROUNDS_COUNT = 3

export const playGame = (description, generateRound) => {
  console.log(description)
  console.log('')
  
  const name = askUserName()
  
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  
  console.log(`Congratulations, ${name}!`)
}