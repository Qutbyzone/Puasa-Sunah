/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Tata Suara & Voice Over MP3/WAV (audio.js)
 * Mendukung File Audio MP3 Nyata + Fallback Web Audio API & Web Speech API
 */

window.MPI_AUDIO = {
  ctx: null,
  bgmAudio: null,
  voiceAudio: null,
  isMuted: false,
  volume: 0.6,
  isBgmPlaying: false,

  // DAFTAR FILE VOICE OVER (MENDUKUNG FORMAT WAV MAUPUN MP3)
  // Lokasi folder: assets/audio/narration/
  voMap: {
    // 01. Cover & Judul (SCR-001)
    "SCR-001": [
      "assets/audio/narration/vo-01-cover.wav",
      "assets/audio/narration/vo-01-cover.mp3",
      "assets/audio/narration/vo-cover-judul.wav",
      "assets/audio/narration/vo-cover-judul.mp3"
    ],
    "cover-judul": [
      "assets/audio/narration/vo-01-cover.wav",
      "assets/audio/narration/vo-01-cover.mp3",
      "assets/audio/narration/vo-cover-judul.wav",
      "assets/audio/narration/vo-cover-judul.mp3"
    ],
    "vo-01-cover": [
      "assets/audio/narration/vo-01-cover.wav",
      "assets/audio/narration/vo-01-cover.mp3"
    ],

    // 02. Identitas / Pendaftaran Murid (SCR-002)
    "SCR-002": [
      "assets/audio/narration/vo-02-pendaftaran.wav",
      "assets/audio/narration/vo-02-pendaftaran.mp3",
      "assets/audio/narration/vo-salam-pembuka.wav",
      "assets/audio/narration/vo-salam-pembuka.mp3"
    ],
    "salam-pembuka": [
      "assets/audio/narration/vo-02-pendaftaran.wav",
      "assets/audio/narration/vo-02-pendaftaran.mp3",
      "assets/audio/narration/vo-salam-pembuka.wav",
      "assets/audio/narration/vo-salam-pembuka.mp3"
    ],

    // 03. Kisah Awal Slide 1, 2, 3 (SCR-003)
    "cerita-1": [
      "assets/audio/narration/vo-03-kisah-1.wav",
      "assets/audio/narration/vo-03-kisah-1.mp3",
      "assets/audio/narration/vo-cerita-1.wav",
      "assets/audio/narration/vo-cerita-1.mp3"
    ],
    "cerita-2": [
      "assets/audio/narration/vo-03-kisah-2.wav",
      "assets/audio/narration/vo-03-kisah-2.mp3",
      "assets/audio/narration/vo-cerita-2.wav",
      "assets/audio/narration/vo-cerita-2.mp3"
    ],
    "cerita-3": [
      "assets/audio/narration/vo-03-kisah-3.wav",
      "assets/audio/narration/vo-03-kisah-3.mp3",
      "assets/audio/narration/vo-cerita-3.wav",
      "assets/audio/narration/vo-cerita-3.mp3"
    ],
    "SCR-003-slide-1": [
      "assets/audio/narration/vo-03-kisah-1.wav",
      "assets/audio/narration/vo-03-kisah-1.mp3",
      "assets/audio/narration/vo-cerita-1.wav",
      "assets/audio/narration/vo-cerita-1.mp3"
    ],
    "SCR-003-slide-2": [
      "assets/audio/narration/vo-03-kisah-2.wav",
      "assets/audio/narration/vo-03-kisah-2.mp3",
      "assets/audio/narration/vo-cerita-2.wav",
      "assets/audio/narration/vo-cerita-2.mp3"
    ],
    "SCR-003-slide-3": [
      "assets/audio/narration/vo-03-kisah-3.wav",
      "assets/audio/narration/vo-03-kisah-3.mp3",
      "assets/audio/narration/vo-cerita-3.wav",
      "assets/audio/narration/vo-cerita-3.mp3"
    ],

    // 04. Peta Jelajah Pulau Hikmah (SCR-004)
    "SCR-004": [
      "assets/audio/narration/vo-04-peta.wav",
      "assets/audio/narration/vo-04-peta.mp3"
    ],

    // 05. Misi 1: Pantai Pengetahuan (SCR-005)
    "SCR-005": [
      "assets/audio/narration/vo-05-misi1.wav",
      "assets/audio/narration/vo-05-misi1.mp3",
      "assets/audio/narration/vo-misi1-panduan.wav",
      "assets/audio/narration/vo-misi1-panduan.mp3"
    ],
    "misi1-panduan": [
      "assets/audio/narration/vo-05-misi1.wav",
      "assets/audio/narration/vo-05-misi1.mp3",
      "assets/audio/narration/vo-misi1-panduan.wav",
      "assets/audio/narration/vo-misi1-panduan.mp3"
    ],

    // 06. Misi 2: Hutan Kalender (SCR-006)
    "SCR-006": [
      "assets/audio/narration/vo-06-misi2.wav",
      "assets/audio/narration/vo-06-misi2.mp3"
    ],

    // 07. Misi 3: Gua Hadis (SCR-007)
    "SCR-007": [
      "assets/audio/narration/vo-07-misi3.wav",
      "assets/audio/narration/vo-07-misi3.mp3"
    ],

    // 08. Misi 4: Desa Inspirasi (SCR-008)
    "SCR-008": [
      "assets/audio/narration/vo-08-misi4.wav",
      "assets/audio/narration/vo-08-misi4.mp3"
    ],

    // 09. Misi 5: Puncak Kebiasaan (SCR-009)
    "SCR-009": [
      "assets/audio/narration/vo-09-misi5.wav",
      "assets/audio/narration/vo-09-misi5.mp3"
    ],

    // 10. Rapor Capaian Ekspedisi (SCR-010)
    "SCR-010": [
      "assets/audio/narration/vo-10-rapor.wav",
      "assets/audio/narration/vo-10-rapor.mp3"
    ],

    // 11. Ruang Koleksi Lencana (SCR-011)
    "SCR-011": [
      "assets/audio/narration/vo-11-lencana.wav",
      "assets/audio/narration/vo-11-lencana.mp3"
    ],

    // 12. Refleksi & Doa (SCR-012)
    "SCR-012": [
      "assets/audio/narration/vo-12-refleksi.wav",
      "assets/audio/narration/vo-12-refleksi.mp3"
    ],

    // 13. Ruang Materi Pembelajaran (SCR-013)
    "SCR-013": [
      "assets/audio/narration/vo-13-materi.wav",
      "assets/audio/narration/vo-13-materi.mp3"
    ],

    // Efek Feedback
    "jawaban-benar": [
      "assets/audio/narration/vo-jawaban-benar.wav",
      "assets/audio/narration/vo-jawaban-benar.mp3"
    ],
    "klaim-lencana": [
      "assets/audio/narration/vo-klaim-lencana.wav",
      "assets/audio/narration/vo-klaim-lencana.mp3"
    ]
  },

  getDefaultSpeechText(voKey) {
    const textMap = {
      "SCR-001": "Selamat datang di Ekspedisi Puasa Sunah: Petualangan di Pulau Hikmah! Jelajahi lima zona penuh rahasia dan kumpulkan lima Lencana Pusaka!",
      "cover-judul": "Selamat datang di Ekspedisi Puasa Sunah: Petualangan di Pulau Hikmah! Jelajahi lima zona penuh rahasia dan kumpulkan lima Lencana Pusaka!",

      "SCR-002": "Assalamu'alaikum sahabat penjelajah! Aku Kaka, pemandumu di Pulau Hikmah yang penuh keajaiban ini! Sebelum perahu kita berlayar, tuliskan nama panggilan hebatmu di buku catatan ekspedisi ya!",
      "salam-pembuka": "Assalamu'alaikum sahabat penjelajah! Aku Kaka, pemandumu di Pulau Hikmah yang penuh keajaiban ini! Sebelum perahu kita berlayar, tuliskan nama panggilan hebatmu di buku catatan ekspedisi ya!",

      "cerita-1": "Selamat datang di Pulau Hikmah yang indah dan penuh keajaiban! Di pulau ini kita akan mempelajari indahnya amalan puasa sunah.",
      "SCR-003-slide-1": "Selamat datang di Pulau Hikmah yang indah dan penuh keajaiban! Di pulau ini kita akan mempelajari indahnya amalan puasa sunah.",

      "cerita-2": "Pulau ini menyimpan lima Lencana Pusaka tentang keutamaan dan ketentuan puasa sunah yang sangat dicintai oleh Nabi Muhammad saw.",
      "SCR-003-slide-2": "Pulau ini menyimpan lima Lencana Pusaka tentang keutamaan dan ketentuan puasa sunah yang sangat dicintai oleh Nabi Muhammad saw.",

      "cerita-3": "Kita akan menjelajahi Pantai Pengetahuan, Hutan Kalender, Gua Hadis, Desa Inspirasi, hingga Puncak Kebiasaan. Mari kita mulai petualangan ini!",
      "SCR-003-slide-3": "Kita akan menjelajahi Pantai Pengetahuan, Hutan Kalender, Gua Hadis, Desa Inspirasi, hingga Puncak Kebiasaan. Mari kita mulai petualangan ini!",

      "SCR-004": "Inilah Peta Jelajah Pulau Hikmah! Buka zona misimu atau buka ruang materi untuk memperdalam ilmumu!",

      "SCR-005": "Mari pahami pengertian puasa sunah dan perbedaannya dengan puasa wajib Ramadan!",
      "misi1-panduan": "Mari pahami pengertian puasa sunah dan perbedaannya dengan puasa wajib Ramadan!",

      "SCR-006": "Pohon-pohon ini menyimpan jadwal delapan puasa sunah! Kerjakan tantangan kalender di samping ya!",

      "SCR-007": "Cahaya lentera menyingkap kemudahan niat dan pintu surga Ar-Rayyan bagi orang yang berpuasa!",

      "SCR-008": "Puasa melatih kita menjadi anak yang ikhlas, santun, dan peduli kepada sesama!",

      "SCR-009": "Ini ujian terakhir dari seluruh perjalananmu! Jawab lima belas soal untuk membuktikan ilmumu!",

      "SCR-010": "Alhamdulillah! Nilai dan pencapaianmu sangat membanggakan! Kamu adalah penjelajah sejati Pulau Hikmah!",

      "SCR-011": "Setiap lencana adalah bukti penguasaan materi dan tekad beribadahmu!",

      "SCR-012": "Sampai jumpa lagi sahabat penjelajah! Semoga berkah dan sukses selalu untukmu! Wassalamu'alaikum!",

      "SCR-013": "Selamat datang di Ruang Materi! Pilih salah satu dari lima zona ekspedisi untuk mempelajari ilmu puasa sunah!",

      "jawaban-benar": "Hebat sekali! Jawabanmu tepat!",
      "klaim-lencana": "Alhamdulillah! Selamat, kamu berhasil meraih Lencana Pusaka!"
    };
    return textMap[voKey] || "";
  },

  init() {
    if (!this.bgmAudio) {
      this.bgmAudio = new Audio();
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = this.volume * 0.45;

      const bgmFiles = [
        "assets/audio/music/bgm-petualangan.wav",
        "assets/audio/music/bgm-petualangan.mp3"
      ];
      let bgmIdx = 0;
      const tryBgm = () => {
        if (bgmIdx < bgmFiles.length) {
          this.bgmAudio.src = bgmFiles[bgmIdx++];
        }
      };
      this.bgmAudio.onerror = tryBgm;
      tryBgm();
    }

    if (!this.voiceAudio) {
      this.voiceAudio = document.getElementById("cover-voice-player") || new Audio();
      this.voiceAudio.volume = 1.0;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext && !this.ctx) {
      this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  },

  // 1. Voice Over Pemutaran File MP3 Nyata + Auto Fallback ke Speech Synthesis
  playVoiceOver(voKey, onEnd) {
    this.init();
    if (this.isMuted) return;

    // Picu indikator suara berbicara Kaka (kecuali untuk narasi judul cover)
    if (voKey !== "SCR-001" && voKey !== "cover-judul" && window.KAKA_ANIM) {
      window.KAKA_ANIM.startSpeaking();
    }

    const defaultText = this.getDefaultSpeechText(voKey);
    let sources = this.voMap[voKey] || [];
    if (!Array.isArray(sources)) sources = [sources];

    let currentSrcIdx = 0;

    const tryNext = () => {
      if (currentSrcIdx < sources.length && sources[currentSrcIdx]) {
        const src = sources[currentSrcIdx++];
        if (!this.voiceAudio) return;
        this.voiceAudio.pause();
        this.voiceAudio.src = src;
        this.voiceAudio.currentTime = 0;

        this.voiceAudio.onended = () => {
          if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
          if (typeof onEnd === "function") onEnd();
        };

        this.voiceAudio.onerror = () => {
          tryNext();
        };

        const playPromise = this.voiceAudio.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            if (e && e.name === "NotAllowedError") {
              this.pendingAutoplayKey = voKey;
              this.pendingAutoplayEnd = onEnd;
            } else {
              tryNext();
            }
          });
        }
      } else {
        // Jika file audio belum ditambahkan, otomatis fallback bacakan teks suara natural
        if (defaultText) {
          this.speak(defaultText, onEnd);
        } else {
          if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
          if (typeof onEnd === "function") onEnd();
        }
      }
    };

    tryNext();
  },

  // Narasi Khusus Cerita Pembuka (Autoplay MP3 atau Suara Narasi Natural)
  playStoryNarration(voKey, storyText, onEnd) {
    this.init();
    if (this.isMuted) return;

    let sources = this.voMap[voKey] || [];
    if (!Array.isArray(sources)) sources = [sources];

    let currentSrcIdx = 0;

    const tryNext = () => {
      if (currentSrcIdx < sources.length && sources[currentSrcIdx]) {
        const src = sources[currentSrcIdx++];
        if (!this.voiceAudio) return;
        this.voiceAudio.pause();
        this.voiceAudio.src = src;
        this.voiceAudio.currentTime = 0;

        this.voiceAudio.onended = () => {
          if (typeof onEnd === "function") onEnd();
        };

        this.voiceAudio.onerror = () => {
          tryNext();
        };

        this.voiceAudio.play().catch(e => {
          tryNext();
        });
      } else {
        this.speak(storyText, onEnd);
      }
    };

    tryNext();
  },

  // 2. Narasi Teks dengan Suara Indonesia (Web Speech API) + Lip-Sync
  speak(text, onEnd) {
    this.init();
    if (this.isMuted) return;

    // Nyalakan animasi Kaka berbicara
    if (window.KAKA_ANIM) {
      window.KAKA_ANIM.startSpeaking();
    }

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = "id-ID";
      utt.rate = 1.0;
      utt.pitch = 1.2; // Suara anak ceria

      const voices = window.speechSynthesis.getVoices();
      const idVoice = voices.find(v => v.lang.includes("id") || v.lang.includes("ID"));
      if (idVoice) utt.voice = idVoice;

      utt.onend = () => {
        if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
        if (typeof onEnd === "function") onEnd();
      };

      utt.onerror = () => {
        if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
      };

      window.speechSynthesis.speak(utt);
    } else {
      setTimeout(() => {
        if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
      }, 3000);
    }
  },

  stopSpeak() {
    if (this.voiceAudio) this.voiceAudio.pause();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (window.KAKA_ANIM) window.KAKA_ANIM.stopSpeaking();
  },

  // 3. Musik Latar Belakang (BGM)
  toggleBGM() {
    this.init();
    if (this.isBgmPlaying) {
      this.stopBGM();
      return false;
    } else {
      this.startBGM();
      return true;
    }
  },

  startBGM() {
    this.init();
    if (this.isMuted || !this.bgmAudio) return;
    this.isBgmPlaying = true;
    this.bgmAudio.play().catch(e => console.log("BGM autoplay note:", e));
  },

  stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmAudio) this.bgmAudio.pause();
  },

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBGM();
      this.stopSpeak();
    } else {
      this.startBGM();
    }
    return this.isMuted;
  },

  // 4. Efek Suara (SFX) Synthesizer
  playClick() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.05);
      g.gain.setValueAtTime(0.2, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch(e) {}
  },

  playCorrect() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    if (window.KAKA_ANIM) window.KAKA_ANIM.setExpression("semangat");
    try {
      [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.08;
        osc.frequency.setValueAtTime(f, t);
        g.gain.setValueAtTime(0.25, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.26);
      });
    } catch(e) {}
  },

  playWrong() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    if (window.KAKA_ANIM) window.KAKA_ANIM.setExpression("berpikir");
    try {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.frequency.setValueAtTime(329.63, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(261.63, this.ctx.currentTime + 0.25);
      g.gain.setValueAtTime(0.2, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.26);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.27);
    } catch(e) {}
  },

  playBadge() {
    this.init();
    if (this.isMuted || !this.ctx) return;
    if (window.KAKA_ANIM) window.KAKA_ANIM.setExpression("semangat");
    try {
      [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const t = this.ctx.currentTime + idx * 0.12;
        osc.frequency.setValueAtTime(f, t);
        g.gain.setValueAtTime(0.3, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(t);
        osc.stop(t + 0.55);
      });
    } catch(e) {}
  }
};
