function Palindrome({wordEnt}) {
  let reverseWord = '';
  let checkPal = false;
  let word = String(wordEnt).toUpperCase();
  console.log('ww', wordEnt);

  for (let i = word.length - 1; i >= 0; i--) {
    console.log(i);
    reverseWord += word[i];
    console.log('word is reversed ', reverseWord);
  }

  for (let j = word.length - 1; j >= 0; j--) {
    if (word === '') {
      return;
    } else {
      if (word[j] === reverseWord[j]) {
        return 'You found a palindrome - Congratulations';
      } else {
        return 'No palindrome this time - Please play again';
      }
    }
  }
}

export default Palindrome;
