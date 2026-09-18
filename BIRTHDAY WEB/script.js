/* ============================================
   🎂 BIRTHDAY WEBSITE - JAVASCRIPT
   ============================================ */

// ===== DOM Elements =====
const welcomeScreen = document.getElementById('welcome-screen');
const giftScreen = document.getElementById('gift-screen');
const letterScreen = document.getElementById('letter-screen');
const galleryScreen = document.getElementById('gallery-screen');
const finaleScreen = document.getElementById('finale-screen');

const enterBtn = document.getElementById('enter-btn');
const continueBtn = document.getElementById('continue-btn');
const galleryBtn = document.getElementById('gallery-btn');
const finaleBtn = document.getElementById('finale-btn');

const loveReplayBtn = document.getElementById('love-replay-btn');
const loveBtn = document.getElementById('love-btn');

const giftBox = document.getElementById('gift-box');
const giftLid = document.getElementById('gift-lid');
const giftMessage = document.getElementById('gift-message');

const envelope = document.getElementById('envelope');
const letterPaper = document.getElementById('letter-paper');

const musicBtn = document.getElementById('music-btn');
const musicIcon = document.getElementById('music-icon');
const bgMusic = document.getElementById('bg-music');

const floatingEmojis = document.getElementById('floating-emojis');
const confettiContainer = document.getElementById('confetti-container');
const finaleConfetti = document.getElementById('finale-confetti');
const fireworksContainer = document.getElementById('fireworks');
const finaleHearts = document.getElementById('finale-hearts');

const memoryScreen = document.getElementById('memory-screen');
const memoryAlbumTitle = document.getElementById('memory-album-title');
const memoryAlbumSubtitle = document.getElementById('memory-album-subtitle');
const memoryGrid = document.getElementById('memory-grid');
const backToGalleryBtn = document.getElementById('back-to-gallery');

// ===== State =====
let musicPlaying = false;
let currentScreen = 'welcome';

// ===== MEMORY ALBUM DATA =====

const memoryAlbums = {

    1: {
        title: "Valentine's Day ❤️",
        subtitle: "A special day with you 💕",
        photos: [
            "album/album1/pic1.jpg",
            "album/album1/pic2.jpg",
            "album/album1/pic3.jpg",
            "album/album1/pic4.jpg"
        ]
    },

    2: {
        title: "Best Photograph! 💕",
        subtitle: "Days worth remembering!",
        photos: [
            "album/album2/pic1.jpg",
            "album/album2/pic2.jpg",
            "album/album2/pic3.jpg",
            "album/album2/pic4.jpg"
        ]
    },

    3: {
        title: "So Pretty Ai! 💖",
        subtitle: "One of my favorite pictures of you",
        photos: [
            "album/album3/photo1.jpg",
            "album/album3/photo2.jpg",
            "album/album3/photo3.jpg",
            "album/album3/photo4.jpg"
        ]
    },

    4: {
        title: "Q-Park Together 💕",
        subtitle: "It was your first time right here.",
        photos: [
            "album/album4/pic1.jpg",
            "album/album4/pic2.jpg",
            "album/album4/pic3.jpg",
            "album/album4/pic4.jpg"
        ]
    },

    5: {
        title: "Engineering Night 2025 💖",
        subtitle: "A night worth remembering",
        photos: [
            "album/album5/photo1.jpg",
            "album/album5/photo2.jpg",
            "album/album5/photo3.jpg",
            "album/album5/photo4.jpg"
        ]
    },

    6: {
        title: "First Official Date 💕",
        subtitle: "Where our special memories began",
        photos: [
            "album/album6/photo1.jpg",
            "album/album6/photo2.jpg",
            "album/album6/photo3.jpg",
            "album/album6/photo4.jpg"
        ]
    }

};

// ===== OPEN MEMORY ALBUM =====

function openMemoryAlbum(albumNumber) {

    const album = memoryAlbums[albumNumber];

    if (!album) return;

    memoryAlbumTitle.textContent = album.title;
    memoryAlbumSubtitle.textContent = album.subtitle;

    memoryGrid.innerHTML = '';

    album.photos.forEach((photo, index) => {

        const item = document.createElement('div');

        item.classList.add('memory-photo');

        item.style.animationDelay = `${index * 0.1}s`;

        item.innerHTML = `
            <div class="memory-photo-card">
                <img src="${photo}" alt="${album.title} photo ${index + 1}">
            </div>
        `;

        memoryGrid.appendChild(item);

    });

    switchScreen('gallery', 'memory');
}

// ===== Screen Navigation =====
function switchScreen(from, to) {
    const fromEl = document.getElementById(`${from}-screen`);
    const toEl = document.getElementById(`${to}-screen`);

    fromEl.classList.remove('active');

    setTimeout(() => {
        toEl.classList.add('active');
        currentScreen = to;

        // Trigger screen-specific effects
        if (to === 'finale') {
            startFinaleEffects();
        }
    }, 400);
}

// ===== Floating Emojis (Welcome Screen) =====
const emojiList = ['🎈', '🎉', '🎊', '🎀', '⭐', '💫', '🌟', '✨', '💖', '🎂', '🧁', '🍰'];

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('float-emoji');
    emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (4 + Math.random() * 6) + 's';
    emoji.style.fontSize = (1.2 + Math.random() * 1.5) + 'rem';
    floatingEmojis.appendChild(emoji);

    setTimeout(() => emoji.remove(), 10000);
}

// Start floating emojis
setInterval(createFloatingEmoji, 600);

// ===== Confetti Effect =====
function createConfetti(container, count = 80) {
    const colors = ['#ff6b9d', '#c44dff', '#ffd700', '#6e8efb', '#ff4757', '#2ed573', '#ff6348', '#1e90ff'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';

        // Random shapes
        const shape = Math.random();
        if (shape < 0.33) {
            confetti.style.borderRadius = '50%';
        } else if (shape < 0.66) {
            confetti.style.width = '8px';
            confetti.style.height = '16px';
        } else {
            confetti.style.width = '12px';
            confetti.style.height = '6px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }

        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}

// ===== Fireworks Effect =====
function createFirework() {
    const colors = ['#ff6b9d', '#c44dff', '#ffd700', '#6e8efb', '#ff4757', '#2ed573', '#00d2d3'];
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = (10 + Math.random() * 80) + '%';
    firework.style.top = (10 + Math.random() * 60) + '%';
    firework.style.color = colors[Math.floor(Math.random() * colors.length)];
    fireworksContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 1200);
}

// ===== Floating Hearts (Finale) =====
function createFloatingHeart() {
    const hearts = ['💖', '💕', '💗', '💝', '❤️', '💜', '🧡', '💛'];
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    finaleHearts.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

// ===== Finale Effects =====
let fireworkInterval;
let heartInterval;
let finaleConfettiInterval;

function startFinaleEffects() {
    // Fireworks
    fireworkInterval = setInterval(createFirework, 300);
    setTimeout(() => {
        clearInterval(fireworkInterval);
        fireworkInterval = setInterval(createFirework, 800);
    }, 3000);

    // Hearts
    heartInterval = setInterval(createFloatingHeart, 500);

    // Confetti bursts
    createConfetti(finaleConfetti, 100);
    finaleConfettiInterval = setTimeout(() => createConfetti(finaleConfetti, 50), 3000);
}

function stopFinaleEffects() {
    clearInterval(fireworkInterval);
    clearInterval(heartInterval);
    clearTimeout(finaleConfettiInterval);
}

// ===== Music Control =====
musicBtn.addEventListener('click', () => {
    if (bgMusic.src || bgMusic.querySelector('source')) {
        if (musicPlaying) {
            bgMusic.pause();
            musicIcon.textContent = '🔇';
            musicBtn.classList.remove('playing');
        } else {
            bgMusic.play().catch(() => {});
            musicIcon.textContent = '🎵';
            musicBtn.classList.add('playing');
        }
        musicPlaying = !musicPlaying;
    }
});

// ===== Event Listeners =====

// Welcome → Gift
enterBtn.addEventListener('click', () => {
    switchScreen('welcome', 'gift');

    // Try to play music
    if (bgMusic.src || bgMusic.querySelector('source')) {
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicIcon.textContent = '🎵';
            musicBtn.classList.add('playing');
        }).catch(() => {});
    }
});

// Gift box click → reveal surprise
giftBox.addEventListener('click', () => {
    if (giftMessage.classList.contains('hidden')) {
        giftLid.classList.add('open');

        setTimeout(() => {
            giftMessage.classList.remove('hidden');
            createConfetti(confettiContainer, 100);
        }, 600);
    }
});

// Gift → Letter
continueBtn.addEventListener('click', () => {
    switchScreen('gift', 'letter');
});

// Envelope click → reveal letter
envelope.addEventListener('click', () => {
    envelope.classList.add('opened');

    setTimeout(() => {
        envelope.classList.add('hidden');
        letterPaper.classList.remove('hidden');
    }, 600);
});

// Letter → Gallery
galleryBtn.addEventListener('click', () => {
    switchScreen('letter', 'gallery');
});

// ===== MEMORY ALBUM → GALLERY =====
backToGalleryBtn.addEventListener('click', () => {
    switchScreen('memory', 'gallery');
});

// Gallery → Finale
finaleBtn.addEventListener('click', () => {
    switchScreen('gallery', 'finale');
});

// Finale → Love Heart
loveBtn.addEventListener('click', () => {

    stopFinaleEffects();

    switchScreen('finale', 'love');

    setTimeout(() => {
        window.startLoveAnimation();
    }, 500);

});

// Love Heart → Replay
loveReplayBtn.addEventListener('click', () => {

    window.stopLoveAnimation();

    switchScreen('love', 'welcome');

    // Reset gift
    giftLid.classList.remove('open');
    giftMessage.classList.add('hidden');

    // Reset envelope and letter
    envelope.classList.remove('opened', 'hidden');
    letterPaper.classList.add('hidden');

    // Clear effects
    confettiContainer.innerHTML = '';
    finaleConfetti.innerHTML = '';
    fireworksContainer.innerHTML = '';
    finaleHearts.innerHTML = '';
});

// ===== Cursor sparkle trail =====
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.85) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            font-size: ${0.5 + Math.random() * 0.8}rem;
            z-index: 9999;
            animation: sparkleTrail 0.8s ease forwards;
        `;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
});

// Add sparkle trail animation dynamically
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleTrail {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) scale(0);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ===== Keyboard shortcut (press 'M' for music) =====
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
        musicBtn.click();
    }
});

// ===== Console greeting =====
console.log('%c🎂 Happy Birthday! 🎂', 'font-size: 24px; color: #c44dff; font-weight: bold;');
console.log('%cThis website was made with ❤️', 'font-size: 14px; color: #ff6b9d;');

/* ============================================
   ❤️ PYTHON HEART ANIMATION
   Converted from Pygame to JavaScript Canvas
   ============================================ */

const loveScreen = document.getElementById('love-screen');
const loveCanvas = document.getElementById('love-canvas');

if (loveScreen && loveCanvas) {

    const loveCtx = loveCanvas.getContext('2d');

    const LOVE_WORDS = [
        'i love you',
        'I LOVE YOU',
        'love you'
    ];

    const LOVE_COLORS = [
        [255, 70, 35],
        [255, 130, 45],
        [255, 45, 45],
        [255, 190, 90],
        [255, 90, 65]
    ];

    const LOVE_OUTLINE_COUNT = 160;
    const LOVE_FILL_COUNT = 130;

    let loveParticles = [];

    let loveFrame = 0;

    let loveScale = 24;

    let loveFillStartFrame = 0;

    let loveCenterStartFrame = 0;

    let loveRunning = false;

    let loveAnimationStarted = false;

    const loveTitle =
        loveScreen.querySelector('.love-title');


    /* ========================================
       RESIZE CANVAS
       ======================================== */

    function resizeLoveCanvas() {

    const animationArea =
        loveCanvas.parentElement;

    const rect =
        animationArea.getBoundingClientRect();

    const dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );

    loveCanvas.width =
        rect.width * dpr;

    loveCanvas.height =
        rect.height * dpr;

    loveCanvas.style.width =
        rect.width + 'px';

    loveCanvas.style.height =
        rect.height + 'px';

    loveCtx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

    loveCanvas._cssWidth =
        rect.width;

    loveCanvas._cssHeight =
        rect.height;

    loveScale =
        Math.min(
            rect.width / 60,
            rect.height / 30
        );
}

    /* ========================================
       HEART EQUATION
       SAME AS YOUR PYTHON CODE
       ======================================== */

    function heartXY(t) {

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );

        const y =
            13 *
            Math.cos(t)

            - 5 *
            Math.cos(
                2 * t
            )

            - 2 *
            Math.cos(
                3 * t
            )

            - Math.cos(
                4 * t
            );

        return {
            x: x,
            y: -y
        };
    }


    /* ========================================
       SCREEN COORDINATES
       ======================================== */

    function toScreen(x, y) {

    return {

        x:
            x *
            loveScale +
            loveCanvas._cssWidth / 2,

        y:
            y *
            loveScale +
            loveCanvas._cssHeight / 2 +
            20
    };
}


    /* ========================================
       PARTICLE CLASS
       ======================================== */

    class LoveParticle {

        constructor(
            x,
            y,
            order,
            kind
        ) {

            this.x = x;

            this.y = y;

            this.order =
                order;

            this.kind =
                kind;

            this.word =
                LOVE_WORDS[
                    Math.floor(
                        Math.random() *
                        LOVE_WORDS.length
                    )
                ];

            this.color =
                LOVE_COLORS[
                    Math.floor(
                        Math.random() *
                        LOVE_COLORS.length
                    )
                ];

            this.alpha = 0;

            this.flicker =
                Math.random() *
                Math.PI *
                2;

            this.delay = 0;

            this.sizeMult =
                0.85 +
                Math.random() *
                0.30;

        }
    }


    /* ========================================
       BUILD HEART OUTLINE
       ======================================== */

    function buildOutlineParticles() {

        const particles = [];

        const placed = [];

        const minGap = 34;

        for (
            let i = 0;
            i < LOVE_OUTLINE_COUNT;
            i++
        ) {

            const t =
                (
                    i /
                    LOVE_OUTLINE_COUNT
                ) *
                Math.PI *
                2;

            const heart =
                heartXY(t);

            const point =
                toScreen(
                    heart.x,
                    heart.y
                );

            let tooClose =
                false;

            for (
                const p
                of placed
            ) {

                if (
                    Math.hypot(
                        point.x - p.x,
                        point.y - p.y
                    ) < minGap
                ) {

                    tooClose = true;

                    break;
                }
            }

            if (tooClose)
                continue;

            placed.push(point);

            particles.push(
                new LoveParticle(
                    point.x,
                    point.y,
                    i,
                    'outline'
                )
            );
        }

        return particles;
    }


    /* ========================================
       BUILD HEART FILL
       ======================================== */

    function buildFillParticles() {

        const particles = [];

        const placed = [];

        let attempts = 0;

        const maxAttempts =
            LOVE_FILL_COUNT * 80;

        const minGap = 46;

        while (
            particles.length <
            LOVE_FILL_COUNT &&

            attempts <
            maxAttempts
        ) {

            attempts++;

            const t =
                Math.random() *
                Math.PI *
                2;

            const r =
                Math.random() *
                0.86;

            const heart =
                heartXY(t);

            const point =
                toScreen(
                    heart.x * r,
                    heart.y * r
                );

            let tooClose =
                false;

            for (
                const p
                of placed
            ) {

                if (
                    Math.hypot(
                        point.x - p.x,
                        point.y - p.y
                    ) < minGap
                ) {

                    tooClose = true;

                    break;
                }
            }

            if (tooClose)
                continue;

            placed.push(point);

            particles.push(
                new LoveParticle(
                    point.x,
                    point.y,
                    particles.length,
                    'fill'
                )
            );
        }

        return particles;
    }


    /* ========================================
       CREATE ALL PARTICLES
       ======================================== */

    function buildLoveHeart() {

        const outline =
            buildOutlineParticles();

        const fill =
            buildFillParticles();

        const outlineSpan =
            outline.length
                ? Math.max(
                    ...outline.map(
                        p => p.order
                    )
                )
                : 0;

        const framePerStep =
            1.6;


        /* Outline timing */

        outline.forEach(
            p => {

                p.delay =
                    Math.floor(
                        p.order *
                        framePerStep
                    );

            }
        );


        /* Fill timing */

        loveFillStartFrame =
            Math.floor(
                outlineSpan *
                framePerStep
            ) + 30;

        fill.forEach(
            p => {

                p.delay =
                    loveFillStartFrame +
                    p.order;

            }
        );


        loveParticles =
            outline.concat(fill);


        loveCenterStartFrame =
            loveFillStartFrame +
            200;
    }


    /* ========================================
       DRAW GLOWING TEXT
       ======================================== */

    function drawLoveParticle(p) {

        if (p.alpha <= 0)
            return;

        const rgb =
            `${p.color[0]}, ${p.color[1]}, ${p.color[2]}`;

        const fontSize =
            (
                p.kind === 'outline'
                    ? 20
                    : 17
            ) *
            p.sizeMult;

        loveCtx.save();


        /* Large glow */

        loveCtx.font =
            `bold ${fontSize}px Arial`;

        loveCtx.textAlign =
            'center';

        loveCtx.textBaseline =
            'middle';

        loveCtx.shadowColor =
            `rgb(${rgb})`;

        loveCtx.shadowBlur =
            20;

        loveCtx.globalAlpha =
            (
                p.alpha /
                255
            ) *
            0.15;

        loveCtx.fillStyle =
            `rgb(${rgb})`;

        loveCtx.fillText(
            p.word,
            p.x,
            p.y
        );


        /* Small glow */

        loveCtx.shadowBlur =
            9;

        loveCtx.globalAlpha =
            (
                p.alpha /
                255
            ) *
            0.35;

        loveCtx.fillText(
            p.word,
            p.x,
            p.y
        );


        /* Main text */

        loveCtx.shadowBlur =
            4;

        loveCtx.globalAlpha =
            p.alpha /
            255;

        loveCtx.fillText(
            p.word,
            p.x,
            p.y
        );

        loveCtx.restore();
    }


    /* ========================================
       DRAW FRAME
       ======================================== */

    function drawLoveFrame() {

        loveCtx.clearRect(
            0,
            0,
            loveCanvas._cssWidth,
            loveCanvas._cssHeight
        );


        /* Draw particles */

        loveParticles.forEach(
            p => {

                if (
                    loveFrame >
                    p.delay
                ) {

                    if (
                        p.alpha <
                        255
                    ) {

                        p.alpha =
                            Math.min(
                                255,

                                p.alpha +
                                14 +
                                Math.floor(
                                    Math.random() *
                                    5
                                )
                            );
                    }
                }


                let flicker =
                    1;

                if (
                    p.alpha >=
                    255
                ) {

                    flicker =
                        0.75 +
                        0.25 *
                        Math.sin(
                            loveFrame *
                            0.4 +
                            p.flicker
                        );
                }


                const originalAlpha =
                    p.alpha;

                p.alpha =
                    originalAlpha *
                    flicker;

                drawLoveParticle(p);

                p.alpha =
                    originalAlpha;
            }
        );


        /* ====================================
           CENTER TEXT
        ==================================== */

        if (
            loveFrame >
            loveCenterStartFrame
        ) {

            const progress =
                Math.min(
                    1,

                    (
                        loveFrame -
                        loveCenterStartFrame
                    ) / 60
                );


            const alpha =
                1 -
                Math.exp(
                    -progress * 8
                );


            const pulse =
                1 +
                0.05 *
                Math.sin(
                    loveFrame *
                    0.5
                );


            loveTitle.style.opacity =
                alpha;

            const heartCenterOffset =
                loveScale * 2.54 - 5;

            loveTitle.style.top =
                `calc(50% + ${heartCenterOffset}px)`;

            loveTitle.style.transform =
                `translate(-50%, -50%) scale(${pulse})`;

            }
        }


    /* ========================================
       ANIMATION LOOP
       ======================================== */

    function loveAnimationLoop() {

        if (!loveRunning)
            return;

        loveFrame++;

        drawLoveFrame();

        requestAnimationFrame(
            loveAnimationLoop
        );
    }


    /* ========================================
       START LOVE ANIMATION
       ======================================== */

    function startLoveAnimation() {

        if (
            loveAnimationStarted
        )
            return;

        loveAnimationStarted =
            true;

        loveRunning =
            true;

        loveFrame =
            0;

        loveTitle.style.opacity =
            '0';

        const heartCenterOffset =
            loveScale * 2.54 - 5;

        loveTitle.style.top =
            `calc(50% + ${heartCenterOffset}px)`;

        loveTitle.style.transform =
            'translate(-50%, -50%) scale(1)';

        resizeLoveCanvas();

        buildLoveHeart();

        requestAnimationFrame(
            loveAnimationLoop
        );
    }


   /* ========================================
   STOP LOVE ANIMATION
   ======================================== */

function stopLoveAnimation() {

    loveRunning = false;

    loveAnimationStarted = false;

    loveFrame = 0;

    loveTitle.style.opacity = '0';

    loveTitle.style.transform = 'scale(1)';

    loveCtx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );
}


    /* ========================================
       RESIZE
       ======================================== */

    window.addEventListener(
        'resize',
        () => {

            if (
                loveScreen.classList
                    .contains('active')
            ) {

                resizeLoveCanvas();

                buildLoveHeart();

            }

        }
    );


    /* ========================================
       MAKE LOVE SCREEN AVAILABLE
       ======================================== */

    window.startLoveAnimation =
        startLoveAnimation;

    window.stopLoveAnimation =
        stopLoveAnimation;
}