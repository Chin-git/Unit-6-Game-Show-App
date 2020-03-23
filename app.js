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
    const letter = document.querySelectorAll(".letter");
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].textContent === button.textContent) {
            letter.classList.add("show");
        } else {
            return null;
        }
    }
};

addPhraseToDisplay(getRandomPhraseAsArray(phrases));

start.addEventListener("click", e => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', e => {
        checkLetter(buttons[i]);
        buttons[i].classList.add('chosen');
        if (buttons[i].className === 'chosen') {
            buttons[i].setAttribute('disabled', true);

        } else {
            button[i].setAttribute('');
        }
    });
}