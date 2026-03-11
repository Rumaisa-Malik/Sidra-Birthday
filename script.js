// Run after DOM loaded
document.addEventListener("DOMContentLoaded", function() {

  // 💝 Surprise & Secret buttons
  const surpriseBtn = document.getElementById("surpriseBtn");
  const secretBtn = document.getElementById("secretBtn");
  const surprise = document.getElementById("surprise");
  const hiddenMsg = document.getElementById("hiddenMsg");

  surpriseBtn.addEventListener("click", () => surprise.classList.remove("hidden"));
  secretBtn.addEventListener("click", () => hiddenMsg.classList.remove("hidden"));

  // 🎆 Confetti every 3 seconds
  setInterval(() => { confetti({ particleCount: 80, spread: 70 }); }, 3000);

  // ⏳ Countdown to today 23:59:59
  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date();
    const birthday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,59,59
    ).getTime();

    const diff = birthday - now.getTime();

    if(diff <= 0){
      countdownEl.textContent = "🎉 HAPPY BIRTHDAY Linjan 🎂💖";
      return;
    }

    const h = Math.floor((diff/(1000*60*60))%24);
    const m = Math.floor((diff/(1000*60))%60);
    const s = Math.floor((diff/1000)%60);

    countdownEl.textContent = `⏳ ${h}h ${m}m ${s}s 💗`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ✨ Sparkle cursor
  document.addEventListener("mousemove", function(e){
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = e.pageX + "px";
    s.style.top = e.pageY + "px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(), 800);
  });

  // 🎵 Background Music
  const bgMusic = document.getElementById("bgMusic");
  const video = document.querySelector("video");

  let volume = 0;
  bgMusic.volume = 0;
  bgMusic.play().catch(() => {
    // if autoplay blocked, play on first click
    document.body.addEventListener("click", ()=> bgMusic.play(), {once:true});
  });

  // fade-in
  const fadeIn = setInterval(()=>{
    if(volume<0.5){ volume+=0.01; bgMusic.volume=volume; }
    else { clearInterval(fadeIn); bgMusic.muted=false; }
  },100);

  // Pause/resume music with video
  video.addEventListener("play", ()=> bgMusic.pause());
  video.addEventListener("pause", ()=> bgMusic.play());
  video.addEventListener("ended", ()=> bgMusic.play());

});
