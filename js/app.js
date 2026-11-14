/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Master Controller Aplikasi (app.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Penyimpanan Murid
  const savedState = window.MPI_STORAGE.load();
  if (savedState.userName) {
    const displays = document.querySelectorAll(".display-username");
    displays.forEach(d => d.innerText = savedState.userName);
  }

  window.MPI_AUDIO.init();

  // 2. Navigasi Awal ke Cover
  window.MPI_NAV.init();

  // Pemicu Autoplay Voice Over Cover (vo-01-cover.wav) Langsung & Otomatis
  const autoPlayCover = () => {
    if (window.MPI_NAV.currentScreen !== "SCR-001") return;
    window.MPI_AUDIO.playVoiceOver("SCR-001");
  };

  // Jalankan seketika saat aplikasi dimuat
  autoPlayCover();

  // Polling percobaan pemutaran otomatis setiap 250ms jika peramban sempat menahan stream awal
  let coverAttempts = 0;
  const coverAudioPoller = setInterval(() => {
    coverAttempts++;
    if (window.MPI_NAV.currentScreen !== "SCR-001" || coverAttempts > 20) {
      clearInterval(coverAudioPoller);
      return;
    }
    const va = window.MPI_AUDIO.voiceAudio;
    if (va && va.paused) {
      va.play().then(() => clearInterval(coverAudioPoller)).catch(() => {});
    } else if (va && !va.paused) {
      clearInterval(coverAudioPoller);
    }
  }, 250);

  // Sensor kehadiran pasif (saat jendela mendapatkan fokus atau kursor bergerak di layar)
  const onUserPresence = () => {
    if (window.MPI_NAV.currentScreen === "SCR-001") {
      const va = window.MPI_AUDIO.voiceAudio;
      if (va && va.paused) {
        va.play().catch(() => {});
      }
    }
    window.removeEventListener("mousemove", onUserPresence);
    window.removeEventListener("pointermove", onUserPresence);
    window.removeEventListener("focus", onUserPresence);
    window.removeEventListener("mouseenter", onUserPresence);
  };
  window.addEventListener("mousemove", onUserPresence, { passive: true });
  window.addEventListener("pointermove", onUserPresence, { passive: true });
  window.addEventListener("focus", onUserPresence);
  window.addEventListener("mouseenter", onUserPresence);

  // 3. EVENT LISTENERS: COVER (MULAI PERMAINAN)
  const startBtn = document.getElementById("cover-start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      const coverEl = document.getElementById("cover-voice-player");
      if (coverEl) {
        coverEl.pause();
        coverEl.currentTime = 0;
      }
      window.MPI_AUDIO.stopSpeak();
      window.MPI_AUDIO.startBGM(); // Musik latar mulai aktif saat petualangan dimulai
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-002"); // Ke Halaman Identitas
    });
  }

  // 4. EVENT LISTENERS: IDENTITAS MURID
  const identitasForm = document.getElementById("identitas-form");
  const nameInput = document.getElementById("student-name-input");

  if (identitasForm) {
    identitasForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (nameInput.value || "").trim();
      if (!val) {
        nameInput.focus();
        nameInput.classList.add("shake-wrong");
        setTimeout(() => nameInput.classList.remove("shake-wrong"), 500);
        return;
      }

      window.MPI_STORAGE.setUserName(val);
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-003"); // Ke Cerita Pembuka
    });
  }

  // 5. EVENT LISTENERS: CERITA PEMBUKA
  const storyNextBtn = document.getElementById("story-next-btn");
  const storySkipBtn = document.getElementById("story-skip-btn");

  if (storyNextBtn) {
    storyNextBtn.addEventListener("click", () => {
      window.MPI_NAV.nextStorySlide();
    });
  }

  if (storySkipBtn) {
    storySkipBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-004"); // Langsung ke Peta
    });
  }

  // 6. EVENT LISTENERS: PETA INTERAKTIF (5 PIN MISI + PIN MATERI)
  const mapPins = document.querySelectorAll(".map-pin[data-mission]");
  mapPins.forEach(pin => {
    pin.addEventListener("click", () => {
      const mid = parseInt(pin.getAttribute("data-mission"), 10);
      if (isNaN(mid)) return;

      const isUnlocked = window.MPI_STORAGE.isMissionUnlocked(mid);
      if (!isUnlocked) {
        window.MPI_AUDIO.playWrong();
        alert(`Misi ${mid} masih terkunci. Selesaikan misi sebelumnya terlebih dahulu!`);
        return;
      }

      window.MPI_AUDIO.playClick();
      const screenTarget = `SCR-00${4 + mid}`; // SCR-005 s.d. SCR-009
      window.MPI_NAV.goTo(screenTarget);
    });
  });

  // Tombol Pin Materi pada Peta (Menuju SCR-013)
  const materiPin = document.getElementById("map-materi-btn");
  if (materiPin) {
    materiPin.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-013");
    });
  }

  // Tombol Khusus Header SCR-004
  const mapLencanaBtn = document.getElementById("map-btn-lencana");
  if (mapLencanaBtn) {
    mapLencanaBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-011");
    });
  }

  const mapRaporBtn = document.getElementById("map-btn-rapor");
  if (mapRaporBtn) {
    mapRaporBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-010");
    });
  }

  const mapInfoBtn = document.getElementById("map-btn-info");
  if (mapInfoBtn) {
    mapInfoBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      const helpModal = document.getElementById("help-modal");
      if (helpModal) helpModal.classList.add("active");
    });
  }

  // 7. EVENT LISTENERS: TOMBOL KEMBALI KE PETA
  const toMapBtns = document.querySelectorAll(".btn-back-to-map");
  toMapBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_AUDIO.stopSpeak(); // Hentikan suara yang sedang berbunyi
      window.MPI_NAV.hasVisitedMap = true; // Pastikan voice over tidak diputar saat kembali ke peta
      window.MPI_NAV.goTo("SCR-004");
    });
  });

  // 8. EVENT LISTENERS: KLAIM LENCANA MISI 1 - 4
  for (let m = 1; m <= 4; m++) {
    const claimBtn = document.getElementById(`m${m}-claim-btn`);
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        window.MPI_STORAGE.completeMission(m, 100);
        window.MPI_FEEDBACK.showBadgeCelebration(m, () => {
          window.MPI_NAV.goTo("SCR-004"); // Kembali ke peta
        });
      });
    }
  }

  // 9. EVENT LISTENERS: AKTIVITAS SWITCHER PER MISI
  // Misi 1 Switcher
  const m1ActBtns = document.querySelectorAll(".m1-act-switch-btn");
  m1ActBtns.forEach(b => {
    b.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      m1ActBtns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      const act = b.getAttribute("data-act");
      window.MPI_MISSIONS.switchMisi1Activity(act);
    });
  });

  // Misi 2 Switcher
  const m2ActBtns = document.querySelectorAll(".m2-act-switch-btn");
  m2ActBtns.forEach(b => {
    b.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      m2ActBtns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      const act = b.getAttribute("data-act");
      window.MPI_MISSIONS.switchMisi2Activity(act);
    });
  });

  // Misi 3 Switcher
  const m3ActBtns = document.querySelectorAll(".m3-act-switch-btn");
  m3ActBtns.forEach(b => {
    b.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      m3ActBtns.forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      const act = b.getAttribute("data-act");
      window.MPI_MISSIONS.switchMisi3Activity(act);
    });
  });

  // 10. EVENT LISTENERS: TOMBOL AUDIO & BANTUAN DI HEADER
  const audioToggleBtns = document.querySelectorAll(".header-music-toggle");
  audioToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const isMuted = window.MPI_AUDIO.toggleMute();
      btn.classList.toggle("muted", isMuted);
      btn.title = isMuted ? "Suara Mati (Klik untuk Nyalakan)" : "Suara Aktif (Klik untuk Matikan)";
    });
  });

  const helpBtns = document.querySelectorAll(".header-help-btn");
  const helpModal = document.getElementById("help-modal");
  const helpCloseBtn = document.getElementById("help-modal-close");

  helpBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      if (helpModal) helpModal.classList.add("active");
    });
  });

  if (helpCloseBtn) {
    helpCloseBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      if (helpModal) helpModal.classList.remove("active");
    });
  }

  // 11. EVENT LISTENERS: KOLEKSI LENCANA & RAPOR
  const toBadgesBtns = document.querySelectorAll(".btn-open-badges");
  toBadgesBtns.forEach(b => {
    b.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-011");
    });
  });

  const toReflectionBtn = document.getElementById("to-reflection-btn");
  if (toReflectionBtn) {
    toReflectionBtn.addEventListener("click", () => {
      window.MPI_AUDIO.playClick();
      window.MPI_NAV.goTo("SCR-012");
    });
  }

  // 12. EVENT LISTENERS: REFLEKSI & MULAI ULANG
  const restartBtn = document.getElementById("restart-expedition-btn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      if (confirm("Apakah kamu ingin mengulang petualangan dari awal? Progres akan direset.")) {
        window.MPI_STORAGE.resetProgress();
        window.MPI_NAV.hasVisitedMap = false;
        window.MPI_AUDIO.playClick();
        window.MPI_NAV.goTo("SCR-001");
      }
    });
  }

  const printReportBtn = document.getElementById("print-report-btn");
  if (printReportBtn) {
    printReportBtn.addEventListener("click", () => {
      window.print();
    });
  }
});
