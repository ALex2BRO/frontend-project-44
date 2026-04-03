#!/!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { firstGame } from './games/brain-even.js';
import { secondGame } from './games/brain-calc.js';
import { thirdGame } from './games/brain-gcd.js';

greetUser();
firstGame();
secondGame();
thirdGame();