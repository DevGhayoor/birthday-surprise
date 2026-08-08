/* ==========================
   Birthday Surprise Script
========================== */

const PASSWORD = "2003";

const lockScreen = document.getElementById("lockScreen");
const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorText = document.getElementById("errorText");

const countdown = document.getElementById("countdown");
const countdownNumber = document.getElementById("countdownNumber");

const loader = document.getElementById("loader");
const hero = document.getElementById("hero");
const surprise = document.getElementById("surprise");

const startBtn = document.getElementById("startBtn");
const blowBtn = document.getElementById("blowBtn");
const letterBtn = document.getElementById("letterBtn");

const letter = document.getElementById("letter");
const candles = document.querySelector(".candles");

const hearts = document.getElementById("hearts");
const stars = document.getElementById("stars");
const petals = document.getElementById("petals");


/* ==========================
   Unlock
========================== */

unlockBtn.addEventListener("click", function () {

    if (passwordInput.value === PASSWORD) {

        errorText.textContent = "";

        unlockBtn.disabled = true;
        passwordInput.disabled = true;

        lockScreen.style.transition = "opacity 0.8s ease";
        lockScreen.style.opacity = "0";

        setTimeout(function () {

            lockScreen.style.display = "none";

            startCountdown();

        }, 800);

    } else {

        errorText.textContent = "❌ Wrong Password";

        passwordInput.value = "";

        passwordInput.focus();

    }

});


/* ==========================
   Countdown
========================== */

function startCountdown() {

    countdown.classList.remove("hide");

    const numbers = ["3", "2", "1"];

    let currentNumber = 0;


    function showNextNumber() {

        if (currentNumber >= numbers.length) {

            finishCountdown();

            return;

        }

        countdownNumber.textContent = numbers[currentNumber];

        countdownNumber.classList.remove("countdownAnimate");

        void countdownNumber.offsetWidth;

        countdownNumber.classList.add("countdownAnimate");

        currentNumber++;

        setTimeout(function () {

            showNextNumber();

        }, 1000);

    }


    showNextNumber();

}


/* ==========================
   Finish Countdown
========================== */

function finishCountdown() {

    countdownNumber.classList.remove("countdownAnimate");

    countdown.classList.add("hide");

    loader.classList.remove("hide");

    setTimeout(function () {

        loader.classList.add("hide");

        hero.classList.remove("hide");

        hero.style.opacity = "0";
        hero.style.transition = "opacity 1s ease";

        setTimeout(function () {

            hero.style.opacity = "1";

        }, 50);

    }, 2000);

}


/* ==========================
   Floating Hearts
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";

    hearts.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 600);


/* ==========================
   Stars
========================== */

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 2 + "s";

    stars.appendChild(star);

}


/* ==========================
   Sakura Petals
========================== */

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        6 + Math.random() * 5 + "s";

    petals.appendChild(petal);

    setTimeout(function () {

        petal.remove();

    }, 11000);

}

setInterval(createPetal, 800);


/* ==========================
   Open Surprise
========================== */

startBtn.addEventListener("click", function () {

    hero.classList.add("hide");

    surprise.classList.remove("hide");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

});


/* ==========================
   Blow Candles
========================== */

blowBtn.addEventListener("click", function () {

    candles.classList.add("off");

    blowBtn.textContent = "🎉 Candles Blown";

    blowBtn.disabled = true;

    createFireworks();

});


/* ==========================
   Open Letter
========================== */

letterBtn.addEventListener("click", function () {

    letter.classList.remove("hide");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    startTyping();

});


/* ==========================
   Letter Message
========================== */

const letterMessage = `Dear Ayesha ❤️

Happy Birthday! 🎂✨

I pray that your life is always filled with happiness, peace, success and beautiful moments.

Aaj aap ka special din hai aur meri dil se dua hai ke Allah aap ki zindagi ko hamesha khushiyon, sukoon, kamyabi aur apni rehmat se bhar de.

May Allah always protect you, guide you, and bless you with everything that brings genuine happiness to your heart.

Har woh khwab jo aap dekhti hain, Allah usay poora kare, aur aap ki muskurahat hamesha isi tarah chamakti rahe.

Allah kare aap ke chehre ki ye muskurahat kabhi kam na ho, aur aap ki zindagi hamesha pyare lamhon aur khushiyon se bhari rahe.

Thank you for being such a wonderful person. Aap waqai har khushi ki haqdar hain.

Chahe zindagi humein kisi bhi raaste par le jaye, meri dua hamesha yehi rahegi ke Allah aap ko hamesha khush rakhe, har mushkil se mehfooz rakhe, aur har qadam par apni hifazat mein rakhe.

Keep smiling, keep shining, and never stop believing in yourself.

Once again...

Happy Birthday, Ayesha. ❤️🎉

With Best Wishes,

❤️ Ghayoor`;


let letterIndex = 0;
let typingInterval = null;


/* ==========================
   Letter Typing
========================== */

function startTyping() {

    const letterParagraph =
        document.querySelector("#letter p");

    if (!letterParagraph) {
        return;
    }

    if (typingInterval !== null) {
        clearInterval(typingInterval);
    }

    letterParagraph.textContent = "";

    letterIndex = 0;

    typingInterval = setInterval(function () {

        letterParagraph.textContent +=
            letterMessage.charAt(letterIndex);

        letterIndex++;

        if (letterIndex >= letterMessage.length) {

            clearInterval(typingInterval);

            typingInterval = null;

        }

    }, 45);

}


/* ==========================
   Fireworks
========================== */

function createFireworks() {

    for (let i = 0; i < 50; i++) {

        setTimeout(function () {

            const fire = document.createElement("div");

            fire.style.position = "fixed";

            fire.style.left =
                Math.random() * 100 + "vw";

            fire.style.top =
                Math.random() * 70 + "vh";

            fire.style.width = "12px";

            fire.style.height = "12px";

            fire.style.borderRadius = "50%";

            fire.style.background =
                "hsl(" +
                Math.random() * 360 +
                ", 100%, 60%)";

            fire.style.boxShadow =
                "0 0 25px white";

            fire.style.zIndex = "99999";

            document.body.appendChild(fire);

            fire.animate(

                [
                    {
                        transform: "scale(0.2)",
                        opacity: 1
                    },

                    {
                        transform: "scale(8)",
                        opacity: 0
                    }
                ],

                {
                    duration: 1000,
                    easing: "ease-out"
                }

            );

            setTimeout(function () {

                fire.remove();

            }, 1000);

        }, i * 80);

    }

}


/* ==========================
   Password Enter Key
========================== */

passwordInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        unlockBtn.click();

    }

});


/* ==========================
   Console Message
========================== */

console.log(
    "%c❤️ Happy Birthday Ayesha ❤️",
    "font-size:25px;color:#ff4d6d;font-weight:bold"
);

console.log(
    "%cMade with ❤️ by Ghayoor",
    "font-size:16px;color:#4facfe"
);