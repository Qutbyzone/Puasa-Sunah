/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Halaman Materi Pembelajaran Terpadu (SCR-013)
 * Menyatukan seluruh materi 5 zona ekspedisi dengan navigasi interaktif
 */

window.MPI_MATERI = {
  currentZone: 1,

  zoneMeta: [
    {
      id: 1,
      title: "Pantai Pengetahuan",
      subtitle: "Hakikat & Perbedaan Puasa",
      icon: "🏖️",
      bgImage: "assets/backgrounds/bg-pantai.png",
      kakaGreeting: "Di Pantai Pengetahuan, kita belajar arti puasa secara bahasa dan syariat, serta perbedaan puasa wajib dan sunah!"
    },
    {
      id: 2,
      title: "Hutan Kalender",
      subtitle: "8 Jenis Puasa Sunah",
      icon: "🌴",
      bgImage: "assets/backgrounds/bg-hutan.png",
      kakaGreeting: "Pohon-pohon Hutan Kalender menyimpan jadwal 8 puasa sunah yang diajarkan Rasulullah saw. Mari pelajari satu per satu!"
    },
    {
      id: 3,
      title: "Gua Hadis",
      subtitle: "Ketentuan, Niat & Keutamaan",
      icon: "🕯️",
      bgImage: "assets/backgrounds/bg-gua.png",
      kakaGreeting: "Cahaya lentera Gua Hadis menyingkap kemudahan niat puasa sunah dan kemuliaan pintu surga Ar-Rayyan!"
    },
    {
      id: 4,
      title: "Desa Inspirasi",
      subtitle: "Nilai Sikap, Toleransi & Pengamalan",
      icon: "🏡",
      bgImage: "assets/backgrounds/bg-desa.png",
      kakaGreeting: "Warga Desa Inspirasi mengajarkan kita berpuasa dengan ikhlas, tidak pamer (riya'), dan menghargai teman!"
    },
    {
      id: 5,
      title: "Puncak Kebiasaan",
      subtitle: "Rangkuman Hikmah & Doa Sunah",
      icon: "👑",
      bgImage: "assets/backgrounds/bg-puncak.png",
      kakaGreeting: "Alhamdulillah! Ini rangkuman seluruh mutiara hikmah puasa sunah beserta doa berbuka sesuai ajaran Rasulullah saw.!"
    }
  ],

  init() {
    this.renderZoneNav();
    this.showZone(this.currentZone);
  },

  renderZoneNav() {
    const navEl = document.getElementById("materi-zone-nav");
    if (!navEl) return;

    navEl.innerHTML = this.zoneMeta.map(z => `
      <button class="zone-nav-btn ${z.id === this.currentZone ? "active" : ""}" data-zone="${z.id}" title="${z.title} - ${z.subtitle}">
        <span class="zone-btn-icon">${z.icon}</span>
        <span class="zone-btn-text">
          <span class="zone-tag">Zona ${z.id}</span>
          <span class="zone-name">${z.title}</span>
        </span>
      </button>
    `).join("");

    const buttons = navEl.querySelectorAll(".zone-nav-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const zid = parseInt(btn.getAttribute("data-zone"), 10);
        window.MPI_AUDIO.playClick();
        this.showZone(zid);
      });
    });
  },

  showZone(zoneId) {
    this.currentZone = zoneId;

    // Update status active pada tombol navigasi
    const buttons = document.querySelectorAll(".zone-nav-btn");
    buttons.forEach(b => {
      const zid = parseInt(b.getAttribute("data-zone"), 10);
      b.classList.toggle("active", zid === zoneId);
    });

    const meta = this.zoneMeta.find(z => z.id === zoneId) || this.zoneMeta[0];

    // Perbarui balon ucapan Kaka di halaman materi
    const speechEl = document.getElementById("materi-kaka-speech");
    if (speechEl) {
      speechEl.innerText = meta.kakaGreeting;
    }

    // Set ekspresi Kaka
    if (window.KAKA_ANIM) {
      window.KAKA_ANIM.setExpression(zoneId === 5 ? "semangat" : zoneId === 3 ? "berpikir" : "senang");
    }

    // Render konten spesifik per zona
    const contentEl = document.getElementById("materi-zone-content");
    if (!contentEl) return;

    switch (zoneId) {
      case 1:
        this.renderZone1(contentEl);
        break;
      case 2:
        this.renderZone2(contentEl);
        break;
      case 3:
        this.renderZone3(contentEl);
        break;
      case 4:
        this.renderZone4(contentEl);
        break;
      case 5:
        this.renderZone5(contentEl);
        break;
    }

    // Scroll konten materi kembali ke atas
    contentEl.scrollTop = 0;
  },

  // ZONA 1: PANTAI PENGETAHUAN
  renderZone1(container) {
    const data = window.MPI_DATA.materials.misi1;
    container.innerHTML = `
      <div class="materi-section-header">
        <div class="materi-badge">🏖️ Zona 1: Pantai Pengetahuan</div>
        <h3 class="materi-heading">Hakikat Puasa & Perbedaan Puasa Wajib dengan Puasa Sunah</h3>
        <p class="materi-subheading">Pelajari definisi dasar shaum, hukum puasa sunah, dan tabel perbandingan lengkap.</p>
      </div>

      <div class="materi-tab-nav" id="materi-m1-tabs">
        ${data.tabs.map((tab, idx) => `
          <button class="materi-tab-btn ${idx === 0 ? "active" : ""}" data-idx="${idx}">
            <span class="tab-icon">${tab.icon}</span> ${tab.title}
          </button>
        `).join("")}
      </div>

      <div id="materi-m1-tab-body" class="materi-tab-content-area">
        ${data.tabs[0].content}
      </div>
    `;

    const tabBtns = container.querySelectorAll("#materi-m1-tabs .materi-tab-btn");
    const bodyEl = container.querySelector("#materi-m1-tab-body");

    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        window.MPI_AUDIO.playClick();
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        bodyEl.innerHTML = data.tabs[idx].content;
      });
    });
  },

  // ZONA 2: HUTAN KALENDER
  renderZone2(container) {
    const data = window.MPI_DATA.materials.misi2;
    container.innerHTML = `
      <div class="materi-section-header">
        <div class="materi-badge">🌴 Zona 2: Hutan Kalender</div>
        <h3 class="materi-heading">🌿 8 Jenis Puasa Sunah yang Dicintai Rasulullah saw.</h3>
        <p class="materi-subheading">Ketahui waktu pelaksanaan, keutamaan, dan rincian setiap amalan puasa sunah.</p>
      </div>

      <div class="puasa-cards-grid">
        ${data.cards.map(c => `
          <div class="puasa-card" tabindex="0">
            <div class="card-icon">${c.icon}</div>
            <h4 class="card-title">${c.name}</h4>
            <div class="card-waktu"><strong>📅 Waktu:</strong> ${c.waktu}</div>
            <div class="card-keutamaan"><strong>✨ Keutamaan:</strong> ${c.keutamaan}</div>
            <div class="card-detail">${c.detail}</div>
          </div>
        `).join("")}
      </div>

      <div class="highlight-box" style="margin-top: 18px;">
        <h4 style="color: var(--color-primary-dark); margin-bottom: 6px;">💡 Pengelompokan Berdasarkan Siklus Waktu:</h4>
        <ul style="padding-left: 20px; color: var(--text-main); line-height: 1.6;">
          <li><strong>Mingguan:</strong> Puasa Senin & Kamis.</li>
          <li><strong>Bulanan:</strong> Puasa Ayyamul Bidh (13, 14, 15 setiap bulan Hijriah).</li>
          <li><strong>Tahunan:</strong> Puasa 6 Hari Syawal, Puasa Arafah (9 Zulhijjah), Puasa Asyura (10 Muharam), Puasa Tasu'a (9 Muharam), Puasa Syakban.</li>
          <li><strong>Selang-seling (Bergantian):</strong> Puasa Nabi Daud as. (sehari puasa, sehari berbuka).</li>
        </ul>
      </div>
    `;
  },

  // ZONA 3: GUA HADIS
  renderZone3(container) {
    const data = window.MPI_DATA.materials.misi3;
    container.innerHTML = `
      <div class="materi-section-header">
        <div class="materi-badge">🕯️ Zona 3: Gua Hadis</div>
        <h3 class="materi-heading">Ketentuan Niat, Dalil Hadis & Keutamaan Agung Puasa Sunah</h3>
        <p class="materi-subheading">Kemudahan berniat di pagi hari dan pahala istimewa pintu surga Ar-Rayyan.</p>
      </div>

      <div class="gua-topics-list">
        ${data.topics.map(t => `
          <div class="gua-topic-card" style="margin-bottom: 20px;">
            <h4><span class="topic-icon">${t.icon}</span> ${t.title}</h4>
            <div class="topic-content">${t.body}</div>
          </div>
        `).join("")}
      </div>

      <div class="hadis-quote-box">
        <div style="font-size: 1.6rem; margin-bottom: 6px;">📜</div>
        <h4 style="color: var(--color-gold-dark); margin-bottom: 8px;">Hadis Rasulullah saw. tentang Pintu Ar-Rayyan:</h4>
        <p style="font-style: italic; color: #37474f; line-height: 1.6; margin-bottom: 8px;">
          "Sesungguhnya di surga ada satu pintu yang disebut dengan <strong>Ar-Rayyan</strong>. Orang-orang yang berpuasa akan masuk melaluinya pada hari kiamat, tidak ada seorang pun selain mereka yang memasukinya..."
        </p>
        <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary-dark);">(HR. Bukhari No. 1896 dan Muslim No. 1152)</span>
      </div>
    `;
  },

  // ZONA 4: DESA INSPIRASI
  renderZone4(container) {
    const data = window.MPI_DATA.materials.misi4;
    container.innerHTML = `
      <div class="materi-section-header">
        <div class="materi-badge">🏡 Zona 4: Desa Inspirasi</div>
        <h3 class="materi-heading">Nilai-Nilai Luhur & Sikap Bijak Mengamalkan Puasa Sunah</h3>
        <p class="materi-subheading">Ikhlas tanpa riya', menghargai sesama tanpa memaksa, dan mengamalkan sesuai kemampuan.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 20px;">
        ${data.values.map(v => `
          <div class="desa-value-card">
            <h4>${v.title}</h4>
            <p class="value-desc">${v.desc}</p>
            <div class="value-example"><strong>Contoh Nyata:</strong> ${v.example}</div>
          </div>
        `).join("")}
      </div>

      <div class="highlight-box" style="background: #fff8e1; border-left-color: var(--color-gold);">
        <h4 style="color: #e65100; margin-bottom: 6px;">⚠️ Waspada Terhadap Bahaya Riya' (Pamer Ibadah):</h4>
        <p style="color: var(--text-main); line-height: 1.6;">
          Riya' adalah melakukan amal kebaikan demi mendapatkan pujian manusia. Rasulullah saw. mengingatkan agar kita menyembunyikan amalan sunah sebagaimana kita menyembunyikan keburukan, agar pahala ibadah tetap utuh di hadapan Allah Swt.
        </p>
      </div>
    `;
  },

  // ZONA 5: PUNCAK KEBIASAAN (RANGKUMAN & DOA)
  renderZone5(container) {
    const sum = window.MPI_DATA.materials.misi5?.summary;
    if (!sum) return;

    container.innerHTML = `
      <div class="materi-section-header">
        <div class="materi-badge">👑 Zona 5: Puncak Kebiasaan</div>
        <h3 class="materi-heading">${sum.title}</h3>
        <p class="materi-subheading">${sum.subtitle}</p>
      </div>

      <div class="principles-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-bottom: 24px;">
        ${sum.principles.map(p => `
          <div class="principle-card" style="background: #ffffff; padding: 18px; border-radius: var(--radius-md); border-top: 4px solid var(--color-gold); box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
              <span style="width: 28px; height: 28px; border-radius: 50%; background: var(--color-gold); color: #3e2723; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.85rem;">${p.number}</span>
              <h4 style="color: var(--color-primary-dark); font-size: 1rem; margin: 0;">${p.title}</h4>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5; margin: 0;">${p.text}</p>
          </div>
        `).join("")}
      </div>

      <div class="dua-card" style="background: linear-gradient(135deg, #004d40 0%, #00695c 100%); color: #fff; padding: 24px; border-radius: var(--radius-lg); text-align: center; margin-bottom: 24px; box-shadow: var(--shadow-md); border: 2px solid var(--color-gold);">
        <h4 style="color: var(--color-gold-light); font-size: 1.15rem; margin-bottom: 12px;">🌟 ${sum.dua.title}</h4>
        <div style="font-size: 1.6rem; font-family: 'Amiri', 'Traditional Arabic', serif; line-height: 2; margin: 16px 0; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.4);">
          ${sum.dua.arabic}
        </div>
        <p style="font-style: italic; color: #b2dfdb; font-size: 1rem; margin-bottom: 8px;">
          "${sum.dua.latin}"
        </p>
        <p style="color: #e0f2f1; font-size: 0.95rem; line-height: 1.5;">
          <strong>Artinya:</strong> ${sum.dua.meaning}
        </p>
      </div>

      <div style="text-align: center; padding: 16px; background: rgba(0, 137, 123, 0.08); border-radius: var(--radius-md);">
        <p style="font-weight: 600; color: var(--color-primary-dark); margin-bottom: 12px;">
          Sudah siap menguji pemahaman dan menaklukkan 5 tantangan misi di Pulau Hikmah?
        </p>
        <button class="nav-btn gold-btn btn-back-to-map" style="font-size: 1rem; padding: 12px 28px;">
          🗺️ Buka Peta Jelajah & Taklukkan Misi
        </button>
      </div>
    `;

    // Pasang listener pada tombol kembali di dalam konten zona 5
    const innerBackBtn = container.querySelector(".btn-back-to-map");
    if (innerBackBtn) {
      innerBackBtn.addEventListener("click", () => {
        window.MPI_AUDIO.playClick();
        window.MPI_NAV.goTo("SCR-004");
      });
    }
  }
};
