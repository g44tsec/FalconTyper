const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector("#tryAgainBtn"),
    resetGameBtn = document.querySelector("#resetGameBtn"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span"),
    winScreen = document.querySelector("#winScreen"),
    finalWPM = document.querySelector("#finalWPM"),
    finalMistakes = document.querySelector("#finalMistakes"),
    capsLockWarning = document.querySelector("#capsLockWarning");

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;

// Day/Night Background Video
window.addEventListener('load', function() {
    const currentHour = new Date().getHours();
    const videoElement = document.getElementById('background-video');
    const daytimeVideo = 'https://static.moewalls.com/videos/preview/2024/mount-fuji-torii-sunset-preview.mp4';
    const nighttimeVideo = 'https://static.moewalls.com/videos/preview/2024/starry-night-sky-under-the-moon-preview.mp4';

    videoElement.src = currentHour >= 6 && currentHour < 18 ? daytimeVideo : nighttimeVideo;
});

// Load paragraph with random words
function loadParagraph() {
    const paragraph = getRandomParagraph(5, 12); // 5 sentences, each with 12 words
    typingText.innerHTML = "";
    paragraph.split("").forEach(char => {
        let span = `<span>${char}</span>`;
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

// Typing function with backspace support
function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];

    if (charIndex < characters.length && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        // Handle backspace
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            // Handle correct/incorrect typing
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }

        // Set active character
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex]?.classList.add("active");

        // Calculate WPM and update stats
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else if (timeLeft <= 0) {
        clearInterval(timer);
        inpField.value = "";
        showWinScreen();
    }
}

// Timer function
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        inpField.value = "";
        showWinScreen();
    }
}

// Reset game to initial state
function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
    winScreen.style.display = "none"; // Hide win screen
    typingText.classList.remove("blur"); // Remove blur from typing text
}

// Show win screen
function showWinScreen() {
    finalWPM.innerText = wpmTag.innerText;
    finalMistakes.innerText = mistakeTag.innerText;
    winScreen.style.display = "block"; // Show win screen
    typingText.classList.add("blur"); // Blur typing text
}

// Load paragraph and start the game
loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
resetGameBtn.addEventListener("click", resetGame);
    
