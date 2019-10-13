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
    // write your solution here
    //1 break the string on array by 10 symbols in item 
    let arr = expr.match(/.{1,10}/g);

    //2 Removing zeros from the beginning of every item 
    arr = arr.map(zeroRemove);

    function zeroRemove(item) {
      return item
        .split("")
        .slice(item.indexOf(1))
        .join("");
    }

    // 3 function to convert to 10 and 11 into . and -;

    function convertToMorse(item) {
      if (item == "10") {
        return ".";
      } else if (item == "11") {
        return "-";
      } else if (item == "*") {
        return " ";
      }
    }

    //3 using converter function
    arr = arr.map(breakStringTwo);

    function breakStringTwo(str) {
      return str
        .match(/.{1,2}/g)
        .map(convertToMorse)
        .join("");
    }

    // 4 compare morse table with array of items to decode message;
    arr = arr.map(compareMORSE_TABLE);

    function compareMORSE_TABLE(item, index) {
      for (let [key, value] of Object.entries(MORSE_TABLE)) {
        if (item == key) {
          return value;
        } else if (item == " ") {
          return " ";
        }
      }
    }
    
    return arr.join("")
}
module.exports = {
    decode
}