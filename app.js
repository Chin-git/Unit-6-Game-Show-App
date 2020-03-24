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

//picks a random index from an array and splits the string into an array of strings
const getRandomPhraseAsArray = arr => {
    const oldArr = arr[Math.floor(Math.random() * arr.length)];
    return oldArr.split("");
};

//takes an array and loops through it's content, then appends a li element to #phrase in the html
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.textContent = arr[i].toLowerCase();
        phrase.appendChild(li);
        if (arr[i].toLowerCase() != arr[i].toUpperCase()) {
            //check for letters and spaces then set it's class name
            li.className = "letter";
        } else {
            li.className = "space";
        }
    }
};

//check if the buttons letter is equal to the unrevealed letter in the phrase
const checkLetter = button => {
    const letter = document.querySelectorAll(".letter");
    let guess;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].textContent === button.textContent) {
            letter[i].classList.add("show");
            guess = letter[i].textContent;
        } 
    }
    return guess;
};

const checkWin = () => {
    const letter = document.querySelectorAll(".letter");
    const show = document.querySelectorAll('.show');
    let letterCount = 0;
    let showCount = 0;
    for (let i = 0; i < letter.length; i++) {
        if (letter[i].className === 'letter') {
            letterCount += 1;
        }
    }
    for (let i = 0; i < show.length; i++) {
        if (show[i].className === 'show' ) {
            showCount += 1;
        }
    }
    const overlay = document.getElementById("overlay");
    if (letterCount === showCount) {
        overlay.className = 'win';
        overlay.style.display = 'block';
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'block';
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);

start.addEventListener("click", e => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
});

//loop through the buttons and add the class "chosen" if clicked
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => {
        buttons[i].classList.add("chosen");
        let letterFound = checkLetter(buttons[i]); //call to checkLetter function
        if (!letterFound) {
            //if the letter clicked is null then add 1 to missed and remove a life
            let ol = document.getElementsByTagName("ol")[0];
            let tries = document.querySelector(".tries:last-child");
            missed += 1;
            ol.removeChild(tries);
        } else {
            missed += 0;
        }
        if (buttons[i].className === "chosen") {
            buttons[i].setAttribute("disabled", true); //set buttons to disabled
        } else {
            button[i].setAttribute("");
        }
        checkWin();
    });
}
