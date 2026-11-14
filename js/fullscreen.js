/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Pengontrol Layar Penuh Universal (fullscreen.js)
 * Kompatibel dengan semua jenis perangkat: Desktop, Laptop, Tablet, iPad, iPhone, dan Android.
 */

window.MPI_FULLSCREEN = {
  init() {
    const btn = document.getElementById("global-fullscreen-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      if (window.MPI_AUDIO && window.MPI_AUDIO.playClick) {
        window.MPI_AUDIO.playClick();
      }
      this.toggle();
    });

    // Tangani seluruh varian event Fullscreen lintas peramban
    const changeEvents = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange"
    ];
    changeEvents.forEach((ev) => {
      document.addEventListener(ev, () => this.updateUI());
    });

    // Dukungan tombol pintas keyboard 'F' atau 'Esc'
    window.addEventListener("keydown", (e) => {
      if ((e.key === "f" || e.key === "F") && !e.target.matches("input, textarea")) {
        this.toggle();
      }
    });

    this.updateUI();
  },

  isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      document.body.classList.contains("pseudo-fullscreen")
    );
  },

  toggle() {
    if (this.isFullscreen()) {
      this.exit();
    } else {
      this.enter();
    }
  },

  enter() {
    const target = document.documentElement;

    if (target.requestFullscreen) {
      target.requestFullscreen().catch(() => this.enterPseudo());
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    } else {
      // Fallback untuk perangkat iOS / WebKit tanpa izin Fullscreen API
      this.enterPseudo();
    }
  },

  exit() {
    if (document.body.classList.contains("pseudo-fullscreen")) {
      this.exitPseudo();
      return;
    }

    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => this.exitPseudo());
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {
      this.exitPseudo();
    }
  },

  enterPseudo() {
    document.body.classList.add("pseudo-fullscreen");
    window.scrollTo(0, 0);
    this.updateUI();
    if (window.MPI_SCALE && window.MPI_SCALE.update) {
      window.MPI_SCALE.update();
    }
  },

  exitPseudo() {
    document.body.classList.remove("pseudo-fullscreen");
    this.updateUI();
    if (window.MPI_SCALE && window.MPI_SCALE.update) {
      window.MPI_SCALE.update();
    }
  },

  updateUI() {
    const btn = document.getElementById("global-fullscreen-btn");
    if (!btn) return;

    const isFs = this.isFullscreen();
    const expandIcon = btn.querySelector(".fs-icon-expand");
    const compressIcon = btn.querySelector(".fs-icon-compress");

    if (expandIcon && compressIcon) {
      expandIcon.style.display = isFs ? "none" : "flex";
      compressIcon.style.display = isFs ? "flex" : "none";
    }

    btn.title = isFs ? "Keluar Layar Penuh (Esc)" : "Layar Penuh (Fullscreen)";
    btn.setAttribute("aria-label", btn.title);
    btn.classList.toggle("is-fullscreen", isFs);
  }
};
