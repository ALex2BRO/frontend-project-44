import getRandomInt from '../utils.js'

export const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i)
  }
  return progression
}

export const generateRound = () => {
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const length = getRandomInt(5, 10)
  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  return [question, String(correctAnswer)]
}