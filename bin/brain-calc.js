#!/usr/bin/env node
import { playGame } from '../index.js'
import { description, generateRound } from '../src/games/brain-calc.js'

playGame(description, generateRound)