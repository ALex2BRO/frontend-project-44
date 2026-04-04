#!/!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { firstGame, finish1 } from './games/brain-even.js';
import { secondGame, finish2 } from './games/brain-calc.js';
import { thirdGame, finish3 } from './games/brain-gcd.js';
import { fourthGame, finish4 } from './games/brain-progression.js';
import { fifthGame } from './games/brain-prime.js';

greetUser();
firstGame();
if(finish1 > 0){
    secondGame();
}
if(finish2 > 0){
    thirdGame();
}
if(finish3 > 0){
    fourthGame();
}
if(finish4 > 0){
    fifthGame();
}