//write your code here

const reversedString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
};

const reverseZigZagString = (str) => {
  let reversed = '';
  for (let i = str.length; i >= 1; i--) {
    if (i % 2 === 0) {
      reversed += str[i - 1];
      console.log(`${i}`);
    } else {
      reversed += str[i - 1].toUpperCase();
    }
  }
  return reversed;
};

const reversedString1 = reversedString('hello');
console.log('Problem 1  reversedString1', reversedString1);
const reverseZigZagString1 = reverseZigZagString('hello');
console.log('Problem 2 reverseZigZagString1', reverseZigZagString1);
