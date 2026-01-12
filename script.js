function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

function revealSecret() {
  document.getElementById("hiddenMsg").style.display = "block";
}

// 🎆 Confetti
setInterval(() => {
  confetti({ particleCount: 80, spread: 70 });
}, 3000);

// ⏳ Countdown (CHANGE DATE)
const birthday = new Date("2026-01-15T00:00:00").getTime();

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
