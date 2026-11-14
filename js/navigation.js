/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Navigasi & Transisi Layar (navigation.js)
 */

window.MPI_NAV = {
  currentScreen: "SCR-001",
  storySlide: 0,
  hasVisitedMap: false,

  storyData: [
    {
      img: "assets/maps/cerita-1-dermaga.jpg",
      title: "Pendaratan di Dermaga Pulau Hikmah",
      text: "Selamat datang di Pulau Hikmah yang indah dan penuh keajaiban! Di pulau ini kita akan mempelajari indahnya amalan puasa sunah.",
      voKey: "cerita-1",
      expr: "senang"
    },
    {
      img: "assets/maps/cerita-2-peta.jpg",
      title: "Legenda 5 Lencana Hikmah",
      text: "Pulau ini menyimpan 5 Lencana Pusaka tentang keutamaan dan ketentuan puasa sunah yang sangat dicintai oleh Nabi Muhammad saw.",
      voKey: "cerita-2",
      expr: "semangat"
    },
    {
      img: "assets/maps/cerita-3-ekspedisi.jpg",
      title: "Membuka Peta Menuju 5 Zona Misi",
      text: "Kita akan menjelajahi Pantai Pengetahuan, Hutan Kalender, Gua Hadis, Desa Inspirasi, hingga Puncak Kebiasaan. Mari kita mulai petualangan ini!",
      voKey: "cerita-3",
      expr: "semangat"
    }
  ],

  init() {
    // Tampilkan layar awal SCR-001 secara bersih tanpa bunyi klik
    const screens = document.querySelectorAll(".screen-view");
    screens.forEach(s => s.classList.remove("active"));
    const target = document.getElementById("SCR-001");
    if (target) {
      target.classList.add("active");
      this.currentScreen = "SCR-001";
      this.onScreenEnter("SCR-001");
    }
  },

  goTo(screenId) {
    const coverEl = document.getElementById("cover-voice-player");
    if (coverEl) {
      coverEl.pause();
      coverEl.currentTime = 0;
    }
    window.MPI_AUDIO.playClick();
    window.MPI_AUDIO.stopSpeak();

    // Sembunyikan semua layar
    const screens = document.querySelectorAll(".screen-view");
    screens.forEach(s => s.classList.remove("active"));

    // Tampilkan layar target
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active");
      this.currentScreen = screenId;
      this.onScreenEnter(screenId);
    }
  },

  onScreenEnter(screenId) {
    const userName = window.MPI_STORAGE.getUserName();

    const nameDisplays = document.querySelectorAll(".display-username");
    nameDisplays.forEach(el => el.innerText = userName);

    switch (screenId) {
      case "SCR-001":
        this.storySlide = 0;
        // Autoplay narasi judul dan deskripsi Cover
        window.MPI_AUDIO.playVoiceOver("SCR-001");
        break;

      case "SCR-002":
        const input = document.getElementById("student-name-input");
        if (input) {
          input.value = userName === "Penjelajah" ? "" : userName;
          setTimeout(() => input.focus(), 300);
        }
        // Autoplay sambutan & panduan pendaftaran
        window.MPI_AUDIO.playVoiceOver("SCR-002");
        break;

      case "SCR-003":
        this.renderStorySlide();
        break;

      case "SCR-004":
        this.updateMapPins();
        // Narasi peta hanya diputar satu kali saat pertama kali tiba di peta dari cerita pembuka
        // Saat kembali ke peta melalui tombol 'Kembali ke Peta', voice over TIDAK diperdengarkan lagi
        if (!this.hasVisitedMap) {
          this.hasVisitedMap = true;
          window.MPI_AUDIO.playVoiceOver("SCR-004");
        } else {
          window.MPI_AUDIO.stopSpeak();
        }
        break;

      case "SCR-005":
        window.MPI_MISSIONS.initMisi1();
        // Autoplay panduan Misi 1
        window.MPI_AUDIO.playVoiceOver("SCR-005");
        break;

      case "SCR-006":
        window.MPI_MISSIONS.initMisi2();
        // Autoplay panduan Misi 2
        window.MPI_AUDIO.playVoiceOver("SCR-006");
        break;

      case "SCR-007":
        window.MPI_MISSIONS.initMisi3();
        // Autoplay panduan Misi 3
        window.MPI_AUDIO.playVoiceOver("SCR-007");
        break;

      case "SCR-008":
        window.MPI_MISSIONS.initMisi4();
        // Autoplay panduan Misi 4
        window.MPI_AUDIO.playVoiceOver("SCR-008");
        break;

      case "SCR-009":
        window.MPI_MISSIONS.initMisi5();
        // Autoplay panduan Misi 5
        window.MPI_AUDIO.playVoiceOver("SCR-009");
        break;

      case "SCR-010":
        this.renderExpeditionReport();
        // Autoplay narasi rapor capaian
        window.MPI_AUDIO.playVoiceOver("SCR-010");
        break;

      case "SCR-011":
        this.renderBadgesCollection();
        // Autoplay narasi koleksi lencana
        window.MPI_AUDIO.playVoiceOver("SCR-011");
        break;

      case "SCR-012":
        this.renderReflectionScreen();
        // Autoplay refleksi & doa penutup
        window.MPI_AUDIO.playVoiceOver("SCR-012");
        break;

      case "SCR-013":
        if (window.MPI_MATERI) window.MPI_MATERI.init();
        // Autoplay panduan ruang materi
        window.MPI_AUDIO.playVoiceOver("SCR-013");
        break;
    }
  },

  // Render Cerita Pembuka Slide Lengkap dengan Gambar & Voice Over
  renderStorySlide() {
    const cur = this.storyData[this.storySlide];
    const imgEl = document.getElementById("story-scene-img");
    const titleEl = document.getElementById("story-dialog-title");
    const textEl = document.getElementById("story-dialog-text");
    const nextBtn = document.getElementById("story-next-btn");

    if (imgEl && cur.img) {
      imgEl.src = cur.img;
      imgEl.alt = cur.title;
    }

    if (titleEl) titleEl.innerText = cur.title;

    if (textEl) {
      const user = window.MPI_STORAGE.getUserName();
      textEl.innerHTML = cur.text.replace("sahabat penjelajah", `<strong>${user}</strong>`);
    }

    // Set ekspresi Kaka sesuai slide
    if (window.KAKA_ANIM) {
      window.KAKA_ANIM.setExpression(cur.expr);
    }

    // Autoplay Voice Over Narasi Cerita (Bukan suara sapaan karakter Kaka)
    window.MPI_AUDIO.playStoryNarration(cur.voKey, cur.text);

    if (nextBtn) {
      if (this.storySlide === this.storyData.length - 1) {
        nextBtn.innerHTML = `<img src="assets/ui/btn-buka-peta.png" alt="Buka Peta Pulau Hikmah" class="btn-img-asset" style="width: 200px;">`;
      } else {
        nextBtn.innerHTML = `<img src="assets/ui/btn-lanjut-cerita.png" alt="Lanjut Cerita" class="btn-img-asset" style="width: 175px;">`;
      }
    }
  },

  replayStoryNarration() {
    const cur = this.storyData[this.storySlide];
    if (cur) {
      window.MPI_AUDIO.playStoryNarration(cur.voKey, cur.text);
    }
  },

  nextStorySlide() {
    this.storySlide++;
    if (this.storySlide >= this.storyData.length) {
      this.goTo("SCR-004"); // Masuk Peta
    } else {
      this.renderStorySlide();
    }
  },

  updateMapPins() {
    const state = window.MPI_STORAGE.load();
    const pins = document.querySelectorAll(".map-pin");

    pins.forEach(pin => {
      // Abaikan pin materi pembelajaran dari logika misi berkunci
      if (pin.id === "map-materi-btn" || pin.classList.contains("materi-pin")) {
        return;
      }

      const mid = parseInt(pin.getAttribute("data-mission"), 10);
      const isUnlocked = state.unlockedMissions.includes(mid);
      const isCompleted = state.completedMissions.includes(mid);

      pin.classList.toggle("unlocked", isUnlocked);
      pin.classList.toggle("locked", !isUnlocked);
      pin.classList.toggle("completed", isCompleted);

      const statusSpan = pin.querySelector(".pin-status-label");
      if (statusSpan) {
        if (isCompleted) {
          statusSpan.innerText = "⭐ Tuntas";
          statusSpan.className = "pin-status-label completed";
        } else if (isUnlocked) {
          statusSpan.innerText = "🚩 Terbuka";
          statusSpan.className = "pin-status-label ready";
        } else {
          statusSpan.innerText = "🔒 Terkunci";
          statusSpan.className = "pin-status-label locked";
        }
      }
    });

    const earnedCount = (state.badgesEarned || []).length;

    // Perbarui indikator progres SCR-004
    const progressTextEl = document.getElementById("map-progress-text");
    if (progressTextEl) {
      progressTextEl.innerText = `${earnedCount}/5`;
    }

    const progressIndicator = document.getElementById("map-progress-indicator");
    if (progressIndicator) {
      progressIndicator.title = `Progres Ekspedisi: ${earnedCount} dari 5 Lencana`;
      progressIndicator.setAttribute("aria-label", `Progres Ekspedisi ${earnedCount} dari 5`);
    }

    const badgeCountEl = document.getElementById("map-badge-count");
    if (badgeCountEl) {
      badgeCountEl.innerText = `${earnedCount} / 5 Lencana`;
    }
  },

  renderExpeditionReport() {
    const summary = window.MPI_SCORING.getSummary();
    const nameEl = document.getElementById("report-student-name");
    const scoreEl = document.getElementById("report-final-score");
    const predEl = document.getElementById("report-predicate");
    const badgeGrid = document.getElementById("report-badges-grid");

    if (nameEl) nameEl.innerText = summary.userName;
    if (scoreEl) scoreEl.innerText = `${summary.finalScore} / 100`;
    if (predEl) {
      predEl.innerText = `${summary.predicate.title} (${summary.predicate.grade})`;
      predEl.style.color = summary.predicate.color;
    }

    if (badgeGrid) {
      const allMissions = window.MPI_DATA.missions;
      const state = window.MPI_STORAGE.load();
      const earnedMissions = allMissions.filter(m => (state.badgesEarned || []).includes(m.id));

      if (earnedMissions.length === 0) {
        badgeGrid.innerHTML = `
          <div class="no-badge-notice" style="color: #64748b; font-size: 0.95rem; padding: 12px; font-style: italic;">
            🌟 Belum ada lencana yang diperoleh. Selesaikan misi di Peta Jelajah untuk mengumpulkan lencana pusaka!
          </div>
        `;
      } else {
        badgeGrid.innerHTML = earnedMissions.map(m => `
          <div class="report-badge-item earned">
            <img src="assets/badges/${m.badgeId}" alt="${m.badgeName}" class="badge-thumb">
            <span class="badge-label">${m.badgeName}</span>
          </div>
        `).join("");
      }
    }
  },

  renderBadgesCollection() {
    const grid = document.getElementById("badges-collection-grid");
    if (!grid) return;

    const missions = window.MPI_DATA.missions;
    const state = window.MPI_STORAGE.load();

    grid.innerHTML = missions.map(m => {
      const isEarned = state.badgesEarned.includes(m.id);
      return `
        <div class="showcase-badge-card ${isEarned ? "unlocked" : "locked"}" data-mid="${m.id}">
          <div class="showcase-img-wrap">
            <img src="assets/badges/${m.badgeId}" alt="${m.badgeName}" class="showcase-img">
            ${!isEarned ? `<div class="lock-overlay">🔒</div>` : ""}
          </div>
          <h4 class="showcase-title">${m.badgeName}</h4>
          <p class="showcase-subtitle">${m.title}</p>
          <p class="showcase-status">${isEarned ? "✅ Telah Diperoleh" : "Belum Selesai"}</p>
        </div>
      `;
    }).join("");
  },

  renderReflectionScreen() {
    const userName = window.MPI_STORAGE.getUserName();
    const greeting = document.getElementById("reflection-greeting");
    if (greeting) {
      greeting.innerHTML = `Alhamdulillah, <strong>${userName}</strong>! Petualangan di Pulau Hikmah telah paripurna.`;
    }
  }
};
