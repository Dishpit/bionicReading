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
      // if the word is longer than 3 characters
      if (words[j].length > 3) {
        // make the word red
        words[j] = '<span style="color: red">' + words[j] + '</span>';
      }
    }
    // join the words back into a string
    this.innerHTML = words.join(' ');
  });
}
