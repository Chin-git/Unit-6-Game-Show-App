const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const start = document.querySelector(".btn__reset");
const buttons = document.querySelectorAll("button");
let missed = 0;
const phrases = [
    "Actions Speak Louder Than Words",
    "Let Bygones Be Bygones",
    "Paint the Town Red",
    "A Dime a Dozen",
    "Cup of Joe"
];

const getRandomPhraseAsArray = arr => {
    const oldArr = arr[Math.floor(Math.random() * arr.length)];
    return oldArr.split("");
};

const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = arr[i];
        phrase.appendChild(li);
        if (arr[i].toLowerCase() != arr[i].toUpperCase()) {
            li.className = "letter";
        } else {
            li.className = "";
        }
    }
};

const checkLetter = button => {
    const letter = document.querySelector(".letter");
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === button) {
            const correctLetter = letter.classList.add("show");
            return correctLetter;
        } else {
            return null;
        }
    }
};

start.addEventListener("click", e => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
});

buttons.addEventListener("click", e => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("chosen");
    }
});