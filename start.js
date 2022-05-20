// select all the paragraphs on the page
const paragraphs = document.querySelectorAll('p');

// loop through the paragraphs
for (let i = 0; i < paragraphs.length; i++) {
  // select the current paragraph
  let p = paragraphs[i];
  // create an array of words in the selected paragraph
  let words = p.innerText.split(' ');
  // loop through the words
  for (let j = 0; j < words.length; j++) {
    // select the current word
    let word = words[j];
    // if the word is 1 character long
    if (word.length === 1) {
      // add a class to the word
      word.classList.add('bionic');
    }
  }
}
