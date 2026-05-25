### Hexlet tests and linter status:
[![Actions Status](https://github.com/ALex2BRO/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ALex2BRO/frontend-project-44/actions)
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=ALex2BRO_frontend-project-44)](https://sonarcloud.io/summary/new_code?id=ALex2BRO_frontend-project-44)

# Brain Games

«Игры разума» — набор из пяти консольных игр, проверяющих твой разум. Каждая игра задаёт вопросы, на которые нужно дать правильные ответы. После трёх правильных ответов подряд каждая из игр считается пройденной. Неправильный ответ завершает игру и предлагает пройти её заново.

## Список игр

| Игра | Описание | Команда для запуска |

**brain-prime (Простое ли число?)** 
[![asciicast](https://asciinema.org/a/abcd1234-ef56-7890-gh12-ijkl34567890.svg)](https://asciinema.org/a/IkmfNCx3BYDYt2VI)
Описание: Показывается случайное число. Нужно ответить `yes`, если число простое, иначе `no`.
[/] Команда для запуска:  node bin/brain-prime.js

**brain-even (Проверка на чётность)** 
[![asciicast](https://asciinema.org/a/abcd1234-ef56-7890-gh12-ijkl34567890.svg)](https://asciinema.org/a/YY9OTxwgZU0ToQC5)
Описание: Показывается случайное число. Нужно ответить `yes`, если число чётное, иначе `no`.
[/] Команда для запуска:  node bin/brain-even.js

**brain-calc (Калькулятор)** 
[![asciicast](https://asciinema.org/a/abcd1234-ef56-7890-gh12-ijkl34567890.svg)](https://asciinema.org/a/Uad3p6m8qrfqm3F7)
Описание: Показывается случайное арифметическое выражение (например, `35 + 16`). Нужно вычислить и ввести правильный ответ.
[/] Команда для запуска:  node bin/brain-calc.js

**brain-gcd (НОД - наибольший общий делитель)** 
[![asciicast](https://asciinema.org/a/abcd1234-ef56-7890-gh12-ijkl34567890.svg)](https://asciinema.org/a/1OG0XCgtBk7CPvLO)
Описание: Показываются два случайных числа. Нужно ввести их наибольший общий делитель (НОД).
[/] Команда для запуска:  node bin/brain-gcd.js

**brain-progression (Арифметическая прогрессия)** 
[![asciicast](https://asciinema.org/a/abcd1234-ef56-7890-gh12-ijkl34567890.svg)](https://asciinema.org/a/BLH3uPdzWU6Zz1PS)
Описание: Показывается ряд чисел, в котором пропущено одно число (обозначено `..`). Нужно вставить пропущенное число.
[/] Команда для запуска:  node bin/brain-progression.js


## Минимальные требования

- Node.js версии 13 и выше
- npm версии 6 и выше

## Установка

```bash
git clone git@github.com:ALex2BRO/frontend-project-44.git
cd frontend-project-44
npm install
npm link