import getRandomInt from '../utils.js'

export const description = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

export const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const question = `${a} ${b}`
  const correctAnswer = gcd(a, b)
  return [question, String(correctAnswer)]
}