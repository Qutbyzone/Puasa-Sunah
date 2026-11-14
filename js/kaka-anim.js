/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Modul Animasi & Interaktivitas Karakter Kaka (kaka-anim.js)
 * Fitur: Parallax 3D Mengikuti Kursor, Kedipan Mata, Gerak Mulut (Lip Sync), dan Reaksi Sentuh
 */

window.KAKA_ANIM = {
  isSpeaking: false,
  currentExpression: "senang",
  speakInterval: null,
  mouthState: 0,

  expressions: {
    senang: "assets/characters/kaka-senang.png",
    bicara: "assets/characters/kaka-bicara.png",
    berpikir: "assets/characters/kaka-berpikir.png",
    semangat: "assets/characters/kaka-semangat.png",
    juara: "assets/characters/kaka-juara.png"
  },

  quotes: [
    "Semangat sahabat penjelajah! Ibadah puasa sunah melatih kesabaran kita!",
    "Tahukah kamu? Puasa Senin-Kamis adalah amalan yang rutin dikerjakan Rasulullah saw.!",
    "Hebat sekali! Terus kumpulkan lencana pengetahuan di Pulau Hikmah!",
    "Ingat ya, puasa sunah boleh berniat di pagi hari jika belum makan atau minum!",
    "Di surga kelak ada pintu khusus bernama Ar-Rayyan untuk orang yang berpuasa!"
  ],

  init() {
    this.setupParallax3D();
    this.setupClickInteraction();
  },

  // 1. 3D Tilt Parallax Lembut: Karakter menoleh halus mengikuti kursor
  setupParallax3D() {
    window.addEventListener("mousemove", (e) => {
      const kakaWrappers = document.querySelectorAll(".kaka-interactive-wrap");
      const mouseX = (e.clientX / window.innerWidth) - 0.5;
      const mouseY = (e.clientY / window.innerHeight) - 0.5;

      kakaWrappers.forEach(wrap => {
        const rotY = mouseX * 12; // Sudut kecil halus
        const rotX = -mouseY * 8;
        wrap.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      });
    });

    window.addEventListener("mouseleave", () => {
      const kakaWrappers = document.querySelectorAll(".kaka-interactive-wrap");
      kakaWrappers.forEach(wrap => {
        wrap.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg)`;
      });
    });
  },

  // 2. Interaksi Klik pada Karakter Kaka Dinonaktifkan Total (Tidak ada suara / reaksi saat diklik)
  setupClickInteraction() {
    // Dinonaktifkan: Karakter murni sebagai pendamping visual tanpa memicu suara saat diklik
  },

  // 3. Ubah Ekspresi Karakter Kaka (Mempertahankan aset gambar karakter unik tiap layar)
  setExpression(exprName) {
    if (!this.expressions[exprName]) return;
    this.currentExpression = exprName;
    // Gambar karakter unik tiap layar dipertahankan sesuai tema spesifik masing-masing halaman
  },

  // 4. Suara Berbicara (Hanya menampilkan indikator gelombang suara, TIDAK menukar gambar berkedip/membesar mengecil)
  startSpeaking() {
    if (this.isSpeaking) return;
    this.isSpeaking = true;

    const wraps = document.querySelectorAll(".kaka-interactive-wrap");
    wraps.forEach(w => w.classList.add("speaking"));
  },

  stopSpeaking() {
    this.isSpeaking = false;
    if (this.speakInterval) {
      clearInterval(this.speakInterval);
      this.speakInterval = null;
    }

    const wraps = document.querySelectorAll(".kaka-interactive-wrap");
    wraps.forEach(w => w.classList.remove("speaking"));
  }
};

document.addEventListener("DOMContentLoaded", () => {
  window.KAKA_ANIM.init();
});
