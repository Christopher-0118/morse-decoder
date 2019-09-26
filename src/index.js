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
  let dividedString = divideString(expr, 10);
  let arrayOfLetters = [];
  let morseCode = [];
  let decodedString = [];

  for (let i = 0; i < dividedString.length; i++) {
    arrayOfLetters.push(divideString(dividedString[i], 2));
  }
  for (let i = 0; i < arrayOfLetters.length; i++) {
    morseCode.push(convertToMorse(arrayOfLetters[i]));
  }
  for (let i = 0; i < morseCode.length; i++) {
    if (morseCode[i] == ' ') {
      decodedString.push(' ');
    }
    decodedString.push(MORSE_TABLE[morseCode[i]]);
  }
  return decodedString.join('');
}

function divideString(expr, step) {
  let dividedString = [];
  let stringLength = expr.length;
  let startSubSrting = 0;
  let endSubString = step;  

  while (endSubString <= stringLength) {
    dividedString.push(expr.slice(startSubSrting, endSubString));
    startSubSrting += step;
    endSubString = startSubSrting + step;
  }
  return dividedString;
}

function convertToMorse(dividedString) {
  let convertedToMorse = [];
  let letter = '';
  let arrayLength = dividedString.length - 1;

  for (let i = 0; i <= arrayLength; i++) {
    if (dividedString[i] == '10') {
      letter += '.';
    }
    else if (dividedString[i] == '11') {
      letter += '-';
    }
    else if (dividedString[i] == '**') {
      convertedToMorse.push(' ');
      return convertedToMorse;
    }
  }
  convertedToMorse.push(letter);
  return convertedToMorse;
}

module.exports = {
    decode
}