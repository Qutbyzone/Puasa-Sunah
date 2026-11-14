/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Mesin Interaksi & Kuis Pembelajaran (Vanilla JS)
 */

window.MPI_QUIZ = {
  // 1. RENDER KUIS PILIHAN GANDA (PG)
  renderPG(containerId, questions, onFinish) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentIndex = 0;
    let score = 0;

    const renderQuestion = () => {
      const q = questions[currentIndex];
      container.innerHTML = `
        <div class="activity-card">
          <div class="activity-header">
            <span class="badge-tag">Tantangan Pilihan Ganda</span>
            <span class="progress-tag">Soal ${currentIndex + 1} dari ${questions.length}</span>
          </div>
          <h3 class="question-text">${q.question}</h3>
          <div class="options-grid">
            ${q.options.map((opt, idx) => `
              <button class="option-btn" data-index="${idx}">
                <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="opt-label">${opt}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;

      const buttons = container.querySelectorAll(".option-btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const selected = parseInt(btn.getAttribute("data-index"), 10);
          const isCorrect = selected === q.answer;

          buttons.forEach(b => b.disabled = true);
          btn.classList.add(isCorrect ? "correct" : "wrong");

          if (isCorrect) score++;

          window.MPI_FEEDBACK.showAnswerFeedback(isCorrect, q.explanation, () => {
            currentIndex++;
            if (currentIndex < questions.length) {
              renderQuestion();
            } else {
              const finalPercentage = Math.round((score / questions.length) * 100);
              container.innerHTML = `
                <div class="activity-finish-card">
                  <h4>Tantangan Selesai!</h4>
                  <p class="finish-score">Skor Kamu: <strong>${finalPercentage}%</strong> (${score}/${questions.length} Benar)</p>
                  <p class="finish-msg">${finalPercentage >= 70 ? "Hebat! Kamu telah memahami materi dengan baik!" : "Bagus! Kamu sudah berusaha dengan baik!"}</p>
                </div>
              `;
              if (typeof onFinish === "function") {
                onFinish(finalPercentage);
              }
            }
          });
        });
      });
    };

    renderQuestion();
  },

  // 2. RENDER BENAR - SALAH
  renderTrueFalse(containerId, items, onFinish) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentIndex = 0;
    let correctCount = 0;

    const renderItem = () => {
      const item = items[currentIndex];
      container.innerHTML = `
        <div class="activity-card">
          <div class="activity-header">
            <span class="badge-tag">Tantangan Benar atau Salah</span>
            <span class="progress-tag">Pernyataan ${currentIndex + 1} dari ${items.length}</span>
          </div>
          <p class="statement-prompt">Apakah pernyataan di bawah ini <strong>Benar</strong> atau <strong>Salah</strong>?</p>
          <div class="statement-box">
            "${item.statement}"
          </div>
          <div class="tf-actions">
            <button class="tf-btn true-btn" data-val="true">
              <span class="tf-icon">✔</span> Benar
            </button>
            <button class="tf-btn false-btn" data-val="false">
              <span class="tf-icon">✖</span> Salah
            </button>
          </div>
        </div>
      `;

      const buttons = container.querySelectorAll(".tf-btn");
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          const chosen = btn.getAttribute("data-val") === "true";
          const isCorrect = chosen === item.isTrue;

          buttons.forEach(b => b.disabled = true);
          btn.classList.add(isCorrect ? "correct" : "wrong");

          if (isCorrect) correctCount++;

          window.MPI_FEEDBACK.showAnswerFeedback(isCorrect, item.explanation, () => {
            currentIndex++;
            if (currentIndex < items.length) {
              renderItem();
            } else {
              const score = Math.round((correctCount / items.length) * 100);
              container.innerHTML = `
                <div class="activity-finish-card">
                  <h4>Aktivitas Selesai!</h4>
                  <p class="finish-score">Hasil: <strong>${correctCount}/${items.length}</strong> Tepat (${score}%)</p>
                </div>
              `;
              if (typeof onFinish === "function") {
                onFinish(score);
              }
            }
          });
        });
      });
    };

    renderItem();
  },

  // 3. RENDER MENCOCOKKAN PASANGAN (MATCHING)
  renderMatching(containerId, pairs, onFinish) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let selectedLeft = null;
    let matchesFound = 0;

    // Acak sisi kanan agar menantang
    const shuffledRight = [...pairs]
      .map(p => ({ text: p.match || p.waktu || p.keutamaan, origKey: p.term || p.puasa }))
      .sort(() => Math.random() - 0.5);

    container.innerHTML = `
      <div class="activity-card matching-mode">
        <div class="activity-header">
          <span class="badge-tag">Mencocokkan Pasangan</span>
          <span class="progress-tag" id="match-counter">Pasangan: 0/${pairs.length}</span>
        </div>
        <p class="matching-guide">Klik kartu di kolom kiri, lalu klik pasangannya yang tepat di kolom kanan!</p>
        <div class="matching-columns">
          <div class="col-left">
            ${pairs.map((p, idx) => `
              <button class="match-card left-card" data-key="${p.term || p.puasa}" id="left-${idx}">
                ${p.term || p.puasa}
              </button>
            `).join("")}
          </div>
          <div class="col-right">
            ${shuffledRight.map((r, idx) => `
              <button class="match-card right-card" data-orig="${r.origKey}" id="right-${idx}">
                ${r.text}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    const leftCards = container.querySelectorAll(".left-card");
    const rightCards = container.querySelectorAll(".right-card");

    leftCards.forEach(l => {
      l.addEventListener("click", () => {
        if (l.classList.contains("matched")) return;
        window.MPI_AUDIO.playClick();
        leftCards.forEach(c => c.classList.remove("selected"));
        l.classList.add("selected");
        selectedLeft = l;
      });
    });

    rightCards.forEach(r => {
      r.addEventListener("click", () => {
        if (!selectedLeft || r.classList.contains("matched")) return;

        const leftKey = selectedLeft.getAttribute("data-key");
        const rightOrig = r.getAttribute("data-orig");

        if (leftKey === rightOrig) {
          window.MPI_AUDIO.playCorrect();
          selectedLeft.classList.remove("selected");
          selectedLeft.classList.add("matched");
          r.classList.add("matched");
          selectedLeft = null;
          matchesFound++;

          const counter = document.getElementById("match-counter");
          if (counter) counter.innerText = `Pasangan: ${matchesFound}/${pairs.length}`;

          if (matchesFound === pairs.length) {
            window.MPI_AUDIO.playBadge();
            container.innerHTML = `
              <div class="activity-finish-card">
                <h4>🎉 Hebat Sekali!</h4>
                <p>Kamu berhasil mencocokkan seluruh pasangan dengan tepat!</p>
              </div>
            `;
            if (typeof onFinish === "function") {
              onFinish(100);
            }
          }
        } else {
          window.MPI_AUDIO.playWrong();
          r.classList.add("shake-wrong");
          setTimeout(() => r.classList.remove("shake-wrong"), 600);
        }
      });
    });
  },

  // 4. RENDER MENGELOMPOKKAN (GROUPING)
  renderGrouping(containerId, groupData, onFinish) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let itemsLeft = [...groupData.items];
    let categorizedCount = 0;

    container.innerHTML = `
      <div class="activity-card grouping-mode">
        <div class="activity-header">
          <span class="badge-tag">Tantangan Mengelompokkan</span>
          <span class="progress-tag" id="grp-counter">Tersisa: ${itemsLeft.length}</span>
        </div>
        <p class="grouping-guide">Klik kartu jenis puasa di bawah, lalu klik keranjang kategori yang sesuai!</p>

        <div class="items-pool" id="items-pool">
          ${itemsLeft.map((item, idx) => `
            <button class="pool-item-btn" data-cat="${item.category}" id="pool-item-${idx}">
              ${item.text}
            </button>
          `).join("")}
        </div>

        <div class="buckets-grid">
          ${groupData.categories.map(cat => `
            <div class="bucket-box" data-bucket="${cat}">
              <div class="bucket-header">${cat}</div>
              <div class="bucket-contents" id="bucket-${cat}"></div>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    let selectedItemBtn = null;
    const pool = container.querySelector("#items-pool");
    const itemBtns = container.querySelectorAll(".pool-item-btn");
    const buckets = container.querySelectorAll(".bucket-box");

    itemBtns.forEach(b => {
      b.addEventListener("click", () => {
        window.MPI_AUDIO.playClick();
        itemBtns.forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        selectedItemBtn = b;
      });
    });

    buckets.forEach(bucket => {
      bucket.addEventListener("click", () => {
        if (!selectedItemBtn) return;

        const itemCat = selectedItemBtn.getAttribute("data-cat");
        const bucketName = bucket.getAttribute("data-bucket");

        if (itemCat === bucketName) {
          window.MPI_AUDIO.playCorrect();
          const targetDiv = bucket.querySelector(".bucket-contents");
          const tag = document.createElement("span");
          tag.className = "categorized-chip";
          tag.innerText = selectedItemBtn.innerText;
          targetDiv.appendChild(tag);

          selectedItemBtn.remove();
          selectedItemBtn = null;
          categorizedCount++;

          const counter = document.getElementById("grp-counter");
          if (counter) counter.innerText = `Tersisa: ${groupData.items.length - categorizedCount}`;

          if (categorizedCount === groupData.items.length) {
            window.MPI_AUDIO.playBadge();
            container.innerHTML = `
              <div class="activity-finish-card">
                <h4>🌟 Sempurna!</h4>
                <p>Semua puasa sunah telah kamu kelompokkan ke dalam siklus waktu yang tepat!</p>
              </div>
            `;
            if (typeof onFinish === "function") {
              onFinish(100);
            }
          }
        } else {
          window.MPI_AUDIO.playWrong();
          bucket.classList.add("shake-wrong");
          setTimeout(() => bucket.classList.remove("shake-wrong"), 600);
        }
      });
    });
  },

  // 5. RENDER STUDI KASUS TINDAKAN BIJAK (MISI 4)
  renderScenarios(containerId, scenarios, onFinish) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let index = 0;
    let score = 0;

    const renderStep = () => {
      const s = scenarios[index];
      container.innerHTML = `
        <div class="activity-card scenario-card">
          <div class="activity-header">
            <span class="badge-tag">Studi Kasus Sikap Bijak</span>
            <span class="progress-tag">Kasus ${index + 1} dari ${scenarios.length}</span>
          </div>
          <div class="situation-box">
            <strong>Situasi:</strong> ${s.situation}
          </div>
          <h4 class="scenario-question">${s.question}</h4>
          <div class="options-grid">
            ${s.options.map((opt, i) => `
              <button class="option-btn" data-idx="${i}">
                <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
                <span class="opt-label">${opt}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;

      const btns = container.querySelectorAll(".option-btn");
      btns.forEach(b => {
        b.addEventListener("click", () => {
          const choice = parseInt(b.getAttribute("data-idx"), 10);
          const isCorrect = choice === s.answer;

          btns.forEach(x => x.disabled = true);
          b.classList.add(isCorrect ? "correct" : "wrong");
          if (isCorrect) score++;

          window.MPI_FEEDBACK.showAnswerFeedback(isCorrect, s.explanation, () => {
            index++;
            if (index < scenarios.length) {
              renderStep();
            } else {
              const pct = Math.round((score / scenarios.length) * 100);
              container.innerHTML = `
                <div class="activity-finish-card">
                  <h4>Selesai Mengkaji Kasus!</h4>
                  <p>Skor Kebijakan: <strong>${pct}%</strong></p>
                  <p>Terus amalkan sikap ikhlas, rendah hati, dan menghormati sesama!</p>
                </div>
              `;
              if (typeof onFinish === "function") {
                onFinish(pct);
              }
            }
          });
        });
      });
    };

    renderStep();
  },

  // 6. RENDER KUIS AKHIR KOMPREHENSIF (MISI 5 - 15 SOAL)
  renderFinalQuiz(containerId, questions, onComplete) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let currentQ = 0;
    let correctTotal = 0;
    let userAnswers = [];

    const renderQuizQuestion = () => {
      const item = questions[currentQ];
      container.innerHTML = `
        <div class="final-quiz-card">
          <div class="quiz-top-bar">
            <div class="quiz-badge">Evaluasi Akhir Penjelajah</div>
            <div class="quiz-counter">Soal ${currentQ + 1} dari ${questions.length}</div>
          </div>
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" style="width: ${((currentQ + 1) / questions.length) * 100}%"></div>
          </div>
          <h3 class="quiz-question-title">${item.q}</h3>
          <div class="quiz-options-list">
            ${item.opts.map((opt, oIdx) => `
              <button class="quiz-option-btn" data-choice="${oIdx}">
                <span class="quiz-opt-marker">${String.fromCharCode(65 + oIdx)}</span>
                <span class="quiz-opt-text">${opt}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;

      const optBtns = container.querySelectorAll(".quiz-option-btn");
      optBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          const picked = parseInt(btn.getAttribute("data-choice"), 10);
          const isRight = picked === item.ans;

          optBtns.forEach(b => b.disabled = true);
          btn.classList.add(isRight ? "correct" : "wrong");

          if (isRight) correctTotal++;
          userAnswers.push({ question: item.q, userPick: picked, correct: item.ans, isRight: isRight });

          window.MPI_FEEDBACK.showAnswerFeedback(isRight, item.exp, () => {
            currentQ++;
            if (currentQ < questions.length) {
              renderQuizQuestion();
            } else {
              const finalPct = Math.round((correctTotal / questions.length) * 100);
              if (typeof onComplete === "function") {
                onComplete(finalPct, correctTotal, questions.length);
              }
            }
          });
        });
      });
    };

    renderQuizQuestion();
  }
};
