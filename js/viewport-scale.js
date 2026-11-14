/**
 * EKSPEDISI PUASA SUNAH – Petualangan di Pulau Hikmah
 * Viewport Scaling Engine (Fixed Design Canvas 16:9 Uniform Scaling)
 * 
 * Mengimplementasikan sistem scaling seragam (uniform scaling) dengan rasio 16:9
 * tanpa mengubah desain asli, tata letak, proporsi, maupun posisi elemen.
 */

(function () {
  "use strict";

  // Dimensi Kanvas Desain Dasar Resmi (Rasio 16:9)
  const DESIGN_WIDTH = 1280;
  const DESIGN_HEIGHT = 720;

  function updateScale() {
    const stage = document.getElementById("app-stage");
    if (!stage) return;

    // Ambil dimensi viewport perangkat yang aktif
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    if (vw === 0 || vh === 0) return;

    // Rumus Dasar Uniform Scaling: Math.min(vw / designWidth, vh / designHeight)
    const scale = Math.min(vw / DESIGN_WIDTH, vh / DESIGN_HEIGHT);

    // Terapkan skala ke custom property & transform langsung
    stage.style.setProperty("--stage-scale", scale);
    stage.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // Simpan status skala pada objek global untuk referensi pengujian / modul lain
    window.MPI_VIEWPORT = {
      designWidth: DESIGN_WIDTH,
      designHeight: DESIGN_HEIGHT,
      viewportWidth: vw,
      viewportHeight: vh,
      scale: scale,
      scaledWidth: DESIGN_WIDTH * scale,
      scaledHeight: DESIGN_HEIGHT * scale,
      isPortrait: vh > vw
    };

    // Kendalikan petunjuk rotasi perangkat untuk layar HP berorientasi tegak (portrait)
    const rotateHint = document.getElementById("orientation-rotate-hint");
    if (rotateHint) {
      if (vh > vw && vw <= 900) {
        rotateHint.classList.add("visible");
      } else {
        rotateHint.classList.remove("visible");
      }
    }
  }

  // Jalankan seawal mungkin
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateScale);
  } else {
    updateScale();
  }

  // Pasang listener pada perubahan ukuran & orientasi layar
  window.addEventListener("resize", updateScale, { passive: true });
  window.addEventListener("orientationchange", () => {
    setTimeout(updateScale, 60);
    setTimeout(updateScale, 250);
  });

  if (window.screen && window.screen.orientation) {
    try {
      window.screen.orientation.addEventListener("change", () => {
        setTimeout(updateScale, 60);
        setTimeout(updateScale, 250);
      });
    } catch (e) {
      // Abaikan jika tidak didukung
    }
  }

  // Dukungan transisi Fullscreen di seluruh peramban
  const fsEvents = [
    "fullscreenchange",
    "webkitfullscreenchange",
    "mozfullscreenchange",
    "MSFullscreenChange"
  ];
  fsEvents.forEach((evt) => {
    document.addEventListener(evt, () => {
      setTimeout(updateScale, 50);
      setTimeout(updateScale, 200);
    });
  });

  // Ekspor API pengontrol skala
  window.MPI_SCALE = {
    update: updateScale,
    DESIGN_WIDTH: DESIGN_WIDTH,
    DESIGN_HEIGHT: DESIGN_HEIGHT
  };
})();
