/* ==========================
Birthday Surprise Script
========================== */


const PASSWORD = "2003";


const lockScreen = document.getElementById("lockScreen");

const passwordInput = document.getElementById("passwordInput");

const unlockBtn = document.getElementById("unlockBtn");

const errorText = document.getElementById("errorText");

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


unlockBtn.addEventListener("click", () => {


    if (passwordInput.value === PASSWORD) {


        errorText.innerHTML = "";


        lockScreen.style.opacity = "0";


        lockScreen.style.transition = ".8s";


        setTimeout(() => {


            lockScreen.style.display = "none";


            loader.classList.remove("hide");



            setTimeout(() => {


                loader.classList.add("hide");


                hero.classList.remove("hide");



            }, 2000);



        }, 800);



    }

    else {


        errorText.innerHTML = "❌ Wrong Password";


        passwordInput.value = "";


    }


});




/* ==========================
Hearts
========================== */


function createHeart() {


    const heart = document.createElement("div");


    heart.className = "heart";


    heart.innerHTML = "❤️";


    heart.style.left = Math.random() * 100 + "vw";


    heart.style.animationDuration =

        (5 + Math.random() * 5) + "s";


    hearts.appendChild(heart);



    setTimeout(() => {


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


    star.style.left = Math.random() * 100 + "vw";


    star.style.top = Math.random() * 100 + "vh";


    star.style.animationDelay =

        Math.random() * 2 + "s";


    stars.appendChild(star);



}




/* ==========================
Sakura
========================== */


function createPetal() {


    const petal = document.createElement("div");


    petal.className = "petal";


    petal.innerHTML = "🌸";


    petal.style.left = Math.random() * 100 + "vw";


    petal.style.animationDuration =

        (6 + Math.random() * 5) + "s";


    petals.appendChild(petal);



    setTimeout(() => {


        petal.remove();


    }, 11000);


}



setInterval(createPetal, 800);

/* ==========================
Open Surprise
========================== */


startBtn.addEventListener("click", () => {


    hero.classList.add("hide");


    surprise.classList.remove("hide");


    surprise.scrollIntoView({

        behavior: "smooth"

    });


});



/* ==========================
Blow Candles
========================== */


blowBtn.addEventListener("click", () => {


    candles.classList.add("off");


    blowBtn.innerHTML = "🎉 Candles Blown";


    blowBtn.disabled = true;


    createFireworks();



});



letterBtn.addEventListener("click", () => {

    letter.classList.remove("hide");

    letter.scrollIntoView({

        behavior: "smooth"

    });


    startTyping();

});



const letterMessage = `Dear Ayesha ❤️


Happy Birthday! 🎂✨

I can't really put into words how special you are to me, or how much this day means to me. All I know is that seeing your smile makes this day even more beautiful.

Aaj aap ka special din hai aur meri dil se dua hai ke Allah aap ki zindagi ko hamesha khushiyon, sukoon, kamyabi aur apni rehmat se bhar de.

May Allah always protect you, guide you, and bless you with everything that brings genuine happiness to your heart.

Har woh khwab jo aap dekhti hain, Allah usay poora kare, aur aap ki muskurahat hamesha isi tarah chamakti rahe. Allah kare aap ke chehre ki ye muskurahat kabhi kam na ho, aur aap ki zindagi hamesha pyare lamhon aur khushiyon se bhari rahe.

Thank you for being such a wonderful person. Aap waqai har khushi ki haqdar hain.

Chahe zindagi humein kisi bhi raaste par le jaye, meri dua hamesha yehi rahegi ke Allah aap ko hamesha khush rakhe, har mushkil se mehfooz rakhe, aur har qadam par apni hifazat mein rakhe.

Keep smiling, keep shining, and never stop believing in yourself.

Once again...

Happy Birthday, Ayesha. ❤️🎉

With Best Wishes,

❤️ Ghayoor` ;



let letterIndex = 0;


function startTyping() {


    document.querySelector("#letter p").innerHTML = "";

    letterIndex = 0;


    let typing = setInterval(() => {


        document.querySelector("#letter p").innerHTML +=
            letterMessage.charAt(letterIndex);


        letterIndex++;


        if (letterIndex >= letterMessage.length) {


            clearInterval(typing);


        }


    }, 45);


}


/* ==========================
Fireworks
========================== */


function createFireworks() {


    for (let i = 0; i < 50; i++) {


        setTimeout(() => {


            const fire = document.createElement("div");


            fire.style.position = "fixed";


            fire.style.left = Math.random() * 100 + "vw";


            fire.style.top = Math.random() * 70 + "vh";


            fire.style.width = "12px";


            fire.style.height = "12px";


            fire.style.borderRadius = "50%";


            fire.style.background =

                `hsl(${Math.random() * 360},100%,60%)`;


            fire.style.boxShadow =

                "0 0 25px white";


            fire.style.zIndex = "99999";


            document.body.appendChild(fire);



            fire.animate([


                {

                    transform: "scale(.2)",

                    opacity: 1

                },


                {

                    transform: "scale(8)",

                    opacity: 0

                }



            ], {


                duration: 1000,

                easing: "ease-out"


            });



            setTimeout(() => {


                fire.remove();


            }, 1000);



        }, i * 80);



    }



}



/* ==========================
Password Enter Key
========================== */


passwordInput.addEventListener("keypress", (e) => {


    if (e.key === "Enter") {


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
