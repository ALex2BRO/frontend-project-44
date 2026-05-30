import getRandomInt from '../utils.js'

export const description = 'What is the result of the expression?'

export const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomInt(0, operators.length - 1)]
  let correctAnswer
  switch (operator) {
    case '+':
      correctAnswer = a + b
      break
    case '-':
      correctAnswer = a - b
      break
    case '*':
      correctAnswer = a * b
      break
    default:
      correctAnswer = null
  }
  const question = `${a} ${operator} ${b}`
  return [question, String(correctAnswer)]
}