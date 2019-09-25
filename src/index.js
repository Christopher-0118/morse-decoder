const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let dividedString = divideString (expr, 2);
  let morseCode = convertToMorse (dividedString);
}

function divideString (expr, step) {
  let dividedString = [];
  let stringLength = (expr.length - 1);
  let startSubSrting = 0;
  let endSubString = step;  

  while (endSubString <= stringLength) {
    dividedString.push(expr.slice(startSubSrting, endSubString));
    startSubSrting += step;
    endSubString = startSubSrting + step;
  }
  return dividedString;
}

function convertToMorse (dividedString) { // the function create word, but you need letters
  let convertedToMorse = [];
  let word = '';
  let arrayLength = (dividedString.length - 1);

  for (let i = 0; i <= arrayLength; i++) {
    if (dividedString[i] === '10') {
      word += '.';
    }
    else if (dividedString[i] === '11') {
      word += '-';
    }
    else if (dividedString[i] === '**' && dividedString[i + 1] !== '**') {
      convertedToMorse.push(word);
      convertedToMorse.push(' ');
      word = '';
    }
  }
  convertedToMorse.push(word);
  return convertedToMorse;
}

module.exports = {
    decode
}