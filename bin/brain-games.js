#!/!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { firstGame } from './games/brain-even.js';
import { secondGame } from './games/brain-calc.js';

greetUser();
firstGame();
secondGame();