// 💝 Surprise & Secret Messages
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

function revealSecret() {
  document.getElementById("hiddenMsg").style.display = "block";
}

// 🎆 Confetti every 3 seconds
setInterval(() => {
  confetti({ particleCount: 80, spread: 70 });
}, 3000);

// ⏳ Countdown to today 23:59:59
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const birthday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23, 59, 59
  ).getTime();

  const diff = birthday - now.getTime();

  if (diff <= 0) {
    countdownEl.innerHTML = "🎉 HAPPY BIRTHDAY SIDRA 🎂💖";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s 💗`;
}

// update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ✨ Sparkle cursor
document.addEventListener("mousemove", function(e) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = e.pageX + "px";
  s.style.top = e.pageY + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 800);
});

// 🎵 Background music autoplay with fade-in
const bgMusic = document.getElementById("bgMusic");

window.addEventListener("load", () => {
  let volume = 0;
  bgMusic.volume = 0;
  bgMusic.play().catch(() => {
    // If autoplay blocked, wait for first click
    document.body.addEventListener("click", () => bgMusic.play(), { once: true });
  });

  // fade in gradually
  const fadeIn = setInterval(() => {
    if (volume < 0.5) { // max volume
      volume += 0.01;
      bgMusic.volume = volume;
    } else {
      clearInterval(fadeIn);
      bgMusic.muted = false;
    }
  }, 100);
});

// 🎥 Pause music when video plays
const video = document.querySelector("video");

video.addEventListener("play", () => {
  const fadeOut = setInterval(() => {
    if (bgMusic.volume > 0) {
      bgMusic.volume -= 0.02;
    } else {
      bgMusic.pause();
      clearInterval(fadeOut);
    }
  }, 50);
});

video.addEventListener("pause", () => {
  bgMusic.play();
  // fade in smoothly
  let volume = 0;
  bgMusic.volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 0.5) {
      volume += 0.01;
      bgMusic.volume = volume;
    } else {
      clearInterval(fadeIn);
    }
  }, 100);
});

video.addEventListener("ended", () => {
  bgMusic.play();
  let volume = 0;
  bgMusic.volume = 0;
  const fadeIn = setInterval(() => {
    if (volume < 0.5) {
      volume += 0.01;
      bgMusic.volume = volume;
    } else {
      clearInterval(fadeIn);
    }
  }, 100);
});
