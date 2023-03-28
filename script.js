const next = document.querySelector(".dice");

const quotes = [
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "Life is what happens when you're busy making other plans.",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "Always remember that you are absolutely unique. Just like everyone else.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Whoever is happy will make others happy too.",
  "Never let the fear of striking out keep you from playing the game.",
  "The only impossible journey is the one you never begin.",
  "You only live once, but if you do it right, once is enough.",
  "Go confidently in the direction of your dreams! Live the life you've imagined.",
  "May you live all the days of your life.",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
  "Love the life you live. Live the life you love.",
  "Life is either a daring adventure or nothing at all.",
  "Life is trying things to see if they work.",
  "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
  "The only place where success comes before work is in the dictionary.",
  "Nothing is impossible, the word itself says, ‘I'm possible!'",
  "Life is 10% what happens to you and 90% of how you react to it.",
  "Be yourself; everyone else is already taken.",
  "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  "Be the change that you wish to see in the world.",
  "A friend is someone who knows all about you and still loves you.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
];

// this function picks an element randomly from an array
function generateAdvice(arg) {
  quotesLength = quotes.length;
  let randomQuote = Math.random();
  randomQuote = randomQuote * quotesLength;
  randomQuote = Math.floor(randomQuote);
  let chooseQuote = quotes[randomQuote];
  return chooseQuote;
}
document.querySelector(".quote").innerHTML = `
<h1>
${generateAdvice(quotes)}
</h1>`;

// when click dice, change quote
next.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".quote").innerHTML = `
<h1>
${generateAdvice(quotes)}
</h1>`;
  console.log("clicked");
  document.querySelector(".number").innerHTML =
    "ADVICE #" + quotes.indexOf(generateAdvice(quotes));
});

document.querySelector(".number").innerHTML =
  "ADVICE #" + quotes.indexOf(generateAdvice(quotes));
