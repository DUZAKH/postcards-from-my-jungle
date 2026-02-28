let slideIndex = 1;

const audioFiles = [
  "sound/animal_00.mp3",
  "sound/animal_01.mp3",
  "sound/animal_02.mp3",
  "sound/animal_03.mp3",
];

let currentAudioIndex = -1;
let audioStarted = false;
const audioPlayer = document.getElementById("animalAudio");


// 16 Vürathi phrases + symbols
const vurathiPhrases = [
`∴
Khrru-vaa… thess.
I sense movement in the underbrush.`,

`X
Grum’thal ekk.
Predator nearby.`,

`──
Shaa’li veth-veth.
Stay still. Blend.`,

`~~~
Tikk-tikk-raa.
Small prey passing.`,

`)))
Vareshh noom.
The wind carries scent.`,

`[ ]
Khalu drenn’kai.
Territory boundary.`,

`●
Thraa’kel omm.
Night approaches.`,

`V
Vissh-ka tal.
I am hungry.`,

`∴ ∞
Omm… shaa… verru.
We remain unseen.`,

`X !!!
Drekk shai’lo.
Freeze completely.`,

`~~ ~~
Muu’veth irra.
Follow my movement.`,

`X ...
Grith-okk sha.
Danger has passed.`,

`∴ •
Ruu’thaa… ruu’thaa…
I am here. I am alive.`,

`)))
Va’ruun keth.
Stranger presence.`,

`── °
Orru maa’thal.
Safe for now.`,

`X !!!
Sekkra vi.
Hide deeper.`
];

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Create dots dynamically
function createDots() {
  let slides = document.getElementsByClassName("mySlides");
  let container = document.getElementById("dotsContainer");

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    dot.onclick = function () {
      currentSlide(i + 1);
    };
    container.appendChild(dot);
  }
}

createDots();
showSlides(slideIndex);
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }

  // 🔢 Update counter text dynamically
  let counter = slides[slideIndex - 1].querySelector(".numbertext");
  if (counter) {
    counter.innerText = slideIndex + " / " + slides.length;
  }

  // 🔥 Phrase change every 3 slides
  let phraseIndex = Math.floor((slideIndex - 1) / 3) % vurathiPhrases.length;
  let textField = slides[slideIndex - 1].querySelector(".text");
  if (textField) {
    let phrase = vurathiPhrases[phraseIndex];
textField.innerText = phrase;
textField.setAttribute("data-text", phrase);
  }

  // 🔊 Audio change every 12 slides
  let audioIndex = Math.floor((slideIndex - 1) / 12) % audioFiles.length;

  if (audioIndex !== currentAudioIndex) {
    currentAudioIndex = audioIndex;
    audioPlayer.src = audioFiles[audioIndex];

    if (audioStarted) {
      audioPlayer.play().catch(() => {});
    }
  }
}
// Start audio on first user interaction

document.addEventListener("click", () => {
  if (!audioStarted) {
    audioStarted = true;
    audioPlayer.play().catch(() => {});
  }
}, { once: true });

showSlides(slideIndex);