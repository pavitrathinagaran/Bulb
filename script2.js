/* =====================================================
   RAJ.EXE
   Main Website JavaScript
===================================================== */


/* =====================================================
   PARTICLES
===================================================== */

const particlesContainer = document.getElementById("particles");

if (particlesContainer) {
    for (let i = 0; i < 45; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (6 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.opacity =
            Math.random();

        particlesContainer.appendChild(particle);
    }
}


/* =====================================================
   SCREEN NAVIGATION
===================================================== */

function showScreen(screenId) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const target =
        document.getElementById(screenId);

    if (!target) {
        console.error("Screen not found:", screenId);
        return;
    }

    target.classList.add("active");

    target.scrollTop = 0;

    if (screenId === "dashboard") {
        animateStats();
    }
}


/* =====================================================
   PERSONALITY BARS
===================================================== */

function animateStats() {

    const bars =
        document.querySelectorAll(".progress-fill");

    bars.forEach((bar, index) => {

        bar.style.width = "0%";

        setTimeout(() => {

            bar.style.width =
                bar.dataset.width;

        }, 100 + index * 100);

    });
}


/* =====================================================
   MODALS
===================================================== */

const modal =
    document.getElementById("modal");

const modalIcon =
    document.getElementById("modalIcon");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");


function openModal(type) {

    if (!modal) return;

    modal.classList.add("show");


    /* =========================
       COMPLIMENT
    ========================= */

    if (type === "compliment") {

        modalIcon.textContent = "💙";

        modalLabel.textContent =
            "A LITTLE COMPLIMENT";

        modalTitle.textContent =
            "For You";

        modalContent.textContent = `
You're genuinely one of the nicest people I've met.

And yes, I love you. A lot. Probably more than I know how to explain sometimes.

So here's your compliment:

You're pretty damn special to me. Athukunu apediye rombe bangga va la irukathe avlo scene ille onaku🙄🩵
`;

    }


    /* =========================
       ANNOY
    ========================= */

    else if (type === "annoy") {

        modalIcon.textContent = "😈";

        modalLabel.textContent =
            "I HAVE A COMPLAINT";

        modalTitle.textContent =
            "You're Actually So Annoying";

        modalContent.textContent = `
You have officially been reported for being annoying.

Current annoyance level:

████████░ 90%

Reasons include:

• Eppo pathalo chance kadecha enna vechi comedy pannuve
• Making me laugh when I'm trying to stay mad
• Existing peacefully while I complain about you 😒

BUT...

I still like you. Don't be soo happy since i will give u punishment when we meet hehe.
`;

    }


    /* =========================
       TELL
    ========================= */

    else if (type === "tell") {

        modalIcon.textContent = "💌";

        modalLabel.textContent =
            "SOMETHING I WANT TO SAY";

        modalTitle.textContent =
            "Just So You Know";

        modalContent.textContent = `
There's actually a lot I could say but I'll save some of it for the day we meet. You think only u can do like that is it 😏.

For now, just know that I'm glad you're here. 🩵

And yes, this website is proof that I was bored enough to spend my time making something for you. 😂
`;

    }


    /* =========================
       SECRET
    ========================= */

    else if (type === "secret") {

        modalIcon.textContent = "🔐";

        modalLabel.textContent =
            "OKAY... ONE SECRET";

        modalTitle.textContent =
            "psss...";

        modalContent.innerHTML = `

            <div class="secret-note">

                <p>
                    I hate you.
                </p>

                <p>
                    I hate you for making me care about you this much.
                </p>

                <p>
                    I hate you for becoming someone I look for in my notifications.
                </p>

                <p>
                    I hate you for making me smile at my phone like an idiot.
                </p>

                <p>
                    I hate you for somehow becoming such a big part of my thoughts
                    without even asking permission.
                </p>

                <p>
                    And honestly...
                </p>

                <p class="secret-bold">
                    I hate that I love you this much😒🩵.
                </p>

                <p>
                    Because now you're stuck with someone who overthinks everything,
                    gets annoyed at you, misses you five minutes later,
                    and still somehow chooses you at the end of the day. 😂
                </p>

                <p class="secret-bold">
                    Unfortunately, there's no getting rid of me now. 🩵
                </p>

            </div>

        `;
    }
}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    if (!modal) return;

    modal.classList.remove("show");
}


/* =====================================================
   MUSIC PLAYER
===================================================== */

const songs = [

    {
        title: "Malai Mangum Neram",

        artist: "Ranina Reddy",

        file: "music/song1.mp3",

        note: `
This song was already special to me long before you came into my life and i always wanted to tell this to my future partner.

I used to listen to it and imagine what it would feel like to have someone beside me, and what those little moments with that person might look like.

And now it's kind of funny listening to it after meeting you...

I don't know if that's what I expected when I first listened to this song, but now whenever I hear it, I can't help but think of you🩵
`
    },


    {
        title: "Kannaane Kanne",

        artist: "Sean Roldan",

        file: "music/song2.mp3",

        note: `
This is my second fav song as well. There are certain lines in this song that make me think about you and everything we've had between us.

It's that feeling of wanting to hold someone's hand tightly enough that they never have to question where you stand.

Wanting to wake up beside them, stay through the difficult days as well as the easy ones, and not just pass through their life for a moment.

I don't want to be someone who simply comes and goes.

I want to be someone who walks beside you through whatever life decides to throw at us.

And maybe that's why these words hit differently when I think about you.

I'm here. I'm not just passing through. 🩵
`
    },


    {
        title: "Govindha Govindha",

        artist: "Vijay Prakash & Ranina Reddy",

        file: "music/song3.mp3",

        note: `
Okay, this one is VERY different. 😂

Basically...

Enaku un mela nambikke iruku ana u know somewhere nee enne vitutu poiruviyonu thought iruku.

And yet, look at me.

I still went and fell in love with you.

You annoy the absolute life out of me.

Sometimes I genuinely wonder why I haven't thrown you into the nearest recycling bin♻️.

But somehow, every time I think I've had enough of you, my heart goes:

"Nope. We're keeping him."

So I guess that's my life now.

You're annoying.

I'm annoyed.

My heart refuses to cooperate.

And apparently I'm officially stuck with you. 😭

`
    }

];


let currentSongIndex = 0;


const audio =
    document.getElementById("audioPlayer");

const vinyl =
    document.getElementById("vinyl");

const playButton =
    document.getElementById("playButton");

const progress =
    document.getElementById("musicProgress");

const currentTimeDisplay =
    document.getElementById("currentTime");

const durationDisplay =
    document.getElementById("duration");


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong(index) {

    if (!audio) return;

    currentSongIndex = index;

    const song = songs[index];


    document.getElementById("songNumber").textContent =
        `SONG ${String(index + 1).padStart(2, "0")}`;


    document.getElementById("songTitle").textContent =
        song.title;


    document.getElementById("songArtist").textContent =
        song.artist;


    document.getElementById("songNote").textContent =
        song.note;


    audio.src = song.file;

    audio.load();


    document
        .querySelectorAll(".song-choice")
        .forEach((button, i) => {

            button.classList.toggle(
                "active",
                i === index
            );

        });


    if (progress) {
        progress.value = 0;
    }


    if (currentTimeDisplay) {
        currentTimeDisplay.textContent = "0:00";
    }


    if (durationDisplay) {
        durationDisplay.textContent = "0:00";
    }


    if (playButton) {
        playButton.textContent = "▶";
    }


    if (vinyl) {
        vinyl.classList.remove("playing");
    }
}


/* =====================================================
   SELECT SONG
===================================================== */

function selectSong(index) {

    if (!audio) return;

    const wasPlaying =
        !audio.paused;

    loadSong(index);


    if (wasPlaying) {

        audio.play()
            .then(() => {

                if (vinyl) {
                    vinyl.classList.add("playing");
                }

                if (playButton) {
                    playButton.textContent = "❚❚";
                }

            })
            .catch(error => {

                console.error(
                    "Music failed:",
                    error
                );

            });
    }
}


/* =====================================================
   PLAY / PAUSE
===================================================== */

function toggleMusic() {

    if (!audio) return;


    if (!audio.src) {
        loadSong(0);
    }


    if (audio.paused) {

        audio.play()

            .then(() => {

                if (vinyl) {
                    vinyl.classList.add("playing");
                }

                if (playButton) {
                    playButton.textContent = "❚❚";
                }

            })

            .catch(error => {

                console.error(
                    "Music failed:",
                    error
                );

                alert(
                    "Unable to play this song. Please check your music file."
                );

            });

    }

    else {

        audio.pause();

        if (vinyl) {
            vinyl.classList.remove("playing");
        }

        if (playButton) {
            playButton.textContent = "▶";
        }
    }
}


/* =====================================================
   NEXT SONG
===================================================== */

function nextSong() {

    if (!audio) return;

    currentSongIndex++;


    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }


    loadSong(currentSongIndex);


    audio.play()

        .then(() => {

            if (vinyl) {
                vinyl.classList.add("playing");
            }

            if (playButton) {
                playButton.textContent = "❚❚";
            }

        })

        .catch(error => {

            console.error(
                "Music failed:",
                error
            );

        });
}


/* =====================================================
   PREVIOUS SONG
===================================================== */

function previousSong() {

    if (!audio) return;

    currentSongIndex--;


    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }


    loadSong(currentSongIndex);


    audio.play()

        .then(() => {

            if (vinyl) {
                vinyl.classList.add("playing");
            }

            if (playButton) {
                playButton.textContent = "❚❚";
            }

        })

        .catch(error => {

            console.error(
                "Music failed:",
                error
            );

        });
}


/* =====================================================
   AUDIO PROGRESS
===================================================== */

if (audio) {

    audio.addEventListener(
        "loadedmetadata",
        () => {

            if (!isNaN(audio.duration)) {

                if (durationDisplay) {

                    durationDisplay.textContent =
                        formatTime(audio.duration);

                }
            }
        }
    );


    audio.addEventListener(
        "timeupdate",
        () => {

            if (!isNaN(audio.duration)) {

                const percent =
                    (audio.currentTime / audio.duration) * 100;


                if (progress) {
                    progress.value = percent;
                }


                if (currentTimeDisplay) {

                    currentTimeDisplay.textContent =
                        formatTime(audio.currentTime);

                }
            }
        }
    );


    /* =================================================
       AUDIO PLAY
    ================================================= */

    audio.addEventListener(
        "play",
        () => {

            if (vinyl) {
                vinyl.classList.add("playing");
            }

            if (playButton) {
                playButton.textContent = "❚❚";
            }
        }
    );


    /* =================================================
       AUDIO PAUSE
    ================================================= */

    audio.addEventListener(
        "pause",
        () => {

            if (vinyl) {
                vinyl.classList.remove("playing");
            }

            if (playButton) {
                playButton.textContent = "▶";
            }
        }
    );


    /* =================================================
       SONG ENDED
    ================================================= */

    /*
       IMPORTANT:

       When a song finishes,
       it DOES NOT automatically
       go to the next song.

       Raj must press NEXT himself.
    */

    audio.addEventListener(
        "ended",
        () => {

            if (vinyl) {
                vinyl.classList.remove("playing");
            }

            if (playButton) {
                playButton.textContent = "▶";
            }

            if (progress) {
                progress.value = 100;
            }
        }
    );
}


/* =====================================================
   SEEK
===================================================== */

if (progress && audio) {

    progress.addEventListener(
        "input",
        () => {

            if (!isNaN(audio.duration)) {

                audio.currentTime =
                    (progress.value / 100) *
                    audio.duration;
            }
        }
    );
}


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(seconds) {

    if (isNaN(seconds)) {
        return "0:00";
    }


    const minutes =
        Math.floor(seconds / 60);


    const remainingSeconds =
        Math.floor(seconds % 60);


    return `${minutes}:${String(
        remainingSeconds
    ).padStart(2, "0")}`;
}


/* =====================================================
   OPEN WHEN LETTERS
===================================================== */

const letters = {

    /* =========================
       MISS ME
    ========================= */

    miss: {

        title:
            "You Miss Me 🩵",

        content: `
Okay... so first of all, I know you miss me too. 😌

And second, don't worry.

Even if I'm not right beside you at this exact moment, there are probably a million little things around you that can remind you of me. If u see tyre also u can remember me what AHAHA.

I miss you too bulb. 🩵
`
    },


    /* =========================
       BAD DAY
    ========================= */

    bad: {

        title:
            "You're Having A Bad Day 🌧️",

        content: `
Hey Bulb eh.

I know today might not be your best day. And that's okay. You don't have to have everything figured out all the time.

Take a little break.
Breathe.
Drink some water.
Give yourself some time and most importantly don't get angry.

Whatever is bothering you right now won't always feel this heavy.

And just in case nobody told you today:

I'm proud of you. Now come here.🩵 I'm here for you.
And please don't let one bad day convince you that you're doing badly at life.
`
    },


    /* =========================
       BORED
    ========================= */

    bored: {

        title:
            "You're Bored 😂",

        content: `
Congratulations.

You are officially bored enough to open this.

So here's your solution:

Option 1:
Think about me.

Option 2:
Text me.

Option 3:
Call me.

Sooo if you are bored I'm the only option u have HAHAHA
`
    },



    /* =========================
       SECRET
    ========================= */

    secretLetter: {

        title:
            "Something I Don't Normally Say 🔐",

        content: `
There are probably a lot of things I don't say out loud.

Sometimes I don't know how to put them into words and sometimes I just keep things to myself.

But if there's one thing I hope you know...

it's that you matter to me. More than I probably show sometimes.

And I'm really grateful that somewhere along the way, you became someone I could make silly little websites for.

So yeah...that's something I don't normally say. 🩵
`
    }
};


/* =====================================================
   OPEN LETTER
===================================================== */

function openLetter(type) {

    const letter =
        letters[type];


    if (!letter) {
        console.error("Letter not found:", type);
        return;
    }


    document.getElementById("letterTitle").textContent =
        letter.title;


    document.getElementById("letterContent").textContent =
        letter.content;


    document.getElementById("letterModal").classList.add("show");
}


/* =====================================================
   CLOSE LETTER
===================================================== */

function closeLetter() {

    const letterModal =
        document.getElementById("letterModal");

    if (letterModal) {
        letterModal.classList.remove("show");
    }
}


/* =====================================================
   CLOSE MODALS OUTSIDE
===================================================== */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeModal();
            }

        }
    );
}


const letterModal =
    document.getElementById("letterModal");


if (letterModal) {

    letterModal.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {
                closeLetter();
            }

        }
    );
}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

            closeLetter();

        }

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

loadSong(0);