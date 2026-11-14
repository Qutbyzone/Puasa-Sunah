/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Penyimpanan Data Lokal (localStorage)
 * 100% Offline-Safe, Tanpa Pengiriman Data Eksternal
 */

const STORAGE_KEY = "MPI_EKSPEDISI_PUASA_SUNAH_V1";

window.MPI_STORAGE = {
  // Data default
  getDefaultState() {
    return {
      userName: "",
      unlockedMissions: [1], // Misi 1 terbuka di awal
      completedMissions: [], // Misi yang tuntas
      badgesEarned: [],      // Lencana yang sudah diklaim
      scores: {
        misi1: 0,
        misi2: 0,
        misi3: 0,
        misi4: 0,
        misi5: 0,
        total: 0
      },
      lastScreen: "SCR-001",
      audioSettings: {
        bgmEnabled: true,
        sfxEnabled: true,
        volume: 0.5
      },
      lastUpdated: new Date().toISOString()
    };
  },

  // Memuat state dari localStorage
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.getDefaultState();
      const parsed = JSON.parse(raw);
      return { ...this.getDefaultState(), ...parsed };
    } catch (e) {
      console.warn("Gagal membaca localStorage, menggunakan data default", e);
      return this.getDefaultState();
    }
  },

  // Menyimpan state ke localStorage
  save(state) {
    try {
      state.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      return true;
    } catch (e) {
      console.error("Gagal menyimpan ke localStorage", e);
      return false;
    }
  },

  // Mengambil nama pengguna
  getUserName() {
    const state = this.load();
    return state.userName || "Penjelajah";
  },

  // Menyimpan nama pengguna
  setUserName(name) {
    const state = this.load();
    state.userName = (name || "").trim();
    this.save(state);
  },

  // Menyelesaikan misi & membuka lencana
  completeMission(missionId, score = 100) {
    const state = this.load();
    const id = parseInt(missionId, 10);

    if (!state.completedMissions.includes(id)) {
      state.completedMissions.push(id);
    }

    // Buka misi berikutnya jika ada
    if (id < 5 && !state.unlockedMissions.includes(id + 1)) {
      state.unlockedMissions.push(id + 1);
    }

    // Berikan lencana jika belum ada
    if (!state.badgesEarned.includes(id)) {
      state.badgesEarned.push(id);
    }

    // Simpan skor misi
    state.scores[`misi${id}`] = Math.max(state.scores[`misi${id}`] || 0, score);
    
    // Hitung total skor
    state.scores.total = (
      (state.scores.misi1 || 0) +
      (state.scores.misi2 || 0) +
      (state.scores.misi3 || 0) +
      (state.scores.misi4 || 0) +
      (state.scores.misi5 || 0)
    );

    this.save(state);
    return state;
  },

  // Cek apakah misi sudah selesai
  isMissionCompleted(missionId) {
    const state = this.load();
    return state.completedMissions.includes(parseInt(missionId, 10));
  },

  // Cek apakah misi terbuka
  isMissionUnlocked(missionId) {
    const state = this.load();
    return state.unlockedMissions.includes(parseInt(missionId, 10));
  },

  // Reset progres belajar
  resetProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  }
};
