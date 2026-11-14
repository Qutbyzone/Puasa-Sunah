/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Pengontrol Logika Pembelajaran & Konten 5 Misi
 */

window.MPI_MISSIONS = {
  // 1. INISIALISASI MISI 1 (PANTAI PENGETAHUAN)
  initMisi1() {
    const claimBtn = document.getElementById("m1-claim-btn");
    if (claimBtn) {
      const state = window.MPI_STORAGE.load();
      const isCompleted = state.completedMissions.includes(1);
      claimBtn.disabled = !isCompleted;
      if (isCompleted) claimBtn.classList.add("pulse-ready");
    }

    // Render Pilihan Aktivitas Misi 1 (Default: Pilihan Ganda)
    this.switchMisi1Activity("pg");
  },

  switchMisi1Activity(type) {
    const actContainer = "m1-activity-area";
    const claimBtn = document.getElementById("m1-claim-btn");

    if (type === "pg") {
      window.MPI_QUIZ.renderPG(actContainer, window.MPI_DATA.activities.misi1.pg, (score) => {
        if (score >= 60 && claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    } else if (type === "tf") {
      window.MPI_QUIZ.renderTrueFalse(actContainer, window.MPI_DATA.activities.misi1.trueFalse, (score) => {
        if (score >= 60 && claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    } else if (type === "match") {
      window.MPI_QUIZ.renderMatching(actContainer, window.MPI_DATA.activities.misi1.matching, () => {
        if (claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    }
  },

  // 2. INISIALISASI MISI 2 (HUTAN KALENDER)
  initMisi2() {
    const claimBtn = document.getElementById("m2-claim-btn");
    if (claimBtn) {
      const state = window.MPI_STORAGE.load();
      const isCompleted = state.completedMissions.includes(2);
      claimBtn.disabled = !isCompleted;
      if (isCompleted) claimBtn.classList.add("pulse-ready");
    }

    this.switchMisi2Activity("group");
  },

  switchMisi2Activity(type) {
    const actContainer = "m2-activity-area";
    const claimBtn = document.getElementById("m2-claim-btn");

    if (type === "group") {
      window.MPI_QUIZ.renderGrouping(actContainer, window.MPI_DATA.activities.misi2.grouping, () => {
        if (claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    } else if (type === "match") {
      window.MPI_QUIZ.renderMatching(actContainer, window.MPI_DATA.activities.misi2.calendarMatching, () => {
        if (claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    }
  },

  // 3. INISIALISASI MISI 3 (GUA HADIS)
  initMisi3() {
    const claimBtn = document.getElementById("m3-claim-btn");
    if (claimBtn) {
      const state = window.MPI_STORAGE.load();
      const isCompleted = state.completedMissions.includes(3);
      claimBtn.disabled = !isCompleted;
      if (isCompleted) claimBtn.classList.add("pulse-ready");
    }

    this.switchMisi3Activity("pg");
  },

  switchMisi3Activity(type) {
    const actContainer = "m3-activity-area";
    const claimBtn = document.getElementById("m3-claim-btn");

    if (type === "pg") {
      window.MPI_QUIZ.renderPG(actContainer, window.MPI_DATA.activities.misi3.pg, (score) => {
        if (score >= 60 && claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    } else if (type === "match") {
      window.MPI_QUIZ.renderMatching(actContainer, window.MPI_DATA.activities.misi3.matching, () => {
        if (claimBtn) {
          claimBtn.disabled = false;
          claimBtn.classList.add("pulse-ready");
        }
      });
    }
  },

  // 4. INISIALISASI MISI 4 (DESA INSPIRASI)
  initMisi4() {
    const actContainer = "m4-activity-area";
    const claimBtn = document.getElementById("m4-claim-btn");

    if (claimBtn) {
      const state = window.MPI_STORAGE.load();
      const isCompleted = state.completedMissions.includes(4);
      claimBtn.disabled = !isCompleted;
      if (isCompleted) claimBtn.classList.add("pulse-ready");
    }

    window.MPI_QUIZ.renderScenarios(actContainer, window.MPI_DATA.activities.misi4.scenarios, (pct) => {
      if (pct >= 60 && claimBtn) {
        claimBtn.disabled = false;
        claimBtn.classList.add("pulse-ready");
      }
    });
  },

  // 5. INISIALISASI MISI 5 (PUNCAK KEBIASAAN / EVALUASI AKHIR)
  initMisi5() {
    const container = "m5-quiz-container";
    const questions = window.MPI_DATA.activities.misi5.quiz;

    window.MPI_QUIZ.renderFinalQuiz(container, questions, (pct, correct, total) => {
      // Simpan skor misi 5 dan selesaikan seluruh ekspedisi
      window.MPI_STORAGE.completeMission(5, pct);

      const finishArea = document.getElementById(container);
      if (finishArea) {
        const pred = window.MPI_SCORING.getPredicate(pct);
        finishArea.innerHTML = `
          <div class="final-evaluation-finish">
            <div class="finish-badge-icon">👑</div>
            <h2>Selamat, Evaluasi Akhir Selesai!</h2>
            <div class="finish-score-circle">
              <span class="score-num">${pct}</span>
              <span class="score-denom">/ 100</span>
            </div>
            <p class="finish-stats">Jawaban Benar: <strong>${correct} dari ${total} soal</strong></p>
            <div class="predicate-box" style="border-left-color: ${pred.color}">
              <h4>${pred.title} (Predikat: ${pred.grade})</h4>
              <p>${pred.message}</p>
            </div>
            <div class="finish-actions">
              <button class="nav-btn primary-btn pulse-ready" id="m5-claim-crown-btn">
                🏆 Klaim Lencana Puncak & Buka Rapor
              </button>
            </div>
          </div>
        `;

        const crownBtn = document.getElementById("m5-claim-crown-btn");
        if (crownBtn) {
          crownBtn.onclick = () => {
            window.MPI_FEEDBACK.showBadgeCelebration(5, () => {
              window.MPI_NAV.goTo("SCR-010"); // Hasil Ekspedisi
            });
          };
        }
      }
    });
  }
};
