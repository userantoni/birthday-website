
/* =========================================
   1. BIRTHDAY COUNTDOWN
========================================= */

// Birthday: November 4, 2026
// Philippine Time: UTC+8
const birthdayDate = new Date("2026-11-04T00:00:00+08:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const birthdayMessage = document.getElementById("birthday-message");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Birthday has arrived
    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        birthdayMessage.innerHTML =
            "🎉 IT'S YOUR BIRTHDAY! HAPPY BIRTHDAY, MY LOVE! ❤️";

        birthdayMessage.classList.add("birthday-arrived");

        celebrateBirthday();

        clearInterval(countdownInterval);

        return;
    }

    // Calculate remaining time
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    // Display countdown
    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

// Start countdown
updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);


/* =========================================
   2. OPEN SURPRISE BUTTON
========================================= */

const surpriseButton = document.getElementById("surprise-btn");
const surpriseSection = document.getElementById("surprise");

surpriseButton.addEventListener("click", function () {

    surpriseSection.scrollIntoView({
        behavior: "smooth"
    });

    // Button animation
    surpriseButton.innerHTML = "Opened with Love ❤️";

});


/* =========================================
   3. FLOATING HEARTS ANIMATION
========================================= */

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    // Random heart symbols
    const heartSymbols = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    // Random position
    heart.style.left = Math.random() * 100 + "%";

    // Random size
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    // Random animation duration
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(function () {
        heart.remove();
    }, 10000);

}

// Create hearts every 700 milliseconds
setInterval(createHeart, 700);


/* =========================================
   4. BIRTHDAY CELEBRATION
========================================= */

let birthdayCelebrated = false;

function celebrateBirthday() {

    if (birthdayCelebrated) return;

    birthdayCelebrated = true;

    // Create lots of hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(createHeart, i * 100);
    }

    // Change page background
    document.body.classList.add("birthday-mode");

    // Show birthday alert
    setTimeout(function () {

        alert("🎂 HAPPY BIRTHDAY, MY LOVE! ❤️\n\nToday is all about YOU! I love you!");

    }, 500);

}


/* =========================================
   5. SMOOTH NAVIGATION
========================================= */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================
   6. WELCOME MESSAGE
========================================= */

console.log("❤️ Birthday Website Successfully Loaded!");
console.log("Made with love for someone special.");
