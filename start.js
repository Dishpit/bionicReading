// select all the paragraphs on the page
const paragraphs = document.querySelectorAll('p');

// loop through the paragraphs

for (let i = 0; i < paragraphs.length; i++) {
  // add an event listener to each paragraph
  paragraphs[i].addEventListener('click', function () {
    // split the text of the paragraph into an array of words
    const words = this.innerText.split(' ');
    // loop through the words
    for (let j = 0; j < words.length; j++) {
      // if the word has an even length
      if (words[j].length % 2 === 0) {
        // make the first half of the word bold
        words[j] = `<strong>${words[j].substring(0, words[j].length / 2)}</strong>${words[j].substring( words[j].length / 2, words[j].length)}`;
      }
      // if the word has an odd length
      else {
        // make the first half of the word bold, rounded up
        words[j] = `<strong>${words[j].substring(0, Math.ceil(words[j].length / 2))}</strong>${words[j].substring( Math.ceil(words[j].length / 2), words[j].length)}`;
      }
    }
    // join the words back into a string
    this.innerHTML = words.join(' ');
  });
}
