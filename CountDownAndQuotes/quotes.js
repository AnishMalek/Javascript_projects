const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Programming isn’t about what you know; it’s about what you can figure out.",
    "The best way to predict the future is to create it.",
    "Don’t compare yourself with others. Compare yourself with who you were yesterday.",
    "Learning to write programs stretches your mind and helps you think better.",
    "Small progress every day leads to big results.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you."
];

const btn = document.querySelector('.btn');
const quoteText = document.querySelector('.quote');

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
});
