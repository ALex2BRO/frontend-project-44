import getRandomInt from '../utils.js'

export const description = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomInt(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return [String(number), correctAnswer]
}