const newWordButton = document.querySelector("#newWord");
const twitterButton = document.querySelector("#tweet");
const wordDisplay = document.querySelector("#wordDisplay");
const meaningHeader = document.querySelector("#meaningHeader");
const meaningText = document.querySelector("#meaningText");
const exampleHeader = document.querySelector("#exampleHeader");
const exampleText = document.querySelector("#exampleText");
// Without this line of code there're some square brackets appearing under "Meaning" and "Example".
const removeSquareBrackets = (text) => {
  return text.replace(/\[/g, "").replace(/\]/g, "");
};
// Fetches a random word, its meaning, & example from the local host 5000.
const fetchWordApi = () => {
  fetch("http://localhost:5000/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let term = response.list[0];
      wordDisplay.innerHTML = term.word;
      meaningHeader.innerHTML = "Meaning";
      meaningText.innerHTML = removeSquareBrackets(term.definition);
      exampleHeader.innerHTML = "Example";
      exampleText.innerHTML = removeSquareBrackets(term.example);
      // Twitter button
      setTweetButton(response);
    })
    .catch((err) => console.error(err));
};

// Fetches data from the local host 5000 when loading page
fetchWordApi();

// Fetches data from the local host 5000 when the user clicks Get a new word! button.
newWordButton.addEventListener("click", () => fetchWordApi());

// Twitter button
function setTweetButton(response) {
  twitterButton.setAttribute(
    "href",
    `https://twitter.com/share?text=${
      "Today I learnt a new word: " +
      wordDisplay.innerHTML +
      ". " +
      "Its meaning: " +
      meaningText.innerHTML
    } - Urban Dictionary Random Word`
  );
}
