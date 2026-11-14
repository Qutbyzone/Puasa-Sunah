/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Umpan Balik Interaktif & Perayaan Lencana
 */

window.MPI_FEEDBACK = {
  // Tampilkan umpan balik jawaban kuis / aktivitas
  showAnswerFeedback(isCorrect, explanation, onContinue) {
    if (isCorrect) {
      window.MPI_AUDIO.playCorrect();
    } else {
      window.MPI_AUDIO.playWrong();
    }

    const modal = document.getElementById("feedback-modal");
    const titleEl = document.getElementById("feedback-title");
    const textEl = document.getElementById("feedback-text");
    const kakaImg = document.getElementById("feedback-kaka-img");
    const btnEl = document.getElementById("feedback-btn");

    if (modal) {
      modal.className = `feedback-modal active ${isCorrect ? "correct" : "incorrect"}`;
      titleEl.innerHTML = isCorrect ? "🎉 Luar Biasa, Jawabanmu Benar!" : "💡 Mari Kita Cek Kembali!";
      textEl.innerHTML = explanation || (isCorrect ? "Pemahamanmu sangat tepat!" : "Coba perhatikan materi penjelasannya ya.");
      btnEl.innerText = isCorrect ? "Lanjut Petualangan" : "Coba Lagi / Paham";

      btnEl.onclick = () => {
        window.MPI_AUDIO.playClick();
        modal.classList.remove("active");
        if (typeof onContinue === "function") {
          onContinue(isCorrect);
        }
      };
    }
  },

  // Tampilkan perayaan perolehan lencana misi
  showBadgeCelebration(missionId, onClaim) {
    window.MPI_AUDIO.playBadge();

    const mission = window.MPI_DATA.missions.find(m => m.id === parseInt(missionId, 10));
    if (!mission) return;

    const modal = document.getElementById("badge-modal");
    const nameEl = document.getElementById("badge-celebrate-name");
    const imgEl = document.getElementById("badge-celebrate-img");
    const descEl = document.getElementById("badge-celebrate-desc");
    const btnEl = document.getElementById("badge-claim-btn");

    if (modal) {
      nameEl.innerText = mission.badgeName;
      imgEl.src = `assets/badges/${mission.badgeId}`;
      imgEl.alt = mission.badgeName;
      descEl.innerText = `Selamat! Kamu telah menyelesaikan petualangan di ${mission.title} dan memahami materi dengan sangat baik!`;

      modal.classList.add("active");

      btnEl.onclick = () => {
        window.MPI_AUDIO.playClick();
        modal.classList.remove("active");
        if (typeof onClaim === "function") {
          onClaim();
        }
      };
    }
  }
};
