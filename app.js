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
        li.textContent = arr[i].toLowerCase();
        phrase.appendChild(li);
        if (arr[i].toLowerCase() != arr[i].toUpperCase()) {
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
};

const checkLetter = button => {
    const letter = document.querySelectorAll(".letter");
    let guess;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].textContent === button.textContent) {
            letter[i].classList.add("show");
            guess = letter[i].textContent;
        } else {
            guess = null;
        }
    }
    return guess;
};
const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);

start.addEventListener("click", e => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        buttons[i].classList.add("chosen");
        let letterFound = checkLetter(buttons[i]);
        if (letterFound === null) {
            let ol = document.getElementsByTagName('ol')[0];
            let tries = document.querySelector(".tries:last-child");
            missed += 1;
            ol.removeChild(tries);
        } else {
            missed += 0;
        }
        if (buttons[i].className === "chosen") {
            buttons[i].setAttribute("disabled", true);
        } else {
            button[i].setAttribute("");
        }
    });
}
