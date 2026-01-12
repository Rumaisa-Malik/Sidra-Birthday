function showSurprise() {
  document.getElementById("surprise").style.display = "block";

  // play music on click
  const audio = document.querySelector("audio");
  audio.play().catch(err => console.log("Music autoplay blocked:", err));
}

function revealSecret() {
  document.getElementById("hiddenMsg").style.display = "block";
}

// 🎆 Confetti
setInterval(() => {
  confetti({ particleCount: 80, spread: 70 });
}, 3000);

// ⏳ Countdown to today 23:59:59
const now = new Date();
const birthday = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  23, 59, 59
).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "🎉 HAPPY BIRTHDAY SIDRA 🎂💖";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${d}d ${h}h ${m}m ${s}s 💗`;
}, 1000);
