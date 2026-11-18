# mylib - arithmetic library with Mocha + Chai unit tests

A small JavaScript module that provides the four basic arithmetic operations,
a demonstration program that uses it, and a unit test suite built with Mocha
and Chai.

## Project structure

```
.
├── src
│   ├── mylib.js          # the library: add, subtract, multiply, divide
│   └── main.js           # demonstration program that imports mylib
├── tests
│   └── mylib.test.js     # Mocha + Chai test suite
├── .mocharc.json         # Mocha configuration (which files are test files)
├── .gitignore
├── package.json
└── README.md
```

## Requirements

- Node.js 18 or newer (the project uses ES modules)
- npm

## Install

```bash
npm install
```

## Run the demonstration program

```bash
npm start
# or
node src/main.js
```

## Run the unit tests

The tests are independent of `main.js`, so they can be run on their own:

```bash
npm test
# or
npx mocha
```

## Behaviour

| Function         | Result                                      |
| ---------------- | ------------------------------------------- |
| `add(a, b)`      | `a + b`                                     |
| `subtract(a, b)` | `a - b`                                     |
| `multiply(a, b)` | `a * b`                                     |
| `divide(a, b)`   | `a / b`, throws `RangeError` when `b === 0` |

All four functions throw a `TypeError` if an argument is not a finite number
(for example a string, `null`, `undefined`, `NaN` or `Infinity`).

## License

MIT
MIT License

Copyright (c) 2026 Krishna Chaudhary Tharu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# mylib-unit-testing
